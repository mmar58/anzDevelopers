<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ArrowRight, Play, Server, Activity, Cloud, Smartphone, Users, CheckCircle2, MapPin, Wifi, WifiOff, BarChart3, BrainCircuit, Globe } from '@lucide/svelte';

  let heroContent: HTMLElement;
  let terminalEl: HTMLElement;
  let statsBar: HTMLElement;
  let trustedSection: HTMLElement;
  let whatIDoSection: HTMLElement;
  let caseStudySection: HTMLElement;

  let profilePhotoUrl = $state('');

  // Terminal animation
  let terminalLines: string[] = $state([]);
  const fullTerminalContent = [
    '$ tech_stack --show',
    '',
    '> Node.js',
    '> Fastify',
    '> PostgreSQL',
    '> Redis',
    '> Socket.IO',
    '> SvelteKit',
    '> Flutter',
    '',
    '✓ All systems operational',
  ];

  let serviceCards: HTMLElement[] = [];

  onMount(async () => {
    // Fetch profile photo
    try {
      const res = await fetch('http://localhost:3000/api/profile');
      if (res.ok) {
        const data = await res.json();
        if (data.photo_url) {
          profilePhotoUrl = data.photo_url.startsWith('http')
            ? data.photo_url
            : `http://localhost:3000${data.photo_url}`;
        }
      }
    } catch {}

    // Hero entrance animation
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.fromTo(heroContent, 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    if (terminalEl) {
      tl.fromTo(terminalEl,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
    }

    if (statsBar) {
      tl.fromTo(statsBar,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      );
    }

    // Terminal typing animation
    let lineIndex = 0;
    const typeInterval = setInterval(() => {
      if (lineIndex < fullTerminalContent.length) {
        terminalLines = [...terminalLines, fullTerminalContent[lineIndex]];
        lineIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 300);

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    [trustedSection, whatIDoSection, caseStudySection, ...serviceCards].forEach(el => {
      if (el) {
        gsap.set(el, { y: 50, opacity: 0 });
        observer.observe(el);
      }
    });

    return () => {
      clearInterval(typeInterval);
    };
  });

  const stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: 'Top Rated', label: 'Upwork' },
  ];

  const trustedBy = ['Upwork', 'Clutch', 'fiverr', 'Google', 'Microsoft'];

  const services = [
    {
      icon: Server,
      title: 'Backend Engineering',
      description: 'High-performance APIs, database design, optimization, caching and scalable architectures.',
    },
    {
      icon: Activity,
      title: 'Real-Time Systems',
      description: 'Real-time applications, event-driven systems with Socket.IO, live tracking and chat platforms.',
    },
    {
      icon: Cloud,
      title: 'SaaS Development',
      description: 'Multi-tenant SaaS platforms with subscription billing, analytics, dashboards and workflows.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps with Flutter, offline sync, GPS tracking and real-time features.',
    },
    {
      icon: Users,
      title: 'Technical Leadership',
      description: 'Architecture planning, team leadership, code reviews, mentoring and project management.',
    },
  ];

  const caseStudyFeatures = [
    { icon: MapPin, label: 'Real-Time Tracking' },
    { icon: Wifi, label: 'Role-Based Access' },
    { icon: WifiOff, label: 'Offline First' },
    { icon: BarChart3, label: 'Advanced Reporting' },
    { icon: BrainCircuit, label: 'AI Scheduling' },
    { icon: Globe, label: 'Mobile + Web + Backend' },
  ];
</script>

<svelte:head>
  <title>AnZ Developers | Malik Md Apu Rahman — Senior Backend Engineer & Technical Lead</title>
  <meta name="description" content="Founder-led software engineering platform. Building scalable backend systems, SaaS platforms, real-time applications and modern software products." />
</svelte:head>

<div class="bg-black text-white selection:bg-indigo-500/30">
  <!-- ═══════════════════════ HERO SECTION ═══════════════════════ -->
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(67,56,202,0.15)_0%,rgba(0,0,0,1)_60%)]"></div>
    <div class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]"></div>
    
    <!-- Glowing orbs -->
    <div class="absolute top-20 left-[10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-20 right-[5%] w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Left: Content -->
        <div bind:this={heroContent} class="space-y-8">
          <div class="space-y-2">
            <span class="inline-block text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
              Founder-Led, Engineer-Driven
            </span>
          </div>

          <div class="space-y-4">
            <!-- Name with round profile photo -->
            <div class="flex items-center gap-4">
              <div class="relative shrink-0">
                <div class="h-16 w-16 rounded-full overflow-hidden border-2 border-indigo-500/40 bg-zinc-800 shadow-lg shadow-indigo-900/30 ring-2 ring-zinc-700">
                  {#if profilePhotoUrl}
                    <img src={profilePhotoUrl} alt="Malik Md Apu Rahman" class="h-full w-full object-cover" />
                  {:else}
                    <div class="h-full w-full flex items-center justify-center bg-gradient-to-br from-indigo-600/40 to-purple-600/30">
                      <span class="text-lg font-bold text-white">MA</span>
                    </div>
                  {/if}
                </div>
                <span class="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-black bg-emerald-500"></span>
              </div>
              <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Malik Md Apu<br />Rahman
              </h1>
            </div>
            <h2 class="text-xl font-semibold text-indigo-400 sm:text-2xl">
              Senior Backend Engineer & Technical Lead
            </h2>
            <p class="text-sm font-medium text-zinc-500">Founder of AnZ Developers</p>
          </div>

          <p class="max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            I help startups and enterprises build scalable backend systems, SaaS platforms, real-time applications and modern software products.
          </p>

          <div class="flex flex-wrap items-center gap-3">
            <a href="/about" class="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-600/20">
              <Play class="h-4 w-4" />
              Watch Introduction
            </a>
            <a href="/projects" class="group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/50">
              View Projects
              <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <!-- Right: Terminal Animation -->
        <div bind:this={terminalEl} class="hidden lg:block">
          <div class="rounded-xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
            <!-- Terminal header -->
            <div class="flex items-center gap-2 border-b border-zinc-800/50 px-4 py-3">
              <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div class="h-3 w-3 rounded-full bg-green-500/80"></div>
              <span class="ml-3 text-xs text-zinc-500 font-mono">~/anz-developers</span>
            </div>
            <!-- Terminal content -->
            <div class="p-5 font-mono text-sm min-h-[280px]">
              {#each terminalLines as line, i}
                <div class="leading-7 {line.startsWith('$') ? 'text-green-400' : line.startsWith('>') ? 'text-indigo-400' : line.startsWith('✓') ? 'text-emerald-400 font-semibold' : 'text-zinc-500'}">
                  {line}
                </div>
              {/each}
              <span class="inline-block w-2 h-4 bg-indigo-400 animate-pulse ml-0.5"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════ STATS BAR ═══════════════════════ -->
  <div bind:this={statsBar} class="border-y border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm">
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

  <!-- ═══════════════════════ TRUSTED BY ═══════════════════════ -->
  <section bind:this={trustedSection} class="py-16 border-b border-zinc-800/30">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-10">
        Trusted by Clients Worldwide
      </p>
      <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
        {#each trustedBy as brand}
          <span class="text-lg font-bold tracking-tight text-zinc-600 transition-colors hover:text-zinc-400 sm:text-xl {brand === 'fiverr' ? 'lowercase' : ''}">
            {brand}
          </span>
        {/each}
      </div>
    </div>
  </section>

  <!-- ═══════════════════════ WHAT I DO BEST ═══════════════════════ -->
  <section bind:this={whatIDoSection} class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-white sm:text-4xl">What I Do Best</h2>
        <p class="mt-3 text-zinc-400">Engineering solutions that scale with your business.</p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {#each services as service, i}
          {@const Icon = service.icon}
          <div
            bind:this={serviceCards[i]}
            class="group relative rounded-xl border border-zinc-800/50 bg-zinc-950/30 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/30 hover:-translate-y-1"
          >
            <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/50 text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
              <Icon class="h-5 w-5" />
            </div>
            <h3 class="text-sm font-bold text-white mb-2">{service.title}</h3>
            <p class="text-xs leading-relaxed text-zinc-500">{service.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- ═══════════════════════ FEATURED CASE STUDY ═══════════════════════ -->
  <section bind:this={caseStudySection} class="py-24 border-t border-zinc-800/30">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <span class="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">Featured Case Study</span>
      </div>
      
      <div class="grid gap-12 lg:grid-cols-2 items-center">
        <!-- Left: Content -->
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-white sm:text-4xl leading-tight">
            Enterprise Workforce<br />Management Platform
          </h2>
          <p class="text-zinc-400 leading-relaxed">
            A complete workforce management solution with real-time tracking, scheduling, attendance, offline sync, reporting and AI-powered insights.
          </p>

          <!-- Feature pills -->
          <div class="grid grid-cols-2 gap-3">
            {#each caseStudyFeatures as feature}
              {@const FeatureIcon = feature.icon}
              <div class="flex items-center gap-2.5 rounded-lg border border-zinc-800/50 bg-zinc-900/30 px-3 py-2.5 text-sm">
                <FeatureIcon class="h-4 w-4 text-indigo-400 shrink-0" />
                <span class="text-zinc-300 text-xs font-medium">{feature.label}</span>
              </div>
            {/each}
          </div>

          <div class="flex flex-wrap gap-3 pt-2">
            <a href="/projects/enterprise-workforce-management" class="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition-all hover:bg-indigo-500">
              Explore Case Study
            </a>
            <a href="https://www.youtube.com/watch?v=M8YWf6uVqpc" target="_blank" rel="noopener noreferrer" class="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-zinc-700 px-5 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:text-white">
              <Play class="h-3.5 w-3.5" />
              Watch Demo
            </a>
          </div>
        </div>

        <!-- Right: Placeholder screenshot -->
        <div class="relative">
          <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 shadow-2xl shadow-black/40">
            <div class="aspect-video rounded-lg bg-gradient-to-br from-zinc-800/50 to-zinc-900/80 flex items-center justify-center overflow-hidden relative">
              <!-- Placeholder dashboard mockup -->
              <div class="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              <div class="text-center space-y-3">
                <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                  <Server class="h-8 w-8 text-indigo-400" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-white">Enterprise Platform</p>
                  <p class="text-xs text-zinc-500">Dashboard Preview</p>
                </div>
              </div>
            </div>
            <!-- Bottom tech bar -->
            <div class="mt-3 flex flex-wrap gap-1.5">
              {#each ['SvelteKit', 'Fastify', 'Redis', 'Socket.IO', 'Flutter'] as tech}
                <span class="rounded bg-zinc-800/50 px-2 py-0.5 text-[10px] font-medium text-zinc-400">{tech}</span>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
