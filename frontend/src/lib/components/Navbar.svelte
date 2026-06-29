<script lang="ts">
  import { page } from '$app/stores';
  import { Menu, X, ChevronRight } from '@lucide/svelte';

  let mobileMenuOpen = $state(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Malik', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  function isActive(href: string): boolean {
    if (href === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(href);
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<header class="fixed top-0 left-0 right-0 z-50 border-b border-white/5">
  <!-- Glassmorphism backdrop -->
  <div class="absolute inset-0 bg-zinc-950/70 backdrop-blur-xl"></div>
  
  <nav class="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2.5 font-bold text-white group" onclick={closeMobileMenu}>
      <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-black shadow-lg shadow-indigo-500/20 transition-shadow group-hover:shadow-indigo-500/40">
        <svg viewBox="0 0 24 24" fill="none" class="h-4 w-4">
          <path d="M12 2L2 19h20L12 2z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="text-lg tracking-tight">
        <span class="text-white">AnZ</span>
      </span>
    </a>

    <!-- Desktop Nav Links -->
    <div class="hidden items-center gap-1 lg:flex">
      {#each navLinks as link}
        <a
          href={link.href}
          class="relative rounded-md px-3 py-2 text-sm font-medium transition-colors {isActive(link.href)
            ? 'text-white'
            : 'text-zinc-400 hover:text-white'}"
        >
          {link.name}
          {#if isActive(link.href)}
            <span class="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-indigo-500"></span>
          {/if}
        </a>
      {/each}
    </div>

    <!-- Desktop CTA -->
    <div class="hidden lg:flex items-center gap-3">
      <a
        href="/contact"
        class="inline-flex h-9 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
      >
        Let's Talk
      </a>
    </div>

    <!-- Mobile Hamburger -->
    <button class="lg:hidden text-zinc-400 hover:text-white transition-colors" onclick={() => (mobileMenuOpen = !mobileMenuOpen)}>
      {#if mobileMenuOpen}
        <X class="h-6 w-6" />
      {:else}
        <Menu class="h-6 w-6" />
      {/if}
    </button>
  </nav>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="lg:hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-xl">
      <div class="px-4 py-4 space-y-1">
        {#each navLinks as link}
          <a
            href={link.href}
            class="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors {isActive(link.href)
              ? 'bg-zinc-800/50 text-white'
              : 'text-zinc-400 hover:bg-zinc-800/30 hover:text-white'}"
            onclick={closeMobileMenu}
          >
            {link.name}
            <ChevronRight class="h-4 w-4 text-zinc-600" />
          </a>
        {/each}
        <div class="pt-3 border-t border-zinc-800">
          <a
            href="/contact"
            class="flex w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black"
            onclick={closeMobileMenu}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  {/if}
</header>
