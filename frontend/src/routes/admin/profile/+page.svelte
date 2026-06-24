<script lang="ts">
  import { Save } from '@lucide/svelte';

  let profile = {
    name: 'Malik Md Apu Rahman',
    title: 'Senior Backend Engineer & Technical Lead',
    bio: 'Founder of AnZ Developers. Helping startups and enterprises build scalable backend systems, SaaS platforms, real-time applications, and modern software products.',
    email: 'contact@example.com',
    videoLink: 'https://youtube.com/watch?v=...',
  };
</script>

<div class="space-y-6 max-w-4xl">
  <div>
    <h2 class="text-2xl font-bold tracking-tight text-white">Profile Settings</h2>
    <p class="text-zinc-400">Update your public portfolio information.</p>
  </div>

  <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
    <form class="space-y-6" on:submit|preventDefault={() => console.log('Saved', profile)}>
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="space-y-2">
          <label for="name" class="block text-sm font-medium text-zinc-300">Full Name</label>
          <input 
            id="name" 
            bind:value={profile.name} 
            type="text" 
            class="block w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" 
          />
        </div>
        
        <div class="space-y-2">
          <label for="title" class="block text-sm font-medium text-zinc-300">Professional Title</label>
          <input 
            id="title" 
            bind:value={profile.title} 
            type="text" 
            class="block w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" 
          />
        </div>
      </div>

      <div class="space-y-2">
        <label for="bio" class="block text-sm font-medium text-zinc-300">Bio / About Me</label>
        <textarea 
          id="bio" 
          bind:value={profile.bio} 
          rows="4" 
          class="block w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        ></textarea>
      </div>

      <div class="grid gap-6 sm:grid-cols-2">
        <div class="space-y-2">
          <label for="email" class="block text-sm font-medium text-zinc-300">Contact Email</label>
          <input 
            id="email" 
            bind:value={profile.email} 
            type="email" 
            class="block w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" 
          />
        </div>

        <div class="space-y-2">
          <label for="videoLink" class="block text-sm font-medium text-zinc-300">Introduction Video URL</label>
          <input 
            id="videoLink" 
            bind:value={profile.videoLink} 
            type="url" 
            class="block w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" 
          />
        </div>
      </div>

      <div class="pt-4 border-t border-zinc-800 flex justify-end">
        <button type="submit" class="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950 transition-colors">
          <Save class="h-4 w-4" />
          Save Changes
        </button>
      </div>
    </form>
  </div>
</div>
