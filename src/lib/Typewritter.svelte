<script lang="ts">
  import { scale } from "svelte/transition";
  import * as easingFunctions from "svelte/easing";

  export let phrases: Array<String>;
  let typedPhrase = "";
  let phraseIdx = 0;
  let charIdx = 0;
  let dirFront = true;

  const typePhrases = () => {
    if (dirFront && charIdx < phrases[phraseIdx].length) {
      charIdx += 1;
    } else if (dirFront) {
      charIdx -= 1;
      dirFront = false;
    } else if (!dirFront && charIdx >= 0) {
      charIdx -= 1;
    } else {
      charIdx += 1;
      phraseIdx += 1;
      phraseIdx %= phrases.length;
      dirFront = true;
    }
    typedPhrase = phrases[phraseIdx].slice(0, charIdx + 1);
    return;
  };

  setInterval(typePhrases, 200);
</script>

{typedPhrase}<span
  class="inline-block border-l-4 border-primary-dark animate-cursor text-transparent"
  >|</span
>
