<script lang="ts">
  export let idx: string;
  export let text: string;
  export let id: string;
</script>

<div class="mx-4 sm:mx-20" {id}>
  <div class="text-xl sm:text-4xl font-code font-bold">
    <span class="stress">{idx + ". "}</span><span>{"<" + text + ">"}</span>
  </div>
  <div class="py-8 sm:py-16 text-md sm:text-2xl">
    <slot />
  </div>
  <div class="flex flex-row-reverse text-lg sm:text-2xl font-code font-bold">
    <span>{"</" + text + ">"}</span>
  </div>
</div>
