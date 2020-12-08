<script>
  import { afterUpdate } from "svelte";
  export let id;
  export let location;
  export let data;

  afterUpdate(() => {
    console.log(JSON.stringify({ id, location }, null, 2));
  });
</script>

<code>{JSON.stringify(data)}</code>
<pre class="p-4">{JSON.stringify({id, location}, null, 2)}</pre>
