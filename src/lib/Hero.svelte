<script lang="ts">
  import profile from "../assets/profile.svg";
  import Icon from "@iconify/svelte";
  import profileData from "../data/profile.json";
  import Typewritter from "./Typewritter.svelte";

  const contact = () => {
    location.href = profileData.socials.filter(
      (s) => s.name === "mail"
    )[0].href;
  };
</script>

<div class="flex">
  <!-- Social links -->
  <div
    class="hidden text-primary-light dark:text-primary-dark md:flex md:flex-col md:items-center md:justify-end mr-16"
  >
    {#each profileData.socials as social}
      <div class="rounded-full cursor-pointer mb-12">
        <a href={social.href} target="_blank">
          <Icon icon={social.icon} width="32" height="32" />
        </a>
      </div>
    {/each}
    <div class="w-[2px] bg-primary-light dark:bg-primary-dark h-1/3 mb-8" />
  </div>
  <!-- Main Section -->
  <div class="flex flex-col items-center md:items-stretch grow px-4">
    <div
      class="mt-16 flex flex-col items-center md:flex-row md:justify-between md:items-center"
    >
      <div class="font-bold text-3xl md:text-6xl">
        <h1 class="text-center md:text-left">
          Hi, i'm <span class="stress capitalize">{profileData.name}</span>
        </h1>
        <div class="stress">
          <Typewritter
            phrases={["web developer.", "app developer.", "boxer."]}
          />
        </div>
      </div>
      <div
        class="w-[200px] h-[200px] rounded-full overflow-clip border-t-4 border-primary-light dark:border-primary-dark border-r-4 my-8 md:w-[400px] md:h-[400px] md:my-0"
      >
        <img src={profile} alt="Profile" class="z-20 scale-125 translate-y-2" />
      </div>
    </div>

    <div class="text-xl w-[90%] text-justify md:text-3xl md:w-[60%]">
      {profileData.about}
    </div>

    <div
      class="md:px-10 py-4 text-center w-full md:w-fit text-2xl bg-primary-light dark:bg-primary-dark dark:text-black text-white rounded-lg mt-16 cursor-pointer"
      on:click={contact}
    >
      Contact me
    </div>
  </div>
  <!-- Email -->
  <div
    class="hidden text-primary-light dark:text-primary-dark md:flex md:flex-col md:items-center md:justify-end ml-16 relative"
  >
    <div class="stress -rotate-90 origin-[0] absolute top-[55%] left-0 text-xl">
      {profileData.socials.filter((s) => s.name === "mail")[0].href.slice(7)}
    </div>
    <div class="w-[2px] bg-primary-light dark:bg-primary-dark h-1/3 mb-8" />
  </div>
</div>
