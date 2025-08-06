<div class="chooseContainer">
<h3 class="heading-3">Why Choose Us<span>?</span></h3>
  <ul>
    <li>
      <h4>Collaborative Expertise</h4>
      <p>We bridge the gap between data science and business strategy, working closely with your teams to co-create solutions that align with your goals.</p>
    </li>
    <li>
      <h4>Cutting-Edge Innovation</h4>
      <p>Our commitment to staying at the forefront of AI innovation ensures that you benefit from the latest technologies and methodologies.</p>
    </li>
    <li>
      <h4>Proven Impact</h4>
      <p>Our approach delivers measurable results, from improved efficiency and cost savings to increased revenue and market share.</p>
    </li>
    <li>
      <h4>Scalable Solutions</h4>
      <p>We design solutions that grow with your organization, enabling long-term success and sustained competitive advantage.</p>
    </li>
  </ul>
</div>
<style lang="scss">

  .heading-3 {
    font-size: var(--fluid-4);
    line-height: var(--fluid-5);
    text-align: center;
    padding: 8rem 0 0;
    @media screen and (min-width: 1200px) {
      font-size: var(--fluid-6);
      line-height: var(--fluid-6);
    }
    span {
      color: var(--primary);
    }
  }

  .chooseContainer {
    height: 100vh;
    overflow-y: auto;
    scrollbar-width: thin;
  }

  ul {
    margin: 4rem 0rem 6rem;
    padding: 0;
    list-style: none;
    @media screen and (min-width: 1200px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 4rem 10rem;
    }
    li {
      padding: 2.5rem 4rem;
      background-size: 100% 100%;
      background-position: bottom;
      @media screen and (min-width: 1200px) {
        transform: scaleY(0);
        * {
          opacity: 0;
        }
        &:nth-child(1) {
          background: linear-gradient(165deg, rgba(1,22,35,0) 50%, rgba(1,22,35,1) 100%);
          border-right: 1px solid var(--grey-400);
          border-bottom: 1px solid var(--grey-400);
          transform-origin: bottom right;
        }
        
        &:nth-child(2) {
          border-left: 1px solid var(--grey-400);
          border-bottom: 1px solid var(--grey-400);
          background: linear-gradient(190deg, rgba(1,22,35,0) 50%, rgba(1,22,35,1) 100%);
          transform-origin: bottom left;
        }
        &:nth-child(3) {
          border-right: 1px solid var(--grey-400);
          border-top: 1px solid var(--grey-400);
          background: linear-gradient(10deg, rgba(1,22,35,0) 50%, rgba(1,22,35,1) 100%);
          transform-origin: top right;
        }
        &:nth-child(4) {
          border-left: 1px solid var(--grey-400);
          border-top: 1px solid var(--grey-400);
          background: linear-gradient(350deg, rgba(1,22,35,0) 50%, rgba(1,22,35,1) 100%);
          transform-origin: top left;
        }
      }
    }
  }

  h4 {
    font-size: var(--fluid-1);
    font-weight: 700;
  }
  p {
    margin: 0;
    font-size: var(--fluid-0);
  }
@media screen and (min-width: 1200px) {
  :global(.choose.in-view ul li:nth-child(1)) {
    animation: drawTopLeft 2s forwards;
  }
  :global(.choose.in-view ul li:nth-child(2)) {
    animation: drawTopLeft 2s forwards;
  }
  :global(.choose.in-view ul li:nth-child(3)) {
    animation: drawTopLeft 2s forwards;
  }
  :global(.choose.in-view ul li:nth-child(4)) {
    animation: drawTopLeft 2s forwards;
  }
  :global(.choose.in-view ul li *) {
    animation: fadeText 2s forwards;
  }
}
  @keyframes drawTopLeft {
    0% {
      transform: scale(0);
    }
    50% {
      background-position: bottom;
      transform: scaleY(1);
    }
    100% {
      background-position: top;
      transform: scaleY(1);
    }
  }
  @keyframes fadeText {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>