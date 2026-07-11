<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";

  let { stats = [] }: { stats: { value: string; label: string; link?: string }[] } = $props();
  let statsBar: HTMLElement;

  onMount(() => {
    if (statsBar) {
      gsap.fromTo(
        statsBar,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.4,
          clearProps: "transform",
        }
      );
    }
  });
</script>

<div
  bind:this={statsBar}
  class="border-y border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm"
  style="opacity: 0; transform: translateY(30px);"
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
      {#each stats as stat}
        <div class="text-center">
          <div class="text-2xl font-bold text-white sm:text-3xl">
            {stat.value}
          </div>
          {#if stat.link}
            <a
              href={stat.link}
              target="_blank"
              rel="noopener noreferrer"
              class="mt-1 block text-xs font-medium uppercase tracking-wider text-zinc-500 hover:text-indigo-500 transition-colors"
            >
              {stat.label}
            </a>
          {:else}
            <div class="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
              {stat.label}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
