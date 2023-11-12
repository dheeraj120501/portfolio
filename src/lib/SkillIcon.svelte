<script lang="ts">
  export let Logo: ConstructorOfATypedSvelteComponent;
  export let isWall: boolean = true;
  export let wallColor: string;
  export let name: string;
</script>

<div
  class="w-[100px] h-[100px] object-fill {isWall
    ? 'p-2'
    : ''} {wallColor} flex items-center justify-center grayscale transition-[filter] duration-300 hover:grayscale-0 overflow-clip rounded-lg"
  title={name.split(" ").slice(0, -1).join("")}
>
  <Logo />
</div>
