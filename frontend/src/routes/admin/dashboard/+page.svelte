<script lang="ts">
  import { Users, Eye, FolderKanban, TrendingUp } from '@lucide/svelte';

  const stats = [
    { name: 'Total Views', value: '24.5K', icon: Eye, change: '+12%', changeType: 'positive' },
    { name: 'Projects', value: '12', icon: FolderKanban, change: '+2', changeType: 'positive' },
    { name: 'Profile Visitors', value: '1.2K', icon: Users, change: '+5%', changeType: 'positive' },
    { name: 'Engagement Rate', value: '8.4%', icon: TrendingUp, change: '+1.2%', changeType: 'positive' },
  ];
</script>

<div class="space-y-6">
  <div>
    <h2 class="text-2xl font-bold tracking-tight text-white">Dashboard Overview</h2>
    <p class="text-zinc-400">Here's what's happening with your portfolio today.</p>
  </div>

  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {#each stats as stat}
      <div class="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-sm transition-all hover:bg-zinc-800/80">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-zinc-400">{stat.name}</p>
            <p class="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
          </div>
          <div class="rounded-md bg-zinc-800 p-3">
            <svelte:component this={stat.icon} class="h-5 w-5 text-indigo-400" />
          </div>
        </div>
        <div class="mt-4 flex items-center text-sm">
          <span class="text-emerald-400 font-medium">{stat.change}</span>
          <span class="ml-2 text-zinc-500">from last month</span>
        </div>
      </div>
    {/each}
  </div>

  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <!-- Recent Activity -->
    <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
      <h3 class="text-lg font-medium text-white mb-4">Recent Activity</h3>
      <div class="space-y-4">
        {#each [1, 2, 3] as i}
          <div class="flex items-start gap-4 pb-4 border-b border-zinc-800 last:border-0 last:pb-0">
            <div class="rounded-full bg-zinc-800 p-2 mt-1">
              <Eye class="h-4 w-4 text-zinc-400" />
            </div>
            <div>
              <p class="text-sm font-medium text-white">New view on FinTech API Gateway</p>
              <p class="text-xs text-zinc-500">2 hours ago</p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
      <h3 class="text-lg font-medium text-white mb-4">Quick Actions</h3>
      <div class="grid grid-cols-2 gap-4">
        <a href="/admin/projects" class="flex flex-col items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4 hover:bg-zinc-800 hover:border-zinc-700 transition-colors">
          <FolderKanban class="h-6 w-6 text-indigo-400" />
          <span class="text-sm font-medium text-zinc-300">Add Project</span>
        </a>
        <a href="/admin/profile" class="flex flex-col items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-4 hover:bg-zinc-800 hover:border-zinc-700 transition-colors">
          <Users class="h-6 w-6 text-indigo-400" />
          <span class="text-sm font-medium text-zinc-300">Edit Profile</span>
        </a>
      </div>
    </div>
  </div>
</div>
