<script lang="ts">
  import { LayoutDashboard, FolderKanban, UserCircle, Settings, LogOut, Menu, X, FileText, Briefcase, MessageSquare } from '@lucide/svelte';
  import { page } from '$app/stores';

  let { children } = $props();
  let isSidebarOpen = $state(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Projects', href: '/admin/projects', icon: FolderKanban },
    { name: 'Blog', href: '/admin/blog', icon: FileText },
    { name: 'Services', href: '/admin/services', icon: Briefcase },
    { name: 'Leads', href: '/admin/leads', icon: MessageSquare },
    { name: 'Profile', href: '/admin/profile', icon: UserCircle },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  let isLoginPage = $derived($page.url.pathname === '/admin');
</script>

{#if isLoginPage}
  {@render children()}
{:else}
  <div class="min-h-screen bg-zinc-950 text-white flex">
    <!-- Mobile sidebar backdrop -->
    {#if isSidebarOpen}
      <div 
        class="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
        onclick={toggleSidebar}
        onkeydown={(e) => e.key === 'Escape' && toggleSidebar()}
        role="button"
        tabindex="0"
      ></div>
    {/if}

    <!-- Sidebar -->
    <aside class={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-zinc-800 bg-zinc-950/95 backdrop-blur-md transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex lg:flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <!-- Sidebar Header -->
      <div class="flex h-16 items-center justify-between px-6 border-b border-zinc-800">
        <a href="/admin/dashboard" class="flex items-center gap-2 font-bold text-white">
          <div class="h-8 w-8 rounded bg-indigo-600 flex items-center justify-center text-sm">
            AD
          </div>
          AnZ Dashboard
        </a>
        <button class="lg:hidden text-zinc-400 hover:text-white" onclick={toggleSidebar}>
          <X class="h-6 w-6" />
        </button>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 space-y-1 px-4 py-6 overflow-y-auto">
        {#each navigation as item}
          {@const NavIcon = item.icon}
          <a
            href={item.href}
            class={`group flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
              $page.url.pathname.includes(item.href)
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
            }`}
          >
            <NavIcon
              class={`mr-3 h-5 w-5 flex-shrink-0 transition-colors ${
                $page.url.pathname.includes(item.href) ? 'text-indigo-400' : 'text-zinc-500 group-hover:text-zinc-300'
              }`} 
            />
            {item.name}
          </a>
        {/each}
      </nav>

      <!-- Sidebar Footer -->
      <div class="border-t border-zinc-800 p-4">
        <button class="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-zinc-400 hover:bg-zinc-800/50 hover:text-white transition-colors">
          <LogOut class="h-5 w-5 text-zinc-500" />
          Log out
        </button>
      </div>
    </aside>

    <!-- Main content area -->
    <div class="flex flex-1 flex-col transition-all duration-300 min-w-0">
      <!-- Top header -->
      <header class="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-4 backdrop-blur-md sm:px-6 lg:px-8">
        <button class="lg:hidden text-zinc-400 hover:text-white" onclick={toggleSidebar}>
          <Menu class="h-6 w-6" />
        </button>
        
        <div class="flex flex-1 items-center justify-end gap-4">
          <div class="flex items-center gap-3">
            <span class="text-sm font-medium text-zinc-300 hidden sm:block">Admin User</span>
            <div class="h-9 w-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
              <UserCircle class="h-6 w-6 text-zinc-400" />
            </div>
          </div>
        </div>
      </header>

      <!-- Page content -->
      <main class="flex-1 p-6 lg:p-8 overflow-x-hidden">
        {@render children()}
      </main>
    </div>
  </div>
{/if}
