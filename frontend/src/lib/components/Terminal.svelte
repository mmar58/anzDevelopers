<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";

  let { 
    content = [], 
    delay = 0, 
    maxHeight = "300px", 
    class: className = "" 
  }: { 
    content?: string[]; 
    delay?: number; 
    maxHeight?: string;
    class?: string;
  } = $props();

  let terminalEl: HTMLElement;
  let terminalLines: string[] = $state([]);
  let terminalContentEl: HTMLElement;

  onMount(() => {
    // Entrance animation
    if (terminalEl) {
      gsap.fromTo(
        terminalEl,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: delay,
          clearProps: "transform",
        }
      );
    }

    // Terminal typing animation
    let lineIndex = 0;
    const typeInterval = setInterval(() => {
      if (lineIndex < content.length) {
        terminalLines = [...terminalLines, content[lineIndex]];
        lineIndex++;
        // Auto-scroll to bottom
        setTimeout(() => {
          if (terminalContentEl) {
            terminalContentEl.scrollTop = terminalContentEl.scrollHeight;
          }
        }, 0);
      } else {
        clearInterval(typeInterval);
      }
    }, 300);

    return () => {
      clearInterval(typeInterval);
    };
  });
</script>

<div
  bind:this={terminalEl}
  class={className}
  style="opacity: 0; transform: translateY(40px);"
>
  <div class="rounded-xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col">
    <!-- Terminal header -->
    <div class="flex items-center gap-2 border-b border-zinc-800/50 px-4 py-3 shrink-0 bg-zinc-950/90 z-10">
      <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
      <div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
      <div class="h-3 w-3 rounded-full bg-green-500/80"></div>
      <span class="ml-3 text-xs text-zinc-500 font-mono">~/anz-developers</span>
    </div>
    <!-- Terminal content -->
    <div 
      bind:this={terminalContentEl}
      class="p-5 font-mono text-sm overflow-y-auto custom-scrollbar" 
      style="max-height: {maxHeight}; min-height: 280px;"
    >
      {#each terminalLines as line}
        <div
          class="leading-7 {line.startsWith('$')
            ? 'text-green-400'
            : line.startsWith('>')
              ? 'text-indigo-400'
              : line.startsWith('✓')
                ? 'text-emerald-400 font-semibold'
                : 'text-zinc-500'}"
        >
          {line}
        </div>
      {/each}
      <span class="inline-block w-2 h-4 bg-indigo-400 animate-pulse ml-0.5"></span>
    </div>
  </div>
</div>

<style>
  /* Custom Scrollbar for Terminal */
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent; 
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(82, 82, 91, 0.5); /* zinc-600 with opacity */
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(113, 113, 122, 0.8); /* zinc-500 with opacity */
  }
</style>
