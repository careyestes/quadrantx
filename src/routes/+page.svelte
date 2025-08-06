<script>
  import { onMount } from 'svelte';
  import Logo from "$lib/icons/Logo.svelte";
  import LogoText from "$lib/icons/LogoText.svelte";
  import LogoMark from "$lib/icons/LogoMark.svelte";
  import FooterBackground from "$lib/icons/FooterBackground.svelte";

  import SummarySection from "$lib/sections/summary.svelte";
  import SummaryDo from "$lib/sections/do.svelte";
  import SummaryChoose from "$lib/sections/choose.svelte";
  import SummaryWork from "$lib/sections/work.svelte";

  let scrollContainer;
    
  onMount(() => {
    const stickyLogo = document.querySelector(".sticky-logo");
    let workAnimationTimeout = null;   // will hold our single timer ID
    let isLooping = false;             // guard so we only start once

    function isInViewport(element, container) {
      const rect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      return (
        rect.top >= containerRect.top && rect.bottom <= containerRect.bottom
      );
    }

    function loopWorkAnimation() {
      const work = document.querySelector(".work");

      // If it’s out of view, bail and clear the flag+timer
      if (!isInViewport(work, scrollContainer)) {
        clearTimeout(workAnimationTimeout);
        workAnimationTimeout = null;
        isLooping = false;
        return;
      }

      // Remove/add to retrigger the CSS animation
      work.classList.remove("in-view");
      void work.offsetWidth;         // force reflow
      work.classList.add("in-view");

      // schedule next pulse
      workAnimationTimeout = setTimeout(loopWorkAnimation, 10000);
    }


    function handleScroll() {
      const sections = scrollContainer.querySelectorAll("section");

      // 1) handle the “work” section separately
      const work = document.querySelector(".work");
      if (isInViewport(work, scrollContainer)) {
        work.classList.add("in-view");

        // only kick off the loop the first time it becomes visible
        if (!isLooping) {
          isLooping = true;
          loopWorkAnimation();
        }
      } else {
        // remove class and kill any running loop
        work.classList.remove("in-view");
        if (isLooping) {
          clearTimeout(workAnimationTimeout);
          workAnimationTimeout = null;
          isLooping = false;
        }
      }

      // 2) handle your other sections exactly as before
      sections.forEach((sec) => {
        if (sec === work) return; // already handled
        if (isInViewport(sec, scrollContainer)) {
          sec.classList.add("in-view");
        } else {
          sec.classList.remove("in-view");
        }
      });

      // sticky-logo logic unchanged…
      if (isInViewport(sections[0], scrollContainer)) {
        stickyLogo.classList.remove("show");
      } else {
        stickyLogo.classList.add("show");
      }
    }

    // Attach the scroll listener
    scrollContainer.addEventListener('scroll', handleScroll);

    // Initial check in case the user starts midway through the page
    handleScroll();

    // Cleanup listener on component destroy
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  });

</script>

<div class="sticky-logo">
  <LogoMark />
</div>

<div class="scroll-container" bind:this={scrollContainer}>
  <section class="openingAnimationContainer">
    <!-- <video class="main-video" width="400" autoplay muted playsinline loop preload="auto">
      <source class="video-source" src="/video/istockphoto-1280038269-640_adpp_is.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video> -->
    <Logo />
    <h2 class="heading-2">Redefining Decision-Making with AI-Driven Insights</h2>
  </section>

  <section class="summary">
    <SummarySection />
  </section>
   
  <section class="do">
    <SummaryDo />
  </section>
  
  <section class="choose">
    <SummaryChoose />
  </section>
  
  <section class="work">
    <video class="work-video" width="400" autoplay muted playsinline loop preload="auto">
      <source class="video-source" src="/video/istockphoto-1280038269-640_adpp_is.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <SummaryWork />
  </section>
  
  <section class="join">
    <div class="full-background-image">
      <img src="/images/full-logo-background.svg" alt="">
    </div>
    <div class="content">
      <div>
        <h3 class="heading-3">Join the Revolution</h3>
        <p>Quandrant X isn't just a consulting firm—it's a partner in transforming how your business operates, competes, and thrives. Together, we'll unlock the full potential of AI to create a smarter, more agile future for your organization.</p>
      </div>
      <div>
        <h3 class="heading-3">Contact Us</h3>
        <p>Discover what's possible when advanced AI meets strategic expertise. Let's redefine your business, one insight at a time.</p>
      </div>
    </div>
    <footer>
      <!-- <FooterBackground /> -->
      <p>&copy; {new Date().getFullYear()} Quadrant X. All rights reserved.</p>
    </footer>
  </section>
  
</div>

<style lang="scss">

  video {
    display: block; 
    width: 100%;
    height: auto;
    pointer-events: none;
    object-fit: cover;
  }
  
  .sticky-logo {
    position: fixed;
    top: 1.5rem;
    left: 0;
    right: 0;
    z-index: 2;
    margin: 0 auto;
    width: 7rem;
    padding: 1rem 1rem 0;
    background: rgba(black, 0.2);
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%); 
    border: 1px solid var(--grey-500);
    border-radius: 0.5rem;
    opacity: 0;
  }
  :global(.sticky-logo.show) {
    animation: show-logo 0.25s ease 1s forwards;
  }
  @keyframes show-logo {
    to {
      opacity: 1;
    }
  }

  .openingAnimationContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100vw;
    max-width: none;
    height: 100vh;
    // video {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   mix-blend-mode: color-dodge;
    // }
  }

  .heading-2 {
    padding: 1rem 0;
    &:before {
      content: "";
      position: absolute;
      top: -1px;
      left: 0;
      z-index: 1;
      width: 0%;
      height: 1px;
      background: var(--grey-300);
      animation: block-heading-two 2s ease 0.5s forwards;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: var(--background);
      will-change: transform;
      animation: unmask-heading-two 2s ease 0.5s forwards;
    }
  }
  @keyframes block-heading-two {
    0% {
      top: -1px;
      left: 0;
      width: 0%;
    }
    30% {
      top: -1px;
      left: 0;
      width: 100%;
    }
    70% {
      top: 100%;
      left: 0;
      width: 100%;
    }
    100% {
      top: 100%;
      left: 100%;
      width: 0%;
    }
  }

  @keyframes unmask-heading-two {
    0% {
      top: 0;
    }
    30% {
      top: 0;
    }
    70% {
      top: 100%;
    }
    99% {
      top: 100%;
    }
    100% {
      display: none;
    }
  }

  .scroll-container {
    height: 100vh; 
    overflow-y: scroll; 
    scroll-snap-type: y mandatory;
  }

  section {
    border-top: 1px solid var(--primary);
    border-bottom: 1px solid var(--primary);
  }

  section.summary {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    border-top: 1px solid var(--primary);
    
  }

  section.choose {
    padding: 0;
  }
  
  section.work {
    padding: 0;
  }

  .work-video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: overlay;
  }

  
  section.join {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    height: auto;
    padding: 8rem 2rem 0; 
    @media screen and (min-width: 1200px) {
      padding: 6rem 0 0; 
      align-items: center;
      justify-content: center;
    }
    .full-background-image {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      @media screen and (min-width: 1200px) {
        top: 0;
        bottom: auto;
        z-index: 0;
        width: 100vw;
        height: 100vh;
        opacity: 0.2;
      }
      img {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: auto;
        margin: 0 auto;
        @media screen and (min-width: 1200px) {
          top: 0;
          bottom: auto;
        }
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      // align-items: center;
      justify-content: center;
      flex: 1 1 auto;
      gap: 2rem;
      max-width: 60rem;
      margin: 0 auto;
      padding: 0 0 6rem;
      @media screen and (min-width: 1200px) {
        gap: 6rem;
        padding: 8rem 0 6rem;
      }
      h3 {
        position: relative;
        font-size: var(--fluid-4);
        line-height: var(--fluid-5);
        margin: 0 0 2rem;
        padding-left: Calc(var(--fluid-2) + 1rem); 
        @media screen and (min-width: 1200px) {
          font-size: var(--fluid-6);
          line-height: var(--fluid-6);
        }
        &:before {
          content: "";
          position: absolute;
          top: 0.5rem;
          left: 0;
          display: inline-block;
          width: var(--fluid-2);
          height: var(--fluid-2);
          background: var(--primary);
          @media screen and (min-width: 1200px) {
            top: 1.5rem;
            left: -1rem;
            width: var(--fluid-3);
            height: var(--fluid-3);

          }
        }
      }
      p {
        padding: 0 3rem;
      }
    }
  }

  footer {
    flex: 0 0 auto;
    padding: 4rem 0 0;
    // background: url("/footer.svg") no-repeat center center;
    text-align: center;
    overflow: hidden;
    p {
      font-size: calc(var(--fluid-1) - 0.5rem);
    }
    @media screen and (min-width: 1500px) {
      margin: 0 0;
      padding: 4rem 0 0;
    }
  }
</style>