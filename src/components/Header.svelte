<script>
  import { links } from "svelte-routing";
  import Hamburger from "./Hamburger.svelte";

  let isOpen = false;
</script>

<header class="bg-green-500 sm:flex sm:justify-between px-4 py-2" use:links>
  <div class="flex items-center justify-between text-gray-500">
    <a class="font-semibold text-xl text-white" href="/">Tailwind</a>
    <Hamburger {isOpen} on:click={() => (isOpen = !isOpen)} />
  </div>
  <div class:hidden={!isOpen} class="pt-2 pb-4 -ml-1 sm:flex">
    <a href="/page/1" class="header-link">Link</a>
    <a href="/page/2" class="header-link mt-1 sm:mt-0 sm:ml-2">Link</a>
    <a href="/page/3" class="header-link mt-1 sm:mt-0 sm:ml-2">Link</a>
  </div>
</header>

<style lang="postcss">
  .header-link {
    @apply block px-2 py-1 text-white font-semibold rounded;
  }

  .header-link:hover {
    @apply bg-green-800;
  }
</style>
