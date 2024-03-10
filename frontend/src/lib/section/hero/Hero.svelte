<script lang="ts">
  import Icon from "@iconify/svelte";
  import Typewritter from "./Typewritter.svelte";
  import {urlFor} from "../../../client"

  export let profile
  export let socials

</script>

<div class="flex">
  <!-- Social links -->
  <div
    class="hidden text-primary-light dark:text-primary-dark md:flex md:flex-col md:items-center md:justify-end mr-16"
  >
    {#each socials as social}
      <div class="rounded-full cursor-pointer mb-12">
        <a href={social.href} target="_blank">
          <Icon icon={social.icon} width="32" height="32" />
        </a>
      </div>
    {/each}
    <div class="w-[2px] bg-primary-light dark:bg-primary-dark h-1/4 mb-6" />
  </div>
  <!-- Main Section -->
  <div class="flex flex-col items-center md:items-stretch grow px-4">
    <div
      class="mt-16 flex flex-col items-center md:flex-row md:justify-between md:items-center"
    >
      <div class="font-bold text-3xl md:text-6xl">
        <h1 class="text-center md:text-left">
          Hi, i'm <span class="stress capitalize">{profile && profile.name}</span>
        </h1>
        <div class="stress">
          <Typewritter
            phrases={profile && profile.typewritter}
          />
        </div>
      </div>
      <div
        class="rounded-full overflow-clip border-t-4 border-primary-light dark:border-primary-dark border-r-4 my-8 w-[200px] h-[200px] md:w-[350px] md:h-[350px] md:my-0"
      >
        <img src={urlFor(profile.pic).url()} alt="Profile Pic" class="z-20 scale-125 translate-y-2" />
      </div>
    </div>

    <div class="text-xl w-[90%] text-justify md:text-3xl md:w-[60%]">
      {profile.about}
    </div>

  </div>
  <!-- Email -->
  <div
    class="hidden text-primary-light dark:text-primary-dark md:flex md:flex-col md:items-center md:justify-end ml-16 relative"
  >
    <div class="stress -rotate-90 origin-[0] absolute top-[65%] left-0 text-xl">
      {socials.filter((s) => s.name === "mail")[0].href.slice(7)}
    </div>
    <div class="w-[2px] bg-primary-light dark:bg-primary-dark h-1/4 mb-6" />
  </div>
</div>
