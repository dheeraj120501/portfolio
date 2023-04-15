<script>
  import NavItem from "./NavItem.svelte";
  const navItems = ["about", "skills", "portfolio", "career", "contact"];
</script>

<nav class="flex">
  <div class="grow" />
  {#each navItems as navItem, idx (idx)}
    <NavItem idx={"0" + String(idx + 1)} text={navItem} />
  {/each}
</nav>
