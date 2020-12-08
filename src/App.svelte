<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Page from "./routes/Page.svelte";
  import Header from "./components/Header.svelte";

  export let url = "";
  export let data = null;
</script>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;
</style>

<Router {url}>
  <Header />
  <main>
    <Route path="/page/:id" component={Page} {data} />
    <Route path="/" component={Home} {data} />
  </main>
</Router>
