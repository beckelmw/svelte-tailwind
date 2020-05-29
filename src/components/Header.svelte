<script>
  import { links } from "svelte-routing";

  let isOpen = false;
</script>

<style>
  .header-link {
    @apply block px-2 py-1 text-white font-semibold rounded;
  }

  .header-link:hover {
    @apply bg-green-800;
  }
</style>

<header class="bg-green-500 sm:flex sm:justify-between px-4 py-2" use:links>
  <div class="flex items-center justify-between text-gray-500">
    <a class="font-semibold text-xl text-white" href="/">Tailwind</a>
    <div class="sm:hidden">
      <button
        on:click={() => {
          isOpen = !isOpen;
        }}
        class="block text-white hover:text-white focus:text-white
        focus:outline-none">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path
            class:hidden={isOpen}
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1
            0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />

          <path
            class:hidden={!isOpen}
            fill-rule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1
            0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1
            1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828
            4.829 4.828 4.828z" />
        </svg>
      </button>
    </div>
  </div>
  <div class:hidden={!isOpen} class="pt-2 pb-4 -ml-1 sm:flex">
    <a href="/page/1" class="header-link">Link</a>
    <a href="/page/2" class="header-link mt-1 sm:mt-0 sm:ml-2">Link</a>
    <a href="/page/3" class="header-link mt-1 sm:mt-0 sm:ml-2">Link</a>
  </div>
</header>
