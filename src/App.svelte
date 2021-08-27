<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Page from "./routes/Page.svelte";
  import Header from "./components/Header.svelte";
  import Tailwind from "./components/Tailwind.svelte";

  export let url = "";
  export let data = null;
</script>

<Router {url}>
  <Tailwind />
  <Header />
  <main class="container">
    <Route path="/page/:id" component={Page} {data} />
    <Route path="/" component={Home} {data} />
  </main>
</Router>
