<script>
  import { afterUpdate } from "svelte";
  export let id;
  export let location;

  afterUpdate(() => {
    console.log(JSON.stringify({ id, location }, null, 2));
  });
</script>

<pre class="p-4">{JSON.stringify({id, location}, null, 2)}</pre>
