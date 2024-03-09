<script lang="ts">
  import {
    Navbar,
    Pending,
    Hero,
    About,
    Spacer,
    Skill,
    Portfolio,
    Career,
    Contact,
    Shelf,
  } from "./lib";
</script>

<div>
  <Pending />
  <main
    class="bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark min-h-screen overflow-x-clip sm:px-56 sm:py-8 relative"
  >
    <Navbar />
    <Hero />
    <Spacer />
    <About />
    <Spacer />
    <Skill />
    <Spacer />
    <Portfolio />
    <Spacer />
    <Career />
    <Spacer />
    <Contact />
    <Spacer />
    <Shelf />
  </main>
</div>
