<script>
  import Header from "./components/Header.svelte";
</script>

<Header />
<div class="sm:grid grid-rows-6 grid-flow-col gap-2">
  <div class="md:row-span-6 bg-gray-100 p-3">1</div>
  <div class="md:row-span-2 sm:col-span-4 lg:col-span-10 bg-gray-100 p-3">
    2
  </div>
  <div class="md:row-span-4 sm:col-span-4 lg:col-span-10 bg-gray-100 p-3">
    3
  </div>
</div>
