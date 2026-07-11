<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";

  let { 
    title, 
    description, 
    icon: Icon 
  }: { 
    title: string; 
    description: string; 
    icon: any 
  } = $props();

  let cardEl: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              delay: 0.1,
              clearProps: "transform",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (cardEl) {
      gsap.set(cardEl, { y: 50, opacity: 0 });
      observer.observe(cardEl);
    }
    
    return () => {
      if (cardEl) observer.unobserve(cardEl);
    };
  });
</script>

<div
  bind:this={cardEl}
  class="group relative rounded-xl border border-zinc-800/50 bg-zinc-950/30 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/30 hover:-translate-y-1"
  style="opacity: 0; transform: translateY(50px);"
>
  <div
    class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/50 text-indigo-400 group-hover:bg-indigo-500/10 transition-colors"
  >
    <Icon class="h-5 w-5" />
  </div>
  <h3 class="text-sm font-bold text-white mb-2">{title}</h3>
  <p class="text-xs leading-relaxed text-zinc-500">
    {description}
  </p>
</div>
