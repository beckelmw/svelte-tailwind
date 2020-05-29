<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Page from "./routes/Page.svelte";

  import Tailwind from "./components/Tailwind.svelte";
  import Header from "./components/Header.svelte";

  export let url = "";
</script>

<svelte:head>
  <Tailwind />
</svelte:head>

<Router {url}>
  <Header />
  <main>
    <Route path="/page/:id" component={Page} />
    <Route path="/" component={Home} />
  </main>
</Router>
