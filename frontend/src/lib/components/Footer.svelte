<script lang="ts">
  import { ExternalLink, Mail, Phone, MapPin, ArrowUpRight } from '@lucide/svelte';

  const links = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'Projects', href: '/projects' },
      { name: 'Services', href: '/services' },
      { name: 'About Malik', href: '/about' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
      { name: 'Case Studies', href: '/projects' },
    ],
  };
</script>

<footer class="relative border-t border-zinc-800/50 bg-zinc-950">
  <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      <!-- Brand -->
      <div class="lg:col-span-1">
        <a href="/" class="flex items-center gap-2.5 font-bold text-white">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-black">
            <svg viewBox="0 0 24 24" fill="none" class="h-4 w-4">
              <path d="M12 2L2 19h20L12 2z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="text-lg">AnZ</span>
        </a>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
          Building scalable software systems that power businesses. Founded by Malik Md Apu Rahman.
        </p>
        <div class="mt-6 flex gap-3">
          <a href="https://github.com/mmar58" target="_blank" rel="noopener noreferrer" class="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all hover:border-zinc-600 hover:text-white">
            <ExternalLink class="h-4 w-4" />
          </a>
        </div>
      </div>

      <!-- Company Links -->
      <div>
        <h4 class="text-sm font-semibold uppercase tracking-wider text-zinc-300">Company</h4>
        <ul class="mt-4 space-y-3">
          {#each links.company as link}
            <li>
              <a href={link.href} class="text-sm text-zinc-400 transition-colors hover:text-white">{link.name}</a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Resources -->
      <div>
        <h4 class="text-sm font-semibold uppercase tracking-wider text-zinc-300">Resources</h4>
        <ul class="mt-4 space-y-3">
          {#each links.resources as link}
            <li>
              <a href={link.href} class="text-sm text-zinc-400 transition-colors hover:text-white">{link.name}</a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-sm font-semibold uppercase tracking-wider text-zinc-300">Contact</h4>
        <ul class="mt-4 space-y-3">
          <li class="flex items-center gap-2 text-sm text-zinc-400">
            <Mail class="h-4 w-4 text-zinc-500" />
            rahmanapu118@gmail.com
          </li>
          <li class="flex items-center gap-2 text-sm text-zinc-400">
            <Phone class="h-4 w-4 text-zinc-500" />
            +8801619411488
          </li>
          <li class="flex items-center gap-2 text-sm text-zinc-400">
            <MapPin class="h-4 w-4 text-zinc-500" />
            Bangladesh
          </li>
        </ul>
        <a href="/contact" class="mt-6 inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
          Get in touch
          <ArrowUpRight class="h-3.5 w-3.5" />
        </a>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/50 pt-8 sm:flex-row">
      <p class="text-sm text-zinc-500">© {new Date().getFullYear()} AnZ Developers. All rights reserved.</p>
      <p class="text-sm text-zinc-600">Built with SvelteKit & Fastify</p>
    </div>
  </div>
</footer>
