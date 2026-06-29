<script lang="ts">
  import {
    ArrowRight,
    Server,
    Activity,
    Cloud,
    Smartphone,
    ProjectorIcon,
    Globe,
  } from "@lucide/svelte";

  let activeFilter = $state("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "backend", label: "Backend" },
    { id: "saas", label: "SaaS" },
    { id: "real-time", label: "Real Time" },
    { id: "enterprise", label: "Enterprise" },
  ];

  const projects = [
    {
      title: "Enterprise Workforce Management Platform",
      slug: "enterprise-workforce-management",
      description:
        "A complete enterprise solution for workforce management with real-time tracking, scheduling, attendance, and AI-powered insights.",
      category: "enterprise",
      techStack: ["SvelteKit", "Fastify", "Redis", "Socket.IO", "Flutter"],
      tags: ["Backend", "Real Time", "Enterprise"],
      icon: Server,
    },
    {
      title: "Social Feed Platform",
      slug: "social-feed-platform",
      description:
        "Full-stack social media application with JWT auth, cursor-paginated feed, threaded comments, and real-time notifications.",
      category: "backend",
      techStack: ["Next.js", "React", "Express", "MySQL", "Socket.IO"],
      tags: ["Backend", "Real Time"],
      icon: Globe,
    },
    {
      title: "Coin Flip Platform",
      slug: "coin-flip-platform",
      description:
        "Live coin betting game with real-time betting, global chat system, and cryptocurrency integration.",
      category: "real-time",
      techStack: ["Unity", "Node.js", "Express", "Socket.IO"],
      tags: ["Backend", "Real Time"],
      icon: Activity,
    },
  ];

  let filteredProjects = $derived(
    activeFilter === "all"
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeFilter ||
            p.tags.some(
              (t) => t.toLowerCase().replace(" ", "-") === activeFilter,
            ),
        ),
  );
</script>

<svelte:head>
  <title>Our Projects | AnZ Developers</title>
  <meta
    name="description"
    content="Explore our portfolio of enterprise-grade projects including workforce management platforms, real-time systems, and SaaS applications."
  />
</svelte:head>

<div class="bg-black text-white selection:bg-indigo-500/30">
  <!-- Header -->
  <section class="relative pt-20 pb-16">
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.1)_0%,rgba(0,0,0,1)_70%)]"
    ></div>
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <span
          class="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400"
          >Portfolio</span
        >
        <h1 class="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Our Projects
        </h1>
        <p class="mt-4 text-lg text-zinc-400">Real solutions. Real impact.</p>
      </div>
    </div>
  </section>

  <!-- Filter Tabs -->
  <section class="border-b border-zinc-800/50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex gap-1 overflow-x-auto pb-px -mb-px">
        {#each filters as filter}
          <button
            onclick={() => (activeFilter = filter.id)}
            class="shrink-0 rounded-t-lg border-b-2 px-5 py-3 text-sm font-medium transition-colors {activeFilter ===
            filter.id
              ? 'border-indigo-500 text-white bg-zinc-900/30'
              : 'border-transparent text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'}"
          >
            {filter.label}
          </button>
        {/each}
      </div>
    </div>
  </section>

  <!-- Projects Grid -->
  <section class="py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each filteredProjects as project}
          <a
            href="/projects/{project.slug}"
            class="group relative flex flex-col rounded-xl border border-zinc-800/50 bg-zinc-950/30 overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
          >
            <!-- Thumbnail placeholder -->
            <div
              class="aspect-video bg-gradient-to-br from-zinc-800/30 to-zinc-900 flex items-center justify-center relative overflow-hidden"
            >
              <div
                class="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"
              ></div>
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20"
              >
                <ProjectorIcon class="h-6 w-6 text-indigo-400" />
              </div>
            </div>

            <!-- Content -->
            <div class="flex flex-col flex-1 p-5">
              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5 mb-3">
                {#each project.tags as tag}
                  <span
                    class="rounded bg-zinc-800/60 px-2 py-0.5 text-[10px] font-medium text-zinc-400"
                    >{tag}</span
                  >
                {/each}
              </div>

              <h3
                class="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors"
              >
                {project.title}
              </h3>
              <p class="text-sm text-zinc-500 leading-relaxed flex-1">
                {project.description}
              </p>

              <!-- Tech Stack -->
              <div class="mt-4 flex flex-wrap gap-1.5">
                {#each project.techStack.slice(0, 4) as tech}
                  <span
                    class="rounded bg-zinc-800/40 px-2 py-0.5 text-[10px] font-medium text-zinc-500"
                    >{tech}</span
                  >
                {/each}
                {#if project.techStack.length > 4}
                  <span
                    class="rounded bg-zinc-800/40 px-2 py-0.5 text-[10px] font-medium text-zinc-500"
                    >+{project.techStack.length - 4}</span
                  >
                {/if}
              </div>

              <div class="mt-4 pt-4 border-t border-zinc-800/30">
                <span
                  class="inline-flex items-center text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors"
                >
                  View Case Study
                  <ArrowRight
                    class="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </div>
          </a>
        {/each}
      </div>

      {#if filteredProjects.length === 0}
        <div class="text-center py-20">
          <p class="text-zinc-500">No projects found in this category.</p>
        </div>
      {/if}
    </div>
  </section>
</div>
