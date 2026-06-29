<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import Lenis from 'lenis';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();

  let isAdmin = $derived($page.url.pathname.startsWith('/admin'));

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
  <meta name="description" content="Senior Backend Engineer & Technical Lead. Building scalable backend systems, SaaS platforms, and real-time applications." />
</svelte:head>

<div class="relative flex min-h-screen flex-col bg-black text-white">
  {#if !isAdmin}
    <Navbar />
  {/if}
  
  <main class="{isAdmin ? '' : 'pt-16'}">
    {@render children()}
  </main>
  
  {#if !isAdmin}
    <Footer />
  {/if}
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
