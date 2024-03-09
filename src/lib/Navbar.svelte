<script>
  import NavItem from "./NavItem.svelte";
  import Icon from "@iconify/svelte";
  const navItems = [
    "about",
    "skills",
    "portfolio",
    "career",
    "contact",
    "shelf",
  ];
  let isOpen = false;
  const toggleMenu = () => {
    isOpen = !isOpen;
  };
</script>

<div>
  {#if !isOpen}
    <div class="flex flex-row-reverse sm:hidden" on:click={toggleMenu}>
      <Icon icon="ci:hamburger-lg" width="48" height="48" />
    </div>
  {:else}
    <div>
      <nav
        class="flex max-sm:flex-col max-sm:h-screen max-sm:w-screen max-sm:justify-evenly max-sm:items-center max-sm:bg-bg-light max-sm:dark:bg-bg-dark max-sm:absolute max-sm:z-50"
      >
        <div class="flex justify-center sm:hidden" on:click={toggleMenu}>
          <Icon icon="ci:close-lg" width="48" height="48" />
        </div>
        <div class="grow max-sm:grow-0" />
        {#each navItems as navItem, idx (idx)}
          <NavItem idx={"0" + String(idx + 1)} text={navItem} />
        {/each}
      </nav>
    </div>
  {/if}
</div>

<nav class="hidden sm:flex">
  <div class="grow" />
  {#each navItems as navItem, idx (idx)}
    <NavItem idx={"0" + String(idx + 1)} text={navItem} />
  {/each}
</nav>
