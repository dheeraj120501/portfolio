<script lang="ts">
  import profile from "../assets/profile.svg";
  import Icon from "@iconify/svelte";

  const contact = () => {
    location.href = "mailto:dheerajbisht20076@gmail.com";
  };
</script>

<div class="flex">
  <!-- Social links -->
  <div
    class="hidden text-primary-light dark:text-primary-dark sm:flex sm:flex-col sm:items-center sm:justify-end mr-16"
  >
    <div class="rounded-full cursor-pointer mb-12">
      <Icon icon="fa:github" width="32" height="32" />
    </div>
    <div class="rounded-full cursor-pointer mb-12">
      <Icon icon="fa:linkedin" width="32" height="32" />
    </div>
    <div class="rounded-full cursor-pointer mb-12">
      <Icon icon="fa:paper-plane" width="32" height="32" />
    </div>
    <div class="w-[2px] bg-primary-light dark:bg-primary-dark h-1/3 mb-8" />
  </div>
  <!-- Main Section -->
  <div class="flex flex-col items-center sm:items-stretch grow">
    <div
      class="flex flex-col sm:flex-row items-center sm:justify-between sm:items-center mt-16"
    >
      <h1 class="font-bold text-4xl sm:text-6xl leading-normal">
        Hi, i'm <span class="stress">Dheeraj</span>
        <br />
        <span class="stress">web developer.</span>
      </h1>
      <div
        class="w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full overflow-clip border-t-4 border-primary-light dark:border-primary-dark border-r-4"
      >
        <img src={profile} alt="Profile" class="z-20 scale-125 translate-y-2" />
      </div>
    </div>

    <div class="text-3xl">
      Ooga Booga Booga <br />
      Doom Doom
      <span class="stress">Wow</span>.
    </div>

    <div
      class="px-10 py-4 text-2xl bg-primary-light dark:bg-primary-dark w-fit dark:text-black text-white rounded-lg mt-16 cursor-pointer"
      on:click={contact}
    >
      Contact me
    </div>
  </div>
  <!-- Email -->
  <div
    class="hidden text-primary-light dark:text-primary-dark sm:flex sm:flex-col sm:items-center sm:justify-end ml-16 relative"
  >
    <div class="stress -rotate-90 origin-[0] absolute top-[55%] left-0">
      dheerajbisht20076@gmail.com
    </div>
    <div class="w-[2px] bg-primary-light dark:bg-primary-dark h-1/3 mb-8" />
  </div>
</div>
