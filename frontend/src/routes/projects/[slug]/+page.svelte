<script lang="ts">
  import { page } from '$app/stores';
  import { ArrowRight, Play, ExternalLink, Server, CheckCircle2 } from '@lucide/svelte';

  let activeTab = $state('overview');

  const slug = $derived($page.params.slug);

  // Static project data (in production, fetch from API)
  const projectsData: Record<string, any> = {
    'enterprise-workforce-management': {
      title: 'Enterprise Workforce Management Platform',
      description: 'A complete enterprise solution for workforce management with real-time tracking, scheduling, attendance, offline sync, reporting and AI-powered insights. A generative admin dashboard.',
      coverImage: null,
      videoUrl: 'https://www.youtube.com/watch?v=M8YWf6uVqpc',
      techStack: ['SvelteKit', 'Fastify', 'TypeScript', 'MySQL', 'Redis', 'Socket.IO', 'Flutter'],
      tags: ['Backend', 'Real Time', 'Enterprise'],
      problem: 'Businesses that run field service operations struggle with manual tracking, disconnected attendance, lack of real-time visibility and inefficient schedules.',
      solution: 'We built a comprehensive platform that covers real-time tracking, offline capabilities, intelligent scheduling, automated reporting and a generative admin dashboard.',
      architecture: 'Three-component architecture: Fastify REST + Socket.IO backend, SvelteKit dashboard, Flutter mobile app with offline-first sync.',
      features: ['Real-Time Tracking', 'Role-Based Access', 'Offline First', 'Advanced Reporting', 'AI Scheduling', 'Mobile + Web + Backend'],
      keyResults: [
        { value: '40%', label: 'Improvement in Productivity' },
        { value: '60%', label: 'Reduction in Manual Work' },
        { value: '99.9%', label: 'System Uptime' },
        { value: '1000+', label: 'Active Users' },
      ],
      challenges: 'Real-Time Architecture, Offline-First Mobile, GPS-tracked patrol tours, RBAC, AI Scheduling.',
      results: 'Delivered a complete three-component enterprise workforce platform in 3 weeks.',
    },
    'social-feed-platform': {
      title: 'Social Feed Platform',
      description: 'Full-stack social media application built in 3 days with JWT auth, cursor-paginated feed, threaded comments, and real-time Socket.IO notifications.',
      coverImage: null,
      videoUrl: null,
      techStack: ['Next.js', 'React', 'TypeScript', 'Express', 'MySQL', 'Socket.IO'],
      tags: ['Backend', 'Real Time'],
      problem: 'Building a production-quality social platform from scratch under extreme time constraints.',
      solution: 'Architected a modular full-stack system with efficient data loading patterns and real-time updates.',
      architecture: 'Next.js frontend, Express API, MySQL database, Socket.IO for real-time notifications.',
      features: ['Real-Time Notifications', 'Threaded Comments', 'Cursor Pagination', 'Image Uploads'],
      keyResults: [
        { value: '3', label: 'Days to Ship' },
        { value: '0', label: 'N+1 Queries' },
        { value: '100%', label: 'Test Coverage' },
      ],
      challenges: 'Engineered for scale: batched post hydration eliminating N+1 queries.',
      results: 'Features JWT cookie-based auth, cursor-paginated feed, public/private post visibility.',
    },
    'coin-flip-platform': {
      title: 'Coin Flip Platform',
      description: 'A robust, live coin betting game with Unity frontend and Node.js backend. Features live betting, crypto wallet integration, and real-time global chat.',
      coverImage: null,
      videoUrl: null,
      techStack: ['Unity', 'Node.js', 'Express', 'Socket.IO'],
      tags: ['Backend', 'Real Time'],
      problem: 'Creating a fair, real-time betting platform with cryptocurrency integration.',
      solution: 'Built a microservice architecture with Socket.IO for real-time game events and secure transaction processing.',
      architecture: 'Unity WebGL frontend, Express + Socket.IO backend microservices.',
      features: ['Live Betting', 'Real-Time Chat', 'Crypto Wallet', 'User Retention'],
      keyResults: [],
      challenges: 'Real-time betting system synchronization and secure crypto transactions.',
      results: 'Robust real-time betting platform with live chat and crypto integration.',
    },
  };

  let project = $derived(projectsData[slug] || null);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'features', label: 'Features' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'results', label: 'Results' },
    { id: 'tech-stack', label: 'Tech Stack' },
  ];
</script>

<svelte:head>
  <title>{project?.title || 'Case Study'} | AnZ Developers</title>
  <meta name="description" content={project?.description || 'Project case study by AnZ Developers'} />
</svelte:head>

<div class="bg-black text-white selection:bg-indigo-500/30">
  {#if project}
    <!-- Hero -->
    <section class="relative pt-20 pb-12">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.1)_0%,rgba(0,0,0,1)_70%)]"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2 items-center">
          <div class="space-y-6">
            <div class="flex flex-wrap gap-2">
              {#each project.tags as tag}
                <span class="rounded-full bg-zinc-800/60 px-3 py-1 text-xs font-medium text-zinc-400">{tag}</span>
              {/each}
            </div>
            <h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">{project.title}</h1>
            <p class="text-lg text-zinc-400 leading-relaxed">{project.description}</p>
            <div class="flex flex-wrap gap-3">
              {#if project.videoUrl}
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" class="inline-flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors">
                  <Play class="h-4 w-4" />
                  Live Demo
                </a>
              {/if}
              <a href={project.videoUrl || '#'} target="_blank" rel="noopener noreferrer" class="inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-700 px-5 text-sm font-medium text-zinc-300 hover:border-zinc-500 transition-colors">
                <Play class="h-3.5 w-3.5" />
                Watch Video
              </a>
            </div>
          </div>

          <!-- Screenshot placeholder -->
          <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 shadow-2xl">
            <div class="aspect-video rounded-lg bg-gradient-to-br from-zinc-800/30 to-zinc-900 flex items-center justify-center">
              <div class="text-center space-y-2">
                <Server class="h-12 w-12 text-indigo-400/50 mx-auto" />
                <p class="text-xs text-zinc-600">Project Screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tabs -->
    <section class="border-b border-zinc-800/50 sticky top-16 z-20 bg-black/80 backdrop-blur-xl">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex gap-1 overflow-x-auto pb-px -mb-px">
          {#each tabs as tab}
            <button
              onclick={() => (activeTab = tab.id)}
              class="shrink-0 rounded-t-lg border-b-2 px-4 py-3 text-sm font-medium transition-colors {activeTab === tab.id
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-zinc-500 hover:text-zinc-300'}"
            >
              {tab.label}
            </button>
          {/each}
        </div>
      </div>
    </section>

    <!-- Tab Content -->
    <section class="py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {#if activeTab === 'overview'}
          <div class="grid gap-16 lg:grid-cols-2">
            <div class="space-y-8">
              <div>
                <h2 class="text-2xl font-bold text-white mb-4">The Problem</h2>
                <p class="text-zinc-400 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-white mb-4">Our Solution</h2>
                <p class="text-zinc-400 leading-relaxed">{project.solution}</p>
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-white mb-6">Key Results</h2>
              {#if project.keyResults.length > 0}
                <div class="grid grid-cols-2 gap-4">
                  {#each project.keyResults as result}
                    <div class="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-5 text-center">
                      <div class="text-3xl font-bold text-indigo-400">{result.value}</div>
                      <div class="mt-1 text-xs text-zinc-500">{result.label}</div>
                    </div>
                  {/each}
                </div>
              {:else}
                <p class="text-zinc-500">Results data coming soon.</p>
              {/if}
            </div>
          </div>

        {:else if activeTab === 'architecture'}
          <div class="max-w-3xl">
            <h2 class="text-2xl font-bold text-white mb-6">Architecture</h2>
            <p class="text-zinc-400 leading-relaxed">{project.architecture}</p>
          </div>

        {:else if activeTab === 'features'}
          <div>
            <h2 class="text-2xl font-bold text-white mb-6">Features</h2>
            <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {#each project.features as feature}
                <div class="flex items-center gap-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20 px-4 py-3">
                  <CheckCircle2 class="h-4 w-4 text-emerald-400 shrink-0" />
                  <span class="text-sm text-zinc-300">{feature}</span>
                </div>
              {/each}
            </div>
          </div>

        {:else if activeTab === 'challenges'}
          <div class="max-w-3xl">
            <h2 class="text-2xl font-bold text-white mb-6">Challenges</h2>
            <p class="text-zinc-400 leading-relaxed">{project.challenges}</p>
          </div>

        {:else if activeTab === 'results'}
          <div class="max-w-3xl">
            <h2 class="text-2xl font-bold text-white mb-6">Results</h2>
            <p class="text-zinc-400 leading-relaxed">{project.results}</p>
          </div>

        {:else if activeTab === 'tech-stack'}
          <div>
            <h2 class="text-2xl font-bold text-white mb-6">Technology Stack</h2>
            <div class="flex flex-wrap gap-3">
              {#each project.techStack as tech}
                <span class="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-300">{tech}</span>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </section>
  {:else}
    <section class="flex min-h-[60vh] items-center justify-center">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <p class="text-zinc-400 mb-6">The project you're looking for doesn't exist.</p>
        <a href="/projects" class="inline-flex h-10 items-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white hover:bg-indigo-500">
          View All Projects
        </a>
      </div>
    </section>
  {/if}
</div>
