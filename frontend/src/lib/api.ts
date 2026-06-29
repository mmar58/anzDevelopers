const API_BASE = 'http://localhost:3000/api';

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
