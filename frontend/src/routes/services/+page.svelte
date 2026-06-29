<script lang="ts">
  import { Server, Activity, Cloud, Smartphone, Users, ArrowRight, Code2 } from '@lucide/svelte';

  const services = [
    {
      icon: Server,
      title: 'Backend Engineering',
      description: 'High-performance APIs, database design, optimization, caching and scalable architectures. We specialize in building robust server-side systems that handle millions of requests.',
      features: ['REST & GraphQL APIs', 'Database Architecture', 'Caching Strategies', 'Performance Optimization'],
    },
    {
      icon: Activity,
      title: 'Real-Time Systems',
      description: 'Real-time applications, event-driven systems with Socket.IO, live tracking and chat platforms. Built for low latency and high concurrency.',
      features: ['WebSocket/Socket.IO', 'Event-Driven Architecture', 'Live Tracking', 'Push Notifications'],
    },
    {
      icon: Cloud,
      title: 'SaaS Development',
      description: 'Multi-tenant SaaS platforms with subscription billing, analytics, dashboards and complex workflows. End-to-end product development.',
      features: ['Multi-Tenancy', 'Subscription Billing', 'Analytics Dashboards', 'Workflow Automation'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps with Flutter, offline-first architecture, GPS tracking and real-time features. Native-quality experiences.',
      features: ['Flutter/Dart', 'Offline-First Sync', 'GPS & NFC', 'Push Notifications'],
    },
    {
      icon: Users,
      title: 'Technical Leadership',
      description: 'Architecture planning, team leadership, code reviews, mentoring and project management. Bringing senior engineering expertise to your team.',
      features: ['Architecture Design', 'Team Mentoring', 'Code Reviews', 'Project Planning'],
    },
    {
      icon: Code2,
      title: 'AI-Assisted Development',
      description: 'Leveraging AI workflows to accelerate delivery while maintaining engineering quality. Smart tooling for faster, better software.',
      features: ['AI Workflows', 'Rapid Prototyping', 'Code Generation', 'Quality Assurance'],
    },
  ];
</script>

<svelte:head>
  <title>Services | AnZ Developers</title>
  <meta name="description" content="Professional software engineering services: Backend Engineering, Real-Time Systems, SaaS Development, Mobile Development, and Technical Leadership." />
</svelte:head>

<div class="bg-black text-white selection:bg-indigo-500/30">
  <!-- Header -->
  <section class="relative pt-20 pb-16">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.1)_0%,rgba(0,0,0,1)_70%)]"></div>
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <span class="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">What We Offer</span>
        <h1 class="mt-4 text-4xl font-bold text-white sm:text-5xl">Services</h1>
        <p class="mt-4 text-lg text-zinc-400">Engineering solutions that scale with your business.</p>
      </div>
    </div>
  </section>

  <!-- Services Grid -->
  <section class="py-16 border-t border-zinc-800/30">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each services as service}
          {@const ServiceIcon = service.icon}
          <div class="group relative flex flex-col rounded-xl border border-zinc-800/50 bg-zinc-950/30 p-7 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/20">
            <!-- Icon -->
            <div class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/40 text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
              <ServiceIcon class="h-6 w-6" />
            </div>

            <!-- Title & Description -->
            <h3 class="text-lg font-bold text-white mb-3">{service.title}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">{service.description}</p>

            <!-- Features list -->
            <div class="space-y-2 border-t border-zinc-800/30 pt-5">
              {#each service.features as feature}
                <div class="flex items-center gap-2 text-xs text-zinc-500">
                  <div class="h-1 w-1 rounded-full bg-indigo-500/60"></div>
                  {feature}
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-20 border-t border-zinc-800/30">
    <div class="mx-auto max-w-3xl px-4 text-center">
      <h2 class="text-3xl font-bold text-white sm:text-4xl">Ready to Start Your Project?</h2>
      <p class="mt-4 text-zinc-400">Let's discuss your requirements and build something exceptional together.</p>
      <a href="/contact" class="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-indigo-600 px-8 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors">
        Get in Touch
        <ArrowRight class="h-4 w-4" />
      </a>
    </div>
  </section>
</div>
