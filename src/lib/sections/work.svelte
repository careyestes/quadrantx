<script>
  import Animation from "$lib/icons/WorkAnimatedIcon.svelte";
</script>

<div class="wrapper">
  <h3 class="heading-3">How We Work</h3>
  <div class="overlay">
    <Animation />
  </div>
</div>

<style lang="scss">

  :global(section.work) {
    height: auto;
    padding: 0;
    @media screen and (min-width: 1200px) { 
      height: 100vh;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    padding: 7rem 2rem 6rem;
    // align-items: center;
    // justify-content: center;
    @media screen and (min-width: 1200px) {
      height: 100vh;
      padding: 7rem 0 15rem;
      overflow-y: auto;
      scrollbar-width: thin;
    }
  }
  h3 {
    flex: 0 0 auto;
    color: var(--background);
    -webkit-text-fill-color: black;
    -webkit-text-stroke: 1px var(--primary);
    font-size: var(--fluid-5);
    line-height: var(--fluid-6);
    white-space: nowrap;
    text-align: center;
    mix-blend-mode: screen;
    @media screen and (min-width: 1200px) {
      font-size: calc(var(--fluid-6) + 2rem);
      line-height: calc(var(--fluid-6) + 3rem);
    }
  }
  .overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    flex: 1 1 auto;
    max-width: 100vw;
    margin: 0 auto;
    @media screen and (min-width: 1200px) {
      flex-direction: row;
    }
  }

</style>