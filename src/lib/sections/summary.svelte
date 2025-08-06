<script>
  import { onMount } from "svelte";
  import LogoBackground from "$lib/icons/LogoBackground.svelte";
  import SummaryBackground from "$lib/icons/SummaryBackground.svelte";

  let text = "At Quadrant X, we empower organizations to harness the transformative potential of artificial intelligence to solve their most complex challenges. Through real world operational experiences and  ground-breaking academic research, we combine cutting-edge AI, advanced analytics, and strategic consulting to drive unparalleled results.";
  let displayText = "";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      displayText += text.charAt(index);
      index++;
      setTimeout(typeWriter, 5); // Adjust speed (in milliseconds)
    }
  }

  onMount(() => {
    // typeWriter();
  });

</script>

<div class="image-background"></div>
<SummaryBackground />

<p>
  <span class="background"></span>
  <!-- <span class="text">{displayText}<span class="cursor">|</span></span> -->
  <span class="text">At <strong>Quadrant X</strong>, we empower organizations to harness the transformative potential of artificial intelligence to solve their most complex challenges. Through real world operational experiences and  ground-breaking academic research, we combine cutting-edge AI, advanced analytics, and strategic consulting to drive unparalleled results.</span>
  <span class="wipe-line"></span>
</p>

<style lang="scss">
  @use "../../styles/colors";

  $grey900: var(--grey-900);

  .image-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(summary_background.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    // mix-blend-mode: overlay;
    mix-blend-mode: hard-light;
    opacity: 0.15;
  }

  p {
    max-width: 26rem;
    margin: 0 auto;
    padding: 2rem;
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0%;
      background: rgba(#0d112b, 0.5);
      backdrop-filter: blur(10px) saturate(180%);
      -webkit-backdrop-filter: blur(10px) saturate(180%); 
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(var(--grey-900), 0.2);
    }
    .text {
      opacity: 0;
      // word-break: break-word;
      // white-space: normal;
    }
    .wipe-line {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--primary);
      transform: scale(0);
      transform-origin: center;
    }
  }

  :global(.summary.in-view p .background) {
    animation: background 1s ease 0s forwards;
  }
  :global(.summary.in-view p .wipe-line) {
    animation: wipe-line 1.5s ease 0s forwards;
  }
  :global(.summary.in-view p .text) {
    animation: text-anim 0.25s ease 1s forwards;
  }

  @keyframes background {
    to {
      height: 100%;
    }
  }

  @keyframes wipe-line {
    0% {
      transform: scale(0);
    }
    15% {
      transform: scale(1);
    }
    85% {
      transform: scale(1);
      bottom: 100%;
    }
    100% {
      transform: scale(0);
      bottom: 100%;
    }
  }
  
  @keyframes text-anim {
    to {
      opacity: 1;
    }
  }

</style>