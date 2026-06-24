<script lang="ts">
  import { Plus, Pencil, Trash2, Search } from '@lucide/svelte';

  let projects = [
    { id: 1, title: 'FinTech API Gateway', status: 'Published', date: '2023-10-15' },
    { id: 2, title: 'Real-time Chat Engine', status: 'Draft', date: '2023-11-20' },
    { id: 3, title: 'E-commerce Microservices', status: 'Published', date: '2024-01-05' },
  ];
</script>

<div class="space-y-6">
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div>
      <h2 class="text-2xl font-bold tracking-tight text-white">Projects</h2>
      <p class="text-zinc-400">Manage your portfolio projects and case studies.</p>
    </div>
    <button class="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950 transition-colors">
      <Plus class="h-4 w-4" />
      New Project
    </button>
  </div>

  <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
    <div class="mb-4 flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2">
      <Search class="h-4 w-4 text-zinc-500" />
      <input 
        type="text" 
        placeholder="Search projects..." 
        class="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
      />
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm text-zinc-400">
        <thead class="bg-zinc-800/50 text-xs uppercase text-zinc-300">
          <tr>
            <th scope="col" class="px-6 py-3 font-medium">Project Name</th>
            <th scope="col" class="px-6 py-3 font-medium">Status</th>
            <th scope="col" class="px-6 py-3 font-medium hidden sm:table-cell">Date Added</th>
            <th scope="col" class="px-6 py-3 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-zinc-800 border-t border-zinc-800">
          {#each projects as project}
            <tr class="hover:bg-zinc-800/30 transition-colors">
              <td class="px-6 py-4 font-medium text-white">{project.title}</td>
              <td class="px-6 py-4">
                <span class={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  project.status === 'Published' 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : 'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20'
                }`}>
                  {project.status}
                </span>
              </td>
              <td class="px-6 py-4 hidden sm:table-cell">{project.date}</td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2">
                  <button class="rounded p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
                    <Pencil class="h-4 w-4" />
                  </button>
                  <button class="rounded p-1.5 text-zinc-400 hover:bg-red-500/20 hover:text-red-500 transition-colors">
                    <Trash2 class="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
