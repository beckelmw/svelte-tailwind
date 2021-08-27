<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;

  @tailwind components;
  /* purgecss end ignore */

  a {
    @apply text-blue-600;
  }


  .container {
    @apply px-4 lg:px-0 lg:max-w-screen-lg lg:mx-auto mb-20;
  }

  @tailwind utilities;
</style>
