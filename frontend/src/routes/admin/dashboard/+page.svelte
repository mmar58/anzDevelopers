<script lang="ts">
  import { Users, Eye, FolderKanban, TrendingUp, FileText, MessageSquare, ArrowUpRight, BarChart3 } from '@lucide/svelte';

  const stats = [
    { name: 'Total Projects', value: '24', icon: FolderKanban, change: '+3', changeType: 'positive' },
    { name: 'Blog Posts', value: '18', icon: FileText, change: '+4', changeType: 'positive' },
    { name: 'Leads', value: '56', icon: MessageSquare, change: '+12', changeType: 'positive' },
    { name: 'Page Views', value: '12.5K', icon: Eye, change: '+18%', changeType: 'positive' },
  ];

  const recentProjects = [
    { title: 'Enterprise Workforce Management', status: 'Published', date: 'Jun 15, 2026', views: '2.4K' },
    { title: 'Social Feed Platform', status: 'Published', date: 'May 28, 2026', views: '1.8K' },
    { title: 'Coin Flip Platform', status: 'Draft', date: 'May 10, 2026', views: '890' },
  ];

  const recentLeads = [
    { name: 'John Doe', company: 'TechCorp', type: 'SaaS Platform', date: '2 hours ago' },
    { name: 'Sarah M.', company: 'StartupXYZ', type: 'Backend Engineering', date: '5 hours ago' },
    { name: 'Mike R.', company: 'Enterprise Co', type: 'Real-Time System', date: '1 day ago' },
  ];
</script>

<div class="space-y-6">
  <!-- Header -->
  <div class="flex items-center justify-between">
    <div>
      <h2 class="text-2xl font-bold tracking-tight text-white">Dashboard</h2>
      <p class="text-sm text-zinc-500 mt-1">Welcome back, Malik. Here's your platform overview.</p>
    </div>
  </div>

  <!-- Stats Grid -->
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {#each stats as stat}
      <div class="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:bg-zinc-800/50">
        <div class="flex items-center justify-between mb-3">
          <div class="rounded-lg bg-zinc-800/50 p-2">
            {@const StatIcon = stat.icon}
            <StatIcon class="h-4 w-4 text-indigo-400" />
          </div>
          <span class="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">{stat.change}</span>
        </div>
        <p class="text-2xl font-bold text-white">{stat.value}</p>
        <p class="text-xs text-zinc-500 mt-1">{stat.name}</p>
      </div>
    {/each}
  </div>

  <!-- Two columns -->
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <!-- Recent Projects -->
    <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div class="flex items-center justify-between mb-5">
        <h3 class="text-base font-semibold text-white">Recent Projects</h3>
        <a href="/admin/projects" class="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1">
          View All <ArrowUpRight class="h-3 w-3" />
        </a>
      </div>
      <div class="space-y-3">
        {#each recentProjects as project}
          <div class="flex items-center justify-between rounded-lg border border-zinc-800/50 bg-zinc-950/30 px-4 py-3">
            <div class="min-w-0">
              <p class="text-sm font-medium text-white truncate">{project.title}</p>
              <p class="text-xs text-zinc-500">{project.date}</p>
            </div>
            <div class="flex items-center gap-3 shrink-0">
              <span class="text-xs text-zinc-500 flex items-center gap-1">
                <Eye class="h-3 w-3" /> {project.views}
              </span>
              <span class="text-[10px] font-medium px-2 py-0.5 rounded-full {project.status === 'Published' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-700/50 text-zinc-400'}">
                {project.status}
              </span>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Recent Leads -->
    <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div class="flex items-center justify-between mb-5">
        <h3 class="text-base font-semibold text-white">Recent Leads</h3>
        <span class="text-xs text-zinc-500">Last 7 days</span>
      </div>
      <div class="space-y-3">
        {#each recentLeads as lead}
          <div class="flex items-center justify-between rounded-lg border border-zinc-800/50 bg-zinc-950/30 px-4 py-3">
            <div class="min-w-0">
              <p class="text-sm font-medium text-white">{lead.name}</p>
              <p class="text-xs text-zinc-500">{lead.company} · {lead.type}</p>
            </div>
            <span class="text-xs text-zinc-600 shrink-0">{lead.date}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Visitors Overview Placeholder -->
  <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
    <div class="flex items-center justify-between mb-5">
      <h3 class="text-base font-semibold text-white">Visitors Overview</h3>
      <span class="text-xs text-zinc-500">Last 30 days</span>
    </div>
    <div class="h-48 flex items-center justify-center rounded-lg border border-zinc-800/30 bg-zinc-950/30">
      <div class="text-center">
        <BarChart3 class="h-8 w-8 text-zinc-700 mx-auto mb-2" />
        <p class="text-xs text-zinc-600">Analytics chart will be displayed here</p>
      </div>
    </div>
  </div>
</div>
