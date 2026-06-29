<script lang="ts">
  import { ArrowRight, Calendar, User, Tag } from '@lucide/svelte';

  const categories = ['All', 'Backend Engineering', 'Real-Time Systems', 'Architecture', 'AI Development'];
  let activeCategory = $state('All');

  const posts = [
    {
      title: 'Building Scalable APIs with Fastify',
      slug: 'building-scalable-apis-with-fastify',
      excerpt: 'Learn how to build high-performance, scalable REST APIs using Fastify, Redis caching, and modern backend patterns.',
      category: 'Backend Engineering',
      date: 'May 15, 2026',
      tags: ['Fastify', 'Node.js', 'API'],
    },
    {
      title: 'Redis Caching Strategies for High Performance',
      slug: 'redis-caching-strategies',
      excerpt: 'Explore Redis caching patterns that can reduce your API response times by up to 90%.',
      category: 'Backend Engineering',
      date: 'Apr 28, 2026',
      tags: ['Redis', 'Caching', 'Performance'],
    },
    {
      title: 'Designing Real-Time Systems with Socket.IO',
      slug: 'designing-real-time-systems-socketio',
      excerpt: 'Architecture patterns for building scalable real-time systems with Socket.IO and Redis pub/sub.',
      category: 'Real-Time Systems',
      date: 'Apr 10, 2026',
      tags: ['Socket.IO', 'Real-Time', 'WebSockets'],
    },
    {
      title: 'AI-Assisted Development Workflows',
      slug: 'ai-assisted-development',
      excerpt: 'Leverage AI tools to accelerate development while maintaining engineering quality.',
      category: 'AI Development',
      date: 'Mar 20, 2026',
      tags: ['AI', 'Productivity', 'Engineering'],
    },
  ];

  let filteredPosts = $derived(
    activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)
  );
</script>

<svelte:head>
  <title>Engineering Blog | AnZ Developers</title>
  <meta name="description" content="Technical articles on backend engineering, real-time systems, Redis, Fastify, architecture patterns, and AI development." />
</svelte:head>

<div class="bg-black text-white selection:bg-indigo-500/30">
  <!-- Header -->
  <section class="relative pt-20 pb-16">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.1)_0%,rgba(0,0,0,1)_70%)]"></div>
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <span class="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">Engineering Blog</span>
        <h1 class="mt-4 text-4xl font-bold text-white sm:text-5xl">Blog</h1>
        <p class="mt-4 text-lg text-zinc-400">Technical articles on backend engineering, architecture and scalability.</p>
      </div>
    </div>
  </section>

  <!-- Content -->
  <section class="py-12 border-t border-zinc-800/30">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-[250px_1fr]">
        <!-- Sidebar Categories -->
        <aside class="space-y-2">
          <h3 class="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">Categories</h3>
          {#each categories as category}
            <button
              onclick={() => (activeCategory = category)}
              class="block w-full text-left rounded-lg px-3 py-2 text-sm font-medium transition-colors {activeCategory === category
                ? 'bg-zinc-800/50 text-white'
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/20'}"
            >
              {category}
            </button>
          {/each}
        </aside>

        <!-- Blog Posts Grid -->
        <div class="grid gap-6 sm:grid-cols-2">
          {#each filteredPosts as post}
            <a
              href="/blog/{post.slug}"
              class="group flex flex-col rounded-xl border border-zinc-800/50 bg-zinc-950/30 overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1"
            >
              <!-- Cover placeholder -->
              <div class="aspect-[16/9] bg-gradient-to-br from-zinc-800/30 to-zinc-900 flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                <div class="text-center">
                  <Tag class="h-8 w-8 text-indigo-400/40 mx-auto" />
                </div>
              </div>

              <div class="flex flex-col flex-1 p-5">
                <div class="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                  <span class="flex items-center gap-1">
                    <Calendar class="h-3 w-3" />
                    {post.date}
                  </span>
                  <span class="text-zinc-700">·</span>
                  <span>{post.category}</span>
                </div>

                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{post.title}</h3>
                <p class="text-sm text-zinc-500 leading-relaxed flex-1">{post.excerpt}</p>

                <div class="mt-4 pt-4 border-t border-zinc-800/30">
                  <span class="inline-flex items-center text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                    Read Article
                    <ArrowRight class="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </a>
          {/each}

          {#if filteredPosts.length === 0}
            <div class="col-span-2 text-center py-20">
              <p class="text-zinc-500">No posts found in this category.</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
</div>
