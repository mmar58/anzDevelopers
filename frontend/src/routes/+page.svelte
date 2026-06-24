<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ArrowRight, Code2, Database, Terminal, CheckCircle2 } from '@lucide/svelte';

  let heroSection: HTMLElement;
  let title1: HTMLElement;
  let title2: HTMLElement;
  let subtitle: HTMLElement;
  let ctas: HTMLElement;

  let experienceCards: HTMLElement[] = [];
  let projectCards: HTMLElement[] = [];

  onMount(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(title1, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(title2, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=0.7"
    )
    .fromTo(subtitle, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=0.8"
    )
    .fromTo(ctas, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.6"
    );

    // Scroll trigger for Experience cards
    // To keep it simple and clean without scrollTrigger plugin (which might need registration), we use IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    [...experienceCards, ...projectCards].forEach(card => {
      if(card) {
        gsap.set(card, { y: 50, opacity: 0 });
        observer.observe(card);
      }
    });
  });

  const experiences = [
    {
      title: "Senior Backend Engineer & Technical Lead",
      company: "AnZ Developers",
      duration: "2020 - Present",
      description: "Leading the backend architecture for scalable SaaS platforms. Managing a team of 5 engineers, and architecting real-time systems.",
      skills: ["Node.js", "PostgreSQL", "Redis", "AWS"]
    },
    {
      title: "Backend Developer",
      company: "Tech Solutions Inc",
      duration: "2017 - 2020",
      description: "Developed microservices for financial platforms. Improved API response times by 40% through query optimization and caching.",
      skills: ["Express", "MongoDB", "Docker", "GraphQL"]
    }
  ];

  const projects = [
    {
      title: "FinTech API Gateway",
      description: "A high-performance API gateway handling 10k+ req/sec, built with Node.js and Redis for rate limiting and caching.",
      icon: Terminal,
      link: "#"
    },
    {
      title: "Real-time Chat Engine",
      description: "WebSocket based chat engine capable of handling thousands of concurrent connections with low latency.",
      icon: Database,
      link: "#"
    },
    {
      title: "E-commerce Microservices",
      description: "A suite of microservices for a large-scale e-commerce platform using event-driven architecture.",
      icon: Code2,
      link: "#"
    }
  ];
</script>

<div class="bg-black text-white min-h-screen selection:bg-indigo-500/30">
  <!-- Hero Section -->
  <section bind:this={heroSection} class="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 text-center">
    <!-- Premium Background Effects -->
    <div class="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(67,56,202,0.15)_0%,rgba(0,0,0,1)_70%)]"></div>
    <div class="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

    <!-- Glowing orbs -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen"></div>

    <div class="relative z-10 max-w-4xl space-y-10 pt-20">
      <div class="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1 text-sm font-medium text-zinc-300 backdrop-blur-sm">
        <span class="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
        Available for new projects
      </div>

      <div class="space-y-6">
        <h1 bind:this={title1} class="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 sm:text-7xl md:text-8xl">
          Malik Md Apu Rahman
        </h1>
        <h2 bind:this={title2} class="text-2xl font-semibold tracking-tight text-indigo-400 sm:text-3xl md:text-4xl">
          Senior Backend Engineer & Technical Lead
        </h2>
      </div>

      <p bind:this={subtitle} class="mx-auto max-w-2xl text-lg text-zinc-400 sm:text-xl leading-relaxed">
        Founder of <span class="text-white font-medium">AnZ Developers</span>. Helping startups and enterprises build scalable backend systems, SaaS platforms, real-time applications, and modern software products.
      </p>

      <div bind:this={ctas} class="flex flex-col items-center justify-center gap-4 sm:flex-row pt-4">
        <a href="#projects" class="group relative inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-black transition-all hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
          View Projects
          <ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a href="/admin" class="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-800 bg-black/50 backdrop-blur-sm px-8 text-sm font-medium text-white transition-all hover:bg-zinc-900 hover:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-black">
          Admin Dashboard
        </a>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section class="relative py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-zinc-900">
    <div class="space-y-12">
      <div class="text-center sm:text-left">
        <h3 class="text-3xl font-bold text-white mb-4">Experience</h3>
        <p class="text-zinc-400 max-w-2xl">My professional journey building scalable systems and leading technical teams.</p>
      </div>

      <div class="grid gap-8">
        {#each experiences as exp, i}
          <div 
            bind:this={experienceCards[i]}
            class="relative group rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/50 backdrop-blur-sm"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl pointer-events-none"></div>
            
            <div class="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <h4 class="text-xl font-bold text-white">{exp.title}</h4>
                <p class="text-indigo-400 font-medium">{exp.company}</p>
              </div>
              <span class="inline-flex items-center rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-sm text-zinc-400 whitespace-nowrap">
                {exp.duration}
              </span>
            </div>
            
            <p class="text-zinc-400 leading-relaxed mb-6">{exp.description}</p>
            
            <div class="flex flex-wrap gap-2">
              {#each exp.skills as skill}
                <span class="inline-flex items-center rounded bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-zinc-300">
                  {skill}
                </span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="relative py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-zinc-900">
    <div class="space-y-12">
      <div class="text-center sm:text-left">
        <h3 class="text-3xl font-bold text-white mb-4">Selected Projects</h3>
        <p class="text-zinc-400 max-w-2xl">A showcase of the complex architectures and systems I have engineered.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each projects as project, i}
          <div 
            bind:this={projectCards[i]}
            class="group relative rounded-2xl border border-zinc-800 bg-zinc-950/30 p-6 transition-all hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.1)] backdrop-blur-sm flex flex-col h-full"
          >
            <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400 group-hover:scale-110 transition-transform">
              <svelte:component this={project.icon} class="h-6 w-6" />
            </div>
            
            <h4 class="text-xl font-bold text-white mb-3">{project.title}</h4>
            <p class="text-zinc-400 leading-relaxed mb-6 flex-grow">{project.description}</p>
            
            <a href={project.link} class="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors mt-auto">
              View Architecture
              <ArrowRight class="ml-1 h-3 w-3" />
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-zinc-900 py-12 text-center text-zinc-500 text-sm">
    <p>© {new Date().getFullYear()} AnZ Developers. All rights reserved.</p>
  </footer>
</div>
