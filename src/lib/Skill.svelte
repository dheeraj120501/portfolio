<script lang="ts">
  import skills from "../assets/skills";
  import SectionWrapper from "./SectionWrapper.svelte";
  import SkillIcon from "./SkillIcon.svelte";
</script>

<SectionWrapper idx="02" text="my arsenal" id="skills">
  <div class="flex flex-wrap justify-center gap-4 md:gap-8 lg:justify-start">
    {#each skills as skill}
      <SkillIcon {...skill} />
    {/each}
  </div>
</SectionWrapper>
