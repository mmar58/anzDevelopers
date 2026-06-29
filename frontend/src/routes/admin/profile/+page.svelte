<script lang="ts">
  import { Save, Upload, User, Loader2, CheckCircle2, AlertCircle } from '@lucide/svelte';
  import { onMount } from 'svelte';

  const API_BASE = 'http://localhost:3000';

  let profile = $state({
    name: 'Malik Md Apu Rahman',
    title: 'Senior Backend Engineer & Technical Lead',
    bio: 'Founder of AnZ Developers. Helping startups and enterprises build scalable backend systems, SaaS platforms, real-time applications, and modern software products.',
    email: 'contact@anzdevelopers.com',
    video_intro_url: '',
    photo_url: '',
  });

  let photoPreview = $state('');
  let photoFile: File | null = null;
  let isLoading = $state(true);
  let isSaving = $state(false);
  let isUploadingPhoto = $state(false);
  let toast = $state<{ type: 'success' | 'error'; message: string } | null>(null);

  let fileInput: HTMLInputElement;

  onMount(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/profile`);
      if (res.ok) {
        const data = await res.json();
        profile = { ...profile, ...data };
        if (data.photo_url) {
          photoPreview = data.photo_url.startsWith('http')
            ? data.photo_url
            : `${API_BASE}${data.photo_url}`;
        }
      }
    } catch (e) {
      // Use defaults if profile not yet created
    } finally {
      isLoading = false;
    }
  });

  function showToast(type: 'success' | 'error', message: string) {
    toast = { type, message };
    setTimeout(() => (toast = null), 3500);
  }

  function onPhotoChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    photoFile = file;
    photoPreview = URL.createObjectURL(file);
  }

  async function uploadPhoto(): Promise<string | null> {
    if (!photoFile) return null;
    isUploadingPhoto = true;
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('file', photoFile);
      const res = await fetch(`${API_BASE}/api/uploads`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      return data.url as string;
    } catch {
      showToast('error', 'Photo upload failed. Please try again.');
      return null;
    } finally {
      isUploadingPhoto = false;
    }
  }

  async function handleSubmit() {
    isSaving = true;
    try {
      // Upload photo first if a new one was selected
      if (photoFile) {
        const uploadedUrl = await uploadPhoto();
        if (uploadedUrl) {
          profile.photo_url = uploadedUrl;
        }
      }

      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE}/api/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profile),
      });

      if (!res.ok) throw new Error('Save failed');
      photoFile = null;
      showToast('success', 'Profile saved successfully!');
    } catch {
      showToast('error', 'Failed to save profile. Please try again.');
    } finally {
      isSaving = false;
    }
  }

  const inputClass = 'block w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white placeholder-zinc-600 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm';
</script>

<!-- Toast notification -->
{#if toast}
  <div class="fixed top-6 right-6 z-50 flex items-center gap-3 rounded-xl border px-5 py-3.5 text-sm font-medium shadow-2xl backdrop-blur-md transition-all
    {toast.type === 'success' ? 'border-emerald-500/30 bg-emerald-900/60 text-emerald-300' : 'border-red-500/30 bg-red-900/60 text-red-300'}">
    {#if toast.type === 'success'}
      <CheckCircle2 class="h-4 w-4 shrink-0" />
    {:else}
      <AlertCircle class="h-4 w-4 shrink-0" />
    {/if}
    {toast.message}
  </div>
{/if}

<div class="space-y-6 max-w-4xl">
  <div>
    <h2 class="text-2xl font-bold tracking-tight text-white">Profile Settings</h2>
    <p class="text-zinc-400 mt-1">Update your public portfolio information.</p>
  </div>

  {#if isLoading}
    <div class="flex items-center justify-center py-20">
      <Loader2 class="h-8 w-8 animate-spin text-indigo-400" />
    </div>
  {:else}
    <form class="space-y-6" onsubmit={(e) => { e.preventDefault(); handleSubmit(); }}>

      <!-- Profile Photo -->
      <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h3 class="text-sm font-semibold text-zinc-300 mb-4">Profile Photo</h3>
        <div class="flex items-center gap-6">
          <!-- Avatar preview -->
          <div class="relative shrink-0">
            <div class="h-24 w-24 rounded-full overflow-hidden border-2 border-zinc-700 bg-zinc-800 flex items-center justify-center">
              {#if photoPreview}
                <img src={photoPreview} alt="Profile photo" class="h-full w-full object-cover" />
              {:else}
                <User class="h-10 w-10 text-zinc-500" />
              {/if}
            </div>
            {#if isUploadingPhoto}
              <div class="absolute inset-0 flex items-center justify-center rounded-full bg-black/60">
                <Loader2 class="h-6 w-6 animate-spin text-white" />
              </div>
            {/if}
          </div>

          <!-- Upload controls -->
          <div class="space-y-2">
            <p class="text-xs text-zinc-400">JPG, PNG or WEBP • Max 5MB</p>
            <button
              type="button"
              onclick={() => fileInput.click()}
              class="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-800/60 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              <Upload class="h-4 w-4" />
              Choose Photo
            </button>
            {#if photoFile}
              <p class="text-xs text-indigo-400">New photo selected — save to upload</p>
            {/if}
            <input
              bind:this={fileInput}
              type="file"
              accept="image/*"
              class="hidden"
              onchange={onPhotoChange}
            />
          </div>
        </div>
      </div>

      <!-- Basic Info -->
      <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h3 class="text-sm font-semibold text-zinc-300 mb-4">Basic Information</h3>
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="space-y-2">
            <label for="name" class="block text-sm font-medium text-zinc-300">Full Name</label>
            <input id="name" bind:value={profile.name} type="text" class={inputClass} />
          </div>

          <div class="space-y-2">
            <label for="title" class="block text-sm font-medium text-zinc-300">Professional Title</label>
            <input id="title" bind:value={profile.title} type="text" class={inputClass} />
          </div>
        </div>

        <div class="space-y-2 mt-4">
          <label for="bio" class="block text-sm font-medium text-zinc-300">Bio / About Me</label>
          <textarea
            id="bio"
            bind:value={profile.bio}
            rows="4"
            class={inputClass}
          ></textarea>
        </div>
      </div>

      <!-- Contact & Media -->
      <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h3 class="text-sm font-semibold text-zinc-300 mb-4">Contact & Media</h3>
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-zinc-300">Contact Email</label>
            <input id="email" bind:value={profile.email} type="email" class={inputClass} />
          </div>

          <div class="space-y-2">
            <label for="video_intro_url" class="block text-sm font-medium text-zinc-300">Introduction Video URL</label>
            <input id="video_intro_url" bind:value={profile.video_intro_url} type="url" placeholder="https://youtube.com/..." class={inputClass} />
          </div>
        </div>
      </div>

      <div class="pt-2 flex justify-end">
        <button
          type="submit"
          disabled={isSaving || isUploadingPhoto}
          class="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {#if isSaving}
            <Loader2 class="h-4 w-4 animate-spin" />
            Saving...
          {:else}
            <Save class="h-4 w-4" />
            Save Changes
          {/if}
        </button>
      </div>
    </form>
  {/if}
</div>
