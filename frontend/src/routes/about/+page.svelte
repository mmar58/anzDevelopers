<script lang="ts">
  import { Download, Phone, MapPin, Mail, ExternalLink, ArrowUpRight, Briefcase } from '@lucide/svelte';

  const stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: 'Top Rated', label: 'Upwork' },
    { value: '100%', label: 'Job Success' },
  ];

  const journey = [
    {
      year: '2024 - Present',
      title: 'Founder & Technical Lead',
      company: 'AnZ Developers',
      description: 'Leading engineering teams and building scalable software products.',
    },
    {
      year: '2022 - 2024',
      title: 'Senior Software Engineer',
      company: 'MagicMind',
      description: 'Worked on enterprise systems, real-time platforms.',
    },
    {
      year: '2020 - 2022',
      title: 'Senior Software Engineer',
      company: 'SoftNTech',
      description: 'Dedicated multiple web, mobile and backend solutions.',
    },
    {
      year: '2018 - 2020',
      title: 'Software Engineer',
      company: 'Freelance & Local Clients',
      description: 'Started my journey in software development and worked on various client projects.',
    },
  ];

  const coreExpertise = [
    'Fastify', 'PostgreSQL', 'Redis', 'Socket.IO', 'SvelteKit', 'TypeScript',
    'React', 'Next.js', 'System Design', 'API Design', 'DevOps', 'Docker',
  ];
</script>

<svelte:head>
  <title>About Malik Md Apu Rahman | AnZ Developers</title>
  <meta name="description" content="Senior Backend Engineer & Technical Lead. 8+ years building scalable systems, SaaS platforms, and real-time applications." />
</svelte:head>

<div class="bg-black text-white selection:bg-indigo-500/30">
  <!-- Hero Section -->
  <section class="relative pt-20 pb-16">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(67,56,202,0.12)_0%,rgba(0,0,0,1)_60%)]"></div>
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-[1fr_380px] items-start">
        <!-- Left: Content -->
        <div class="space-y-6 order-2 lg:order-1">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">About</span>
          <h1 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Malik Md Apu Rahman</h1>
          <h2 class="text-xl text-indigo-400 font-semibold">Senior Backend Engineer & Technical Lead</h2>
          <p class="text-sm font-medium text-zinc-500">Founder of AnZ Developers</p>
          
          <p class="text-zinc-400 leading-relaxed max-w-2xl">
            I architect and build scalable backend systems, SaaS platforms, real-time applications and modern software products. With 8+ years of experience, I help businesses turn ideas into production-ready software systems using modern technologies like Fastify, PostgreSQL, Redis, Socket.IO and SvelteKit.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3 pt-2">
            <a href="#" class="inline-flex h-10 items-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors">
              <Download class="h-4 w-4" />
              Download Resume
            </a>
            <a href="/contact" class="inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-700 px-5 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors">
              <Phone class="h-4 w-4" />
              Book a Call
            </a>
          </div>
        </div>

        <!-- Right: Photo placeholder -->
        <div class="order-1 lg:order-2">
          <div class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-3 shadow-2xl shadow-black/50 max-w-[320px] mx-auto lg:mx-0">
            <div class="aspect-[3/4] rounded-xl bg-gradient-to-br from-zinc-800/50 to-zinc-900 flex items-center justify-center">
              <div class="text-center space-y-3">
                <div class="mx-auto h-20 w-20 rounded-full bg-zinc-700/50 border-2 border-zinc-600/30 flex items-center justify-center">
                  <span class="text-2xl font-bold text-zinc-400">MA</span>
                </div>
                <p class="text-xs text-zinc-600">Founder Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Bar -->
  <div class="border-y border-zinc-800/50 bg-zinc-950/50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
        {#each stats as stat}
          <div class="text-center">
            <div class="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
            <div class="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- My Journey -->
  <section class="py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold text-white mb-10">My Journey</h2>
      <div class="space-y-6">
        {#each journey as entry}
          <div class="group flex gap-6 rounded-xl border border-zinc-800/50 bg-zinc-950/30 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/20">
            <div class="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-800/40 text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
              <Briefcase class="h-5 w-5" />
            </div>
            <div class="flex-1">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <div>
                  <h3 class="text-base font-bold text-white">{entry.title}</h3>
                  <p class="text-sm text-indigo-400 font-medium">{entry.company}</p>
                </div>
                <span class="text-xs font-medium text-zinc-500 bg-zinc-800/50 rounded-full px-3 py-1 self-start">{entry.year}</span>
              </div>
              <p class="text-sm text-zinc-500">{entry.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Core Expertise -->
  <section class="py-16 border-t border-zinc-800/30">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold text-white mb-8">Core Expertise</h2>
      <div class="flex flex-wrap gap-3">
        {#each coreExpertise as skill}
          <span class="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors cursor-default">
            {skill}
          </span>
        {/each}
      </div>
    </div>
  </section>

  <!-- Contact Info -->
  <section class="py-16 border-t border-zinc-800/30">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold text-white mb-8">Get In Touch</h2>
      <div class="grid gap-4 sm:grid-cols-3">
        <div class="flex items-center gap-3 rounded-xl border border-zinc-800/50 bg-zinc-950/30 px-5 py-4">
          <Mail class="h-5 w-5 text-indigo-400" />
          <div>
            <p class="text-xs text-zinc-500">Email</p>
            <p class="text-sm text-zinc-300">rahmanapu118@gmail.com</p>
          </div>
        </div>
        <div class="flex items-center gap-3 rounded-xl border border-zinc-800/50 bg-zinc-950/30 px-5 py-4">
          <Phone class="h-5 w-5 text-indigo-400" />
          <div>
            <p class="text-xs text-zinc-500">Phone</p>
            <p class="text-sm text-zinc-300">+8801619411488</p>
          </div>
        </div>
        <a href="https://github.com/mmar58" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 rounded-xl border border-zinc-800/50 bg-zinc-950/30 px-5 py-4 hover:border-zinc-600 transition-colors">
          <ExternalLink class="h-5 w-5 text-indigo-400" />
          <div class="flex-1">
            <p class="text-xs text-zinc-500">GitHub</p>
            <p class="text-sm text-zinc-300">mmar58</p>
          </div>
          <ArrowUpRight class="h-4 w-4 text-zinc-600" />
        </a>
      </div>
    </div>
  </section>
</div>
