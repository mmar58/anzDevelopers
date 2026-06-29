<script lang="ts">
  import { page } from '$app/stores';
  import { Calendar, User, ArrowLeft, Tag } from '@lucide/svelte';

  const slug = $derived($page.params.slug);

  const postsData: Record<string, any> = {
    'building-scalable-apis-with-fastify': {
      title: 'Building Scalable APIs with Fastify',
      excerpt: 'Learn how to build high-performance, scalable REST APIs using Fastify, Redis caching, and modern backend patterns.',
      category: 'Backend Engineering',
      date: 'May 15, 2026',
      author: 'Malik Md Apu Rahman',
      tags: ['Fastify', 'Node.js', 'API', 'Redis', 'Backend'],
      content: `Fastify is one of the fastest Node.js frameworks in the entire web ecosystem. In this article, we explore how to build high-performance, scalable REST APIs with Fastify.

From schema validation to plugin architecture, Fastify provides everything needed for enterprise-grade backends.

## 1. Use Schema Validation

Fastify has built-in JSON Schema validation that not only validates your request/response but also serializes responses faster. This is one of the key reasons Fastify outperforms other Node.js frameworks.

## 2. Redis Caching Strategies

Implement intelligent caching layers using Redis to dramatically reduce database load. Consider cache-aside patterns for frequently accessed data and write-through caching for consistency.

## 3. Plugin Architecture

Leverage Fastify's encapsulated plugin system for modular, maintainable code. Each plugin has its own context and can be registered with specific prefixes.

## 4. AI-Assisted Development

Use AI tools to accelerate boilerplate generation while focusing on architecture decisions. The key is to use AI for repetitive tasks and maintain human oversight for critical design choices.`,
    },
    'redis-caching-strategies': {
      title: 'Redis Caching Strategies for High Performance',
      excerpt: 'Explore Redis caching patterns that can reduce your API response times by up to 90%.',
      category: 'Backend Engineering',
      date: 'Apr 28, 2026',
      author: 'Malik Md Apu Rahman',
      tags: ['Redis', 'Caching', 'Performance', 'Backend'],
      content: `Redis is a powerful in-memory data store that can dramatically improve your application performance. In this article, we explore the best caching strategies and patterns for production systems.

## Cache-Aside Pattern

The most common caching pattern. Check cache first, if miss, load from database and store in cache.

## Write-Through Caching

Write to both cache and database simultaneously. Ensures cache is always up to date but adds latency to write operations.

## TTL-Based Expiration

Set appropriate TTL values based on your data's staleness tolerance. Use shorter TTLs for frequently changing data and longer TTLs for static content.`,
    },
    'designing-real-time-systems-socketio': {
      title: 'Designing Real-Time Systems with Socket.IO',
      excerpt: 'Architecture patterns for building scalable real-time systems with Socket.IO.',
      category: 'Real-Time Systems',
      date: 'Apr 10, 2026',
      author: 'Malik Md Apu Rahman',
      tags: ['Socket.IO', 'Real-Time', 'WebSockets', 'Redis'],
      content: `Real-time features are essential in modern applications. This article covers architecture patterns for building scalable real-time systems using Socket.IO and Redis pub/sub.

## Room-Based Architecture

Organize your real-time events into rooms for efficient message delivery. Use role-based rooms for authorization.

## Redis Pub/Sub for Horizontal Scaling

When running multiple Socket.IO server instances, use Redis adapter for cross-server communication.`,
    },
    'ai-assisted-development': {
      title: 'AI-Assisted Development Workflows',
      excerpt: 'Leverage AI tools to accelerate development while maintaining engineering quality.',
      category: 'AI Development',
      date: 'Mar 20, 2026',
      author: 'Malik Md Apu Rahman',
      tags: ['AI', 'Productivity', 'Engineering'],
      content: `How to leverage AI tools effectively in your development workflow while maintaining engineering quality and architectural integrity.

## The Right Balance

AI excels at boilerplate generation and pattern recognition. Keep human oversight for architecture decisions and security considerations.

## Workflow Integration

Integrate AI tools into your IDE, CI/CD pipeline, and code review process for maximum impact.`,
    },
  };

  let post = $derived(postsData[slug] || null);
</script>

<svelte:head>
  <title>{post?.title || 'Blog Post'} | AnZ Developers</title>
  <meta name="description" content={post?.excerpt || 'Blog post by AnZ Developers'} />
</svelte:head>

<div class="bg-black text-white selection:bg-indigo-500/30">
  {#if post}
    <!-- Header -->
    <section class="relative pt-20 pb-12">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.1)_0%,rgba(0,0,0,1)_70%)]"></div>
      <div class="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <a href="/blog" class="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8">
          <ArrowLeft class="h-4 w-4" />
          Back to Blog
        </a>

        <div class="space-y-4">
          <span class="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-400">
            {post.category}
          </span>
          <h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">{post.title}</h1>
          <div class="flex items-center gap-4 text-sm text-zinc-500">
            <span class="flex items-center gap-1.5">
              <User class="h-4 w-4" />
              {post.author}
            </span>
            <span class="flex items-center gap-1.5">
              <Calendar class="h-4 w-4" />
              {post.date}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Cover placeholder -->
    <section class="pb-12">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
          <div class="aspect-[21/9] bg-gradient-to-br from-zinc-800/30 to-zinc-900 flex items-center justify-center">
            <div class="text-center space-y-2">
              <Tag class="h-12 w-12 text-indigo-400/40 mx-auto" />
              <p class="text-xs text-zinc-600">Article Cover Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="pb-20">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article class="prose prose-invert prose-zinc max-w-none
          [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4
          [&_p]:text-zinc-400 [&_p]:leading-relaxed [&_p]:mb-6
          [&_code]:bg-zinc-800/50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-indigo-300 [&_code]:text-sm">
          {#each post.content.split('\n\n') as block}
            {#if block.startsWith('## ')}
              <h2>{block.replace('## ', '')}</h2>
            {:else}
              <p>{block}</p>
            {/if}
          {/each}
        </article>

        <!-- Tags -->
        <div class="mt-12 pt-8 border-t border-zinc-800/50">
          <div class="flex flex-wrap gap-2">
            {#each post.tags as tag}
              <span class="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs font-medium text-zinc-400">{tag}</span>
            {/each}
          </div>
        </div>
      </div>
    </section>
  {:else}
    <section class="flex min-h-[60vh] items-center justify-center">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-white mb-4">Post Not Found</h1>
        <p class="text-zinc-400 mb-6">The blog post you're looking for doesn't exist.</p>
        <a href="/blog" class="inline-flex h-10 items-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white hover:bg-indigo-500">
          View All Posts
        </a>
      </div>
    </section>
  {/if}
</div>
