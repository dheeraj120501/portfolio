<script lang="ts">
  import {
    Navbar,
    Pending,
    Hero,
    About,
    Spacer,
    Skill,
    Work,
    Career,
    Contact,
    Shelf,
    Loader
  } from "./lib";
  import { onMount } from "svelte";
  import {getProfile, getSocials} from "./client";

  let loading = true
  let profile = undefined
  let socials = undefined

  onMount(async () => {
   const res = await Promise.all([getProfile(), getSocials()])
   profile = res[0][0]
   socials = res[1]
   loading = false
  })
</script>

<div>
  <!-- <Pending /> -->
  <main
    class="bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark min-h-screen overflow-x-clip sm:px-56 sm:py-8 relative"
  >
    <Navbar />
    {#if !loading}
    <Hero profile={profile} socials={socials} />
    <Spacer />
    <About />
    <Spacer />
    <Skill />
    <Spacer />
    <Work />
    <Spacer />
    <Career />
    <Spacer />
    <Contact />
    <Spacer />
    <Shelf />
    {:else}
    <div class="absolute w-screen h-screen top-0 left-0 flex justify-center items-center">
      <Loader />
    </div>
    {/if}
  </main>
</div>
