import { browser } from '$app/environment';
export const environment: "dev" | "prod" = "dev"
export const backend_ip = environment === "dev" ? "http://192.168.0.2:3000" : "http://117.55.230.69:3000"
export const API_BASE = (() => {
  if (!browser) return backend_ip;

  const { protocol, hostname } = window.location;

  if (protocol === 'https:') {
    return 'https://api.anzdevelopers.com';
  }

  // http checking for IP or localhost
  const isLocalhost = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(hostname) || hostname === 'localhost';
  if (isLocalhost) {
    // if (hostname === 'localhost') {
    //     return 'http://localhost:3434';
    // }
    return backend_ip;
  }

  return 'http://api.anzdevelopers.com';
})();

async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE}${endpoint}`;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || 'Request failed');
  }

  return res.json();
}

export const api = {
  // Projects
  getProjects: () => fetchApi<any[]>('/projects'),
  getProject: (slug: string) => fetchApi<any>(`/projects/${slug}`),

  // Services
  getServices: () => fetchApi<any[]>('/services'),

  // Blog
  getBlogs: (params?: { page?: number; category?: string }) => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set('page', String(params.page));
    if (params?.category) searchParams.set('category', params.category);
    const qs = searchParams.toString();
    return fetchApi<any>(`/blogs${qs ? `?${qs}` : ''}`);
  },
  getBlog: (slug: string) => fetchApi<any>(`/blogs/${slug}`),

  // Profile
  getProfile: () => fetchApi<any>('/profile'),

  // Leads
  submitLead: (data: any) =>
    fetchApi<any>('/leads', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // Auth
  login: (email: string, password: string) =>
    fetchApi<any>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
};
