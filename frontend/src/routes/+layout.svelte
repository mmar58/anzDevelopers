<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import Lenis from 'lenis';

  let { children } = $props();

  onMount(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  });
</script>

<svelte:head>
  <title>AnZ Developers | Malik Md Apu Rahman</title>
</svelte:head>

<div class="relative flex min-h-screen flex-col bg-black text-white">
  {@render children()}
</div>

<style>
  :global(html.lenis, html.lenis body) {
    height: auto;
  }
  :global(.lenis.lenis-smooth) {
    scroll-behavior: auto !important;
  }
  :global(.lenis.lenis-smooth [data-lenis-prevent]) {
    overscroll-behavior: contain;
  }
  :global(.lenis.lenis-stopped) {
    overflow: hidden;
  }
  :global(.lenis.lenis-smooth iframe) {
    pointer-events: none;
  }
</style>
