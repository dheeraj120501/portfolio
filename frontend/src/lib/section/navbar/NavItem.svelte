<script lang="ts">
  export let text: string;
  export let idx: string;
</script>

<div
  class="font-code text-xl pb-2 w-fit nav-border cursor-pointer mr-8 last:mr-0 max-sm:mr-0 max-sm:w-1/2"
>
  <a href={`#${text}`}>
    <span class=" text-primary-light dark:text-primary-dark">{idx + ". "}</span>
    {"<" + text + ">"}
  </a>
</div>
