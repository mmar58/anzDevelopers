<script lang="ts">
  import { LockKeyhole, Mail } from '@lucide/svelte';
  
  let email = '';
  let password = '';

  const handleLogin = async (e: Event) => {
    e.preventDefault();
    // Simulate login for demo, redirect to dashboard
    window.location.href = '/admin/dashboard';
  };
</script>

<div class="flex min-h-screen items-center justify-center bg-black px-4 relative overflow-hidden">
  <!-- Background Effects -->
  <div class="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.1)_0,rgba(0,0,0,1)_100%)]"></div>
  <div class="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

  <div class="relative z-10 w-full max-w-md space-y-8 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl p-10 shadow-2xl">
    <div class="text-center">
      <div class="mx-auto h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold mb-6 shadow-lg shadow-indigo-500/20">
        AD
      </div>
      <h2 class="text-3xl font-bold tracking-tight text-white">Admin Access</h2>
      <p class="mt-2 text-sm text-zinc-400">Sign in to manage the AnZ Developers platform.</p>
    </div>

    <form class="mt-8 space-y-6" onsubmit={handleLogin}>
      <div class="space-y-4">
        <div class="space-y-2">
          <label for="email" class="block text-sm font-medium text-zinc-300">Email address</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail class="h-5 w-5 text-zinc-500" />
            </div>
            <input id="email" bind:value={email} type="email" required placeholder="admin@example.com" class="block w-full rounded-lg border border-zinc-800 bg-zinc-900/50 py-2.5 pl-10 pr-3 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-colors" />
          </div>
        </div>
        
        <div class="space-y-2">
          <label for="password" class="block text-sm font-medium text-zinc-300">Password</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <LockKeyhole class="h-5 w-5 text-zinc-500" />
            </div>
            <input id="password" bind:value={password} type="password" required placeholder="••••••••" class="block w-full rounded-lg border border-zinc-800 bg-zinc-900/50 py-2.5 pl-10 pr-3 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-colors" />
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-zinc-800 bg-zinc-900 text-indigo-600 focus:ring-indigo-500" />
          <label for="remember-me" class="ml-2 block text-sm text-zinc-400">Remember me</label>
        </div>
        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-400 hover:text-indigo-300">Forgot password?</a>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center items-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black shadow-sm hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950 transition-colors">
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
