<script>
  import LogoBackground from "$lib/icons/LogoBackground.svelte";
  import SummaryBackground from "$lib/icons/SummaryBackground.svelte";
  import FooterBackground from "$lib/icons/FooterBackground.svelte";
</script>

<LogoBackground />

<div>
  <header>
    <h1 class="heading-1">Quadrant <span class="weight-5">X</span></h1>
    <h2 class="heading-2">Redefining Decision-Making with AI-Driven Insights</h2>
  </header>
  
  <section class="summary">
    <SummaryBackground />
    <p>At Quadrant X, we empower organizations to harness the transformative potential of artificial intelligence to solve their most complex challenges. Through real world operational experiences and  ground-breaking academic research, we combine cutting-edge AI, advanced analytics, and strategic consulting to drive unparalleled results.</p>
  </section>
   
  <section>
    <h3 class="heading-3">What We Do</h3>
    <ul>
      <li>
        AI-Powered Strategy Development
        We use advanced machine learning and AI tools to uncover actionable insights from vast datasets, enabling you to make informed, strategic decisions. Whether you're optimizing operations, enhancing customer experiences, or launching new initiatives, our tailored AI solutions give you a competitive edge.
      </li>
      <li>
        End-to-End Data Transformation
        Our experts partner with your team to transform raw data into a strategic asset. From data engineering and pipeline optimization to scalable AI deployments, we ensure your organization is ready to thrive in the data-driven era.
      </li>
      <li>
        Predictive & Prescriptive Analytics
        Predict trends, anticipate risks, and seize opportunities with our predictive analytics solutions. Through prescriptive analytics, we go beyond forecasts to provide actionable recommendations that drive meaningful business outcomes.
      </li>
      <li>
        Industry-Specific AI Solutions
        Our domain experts understand the unique challenges and opportunities across industries, including healthcare, finance, manufacturing, and more. We design AI solutions that address your sector-specific needs, ensuring maximum impact and relevance.
      </li>
    </ul>
  </section>
  
  <section>
    <h3 class="heading-3">Why Choose Us?</h3>
    <ul>
      <li>
        Collaborative Expertise
        We bridge the gap between data science and business strategy, working closely with your teams to co-create solutions that align with your goals.
      </li>
      <li>
        Cutting-Edge Innovation
        Our commitment to staying at the forefront of AI innovation ensures that you benefit from the latest technologies and methodologies.
      </li>
      <li>
        Proven Impact
        Our approach delivers measurable results, from improved efficiency and cost savings to increased revenue and market share.
      </li>
      <li>
        Scalable Solutions
        We design solutions that grow with your organization, enabling long-term success and sustained competitive advantage.
      </li>
    </ul>
  </section>
  
  <section>
    <h3 class="heading-3">How We Work</h3>
    <ul>
      <li>
        Discover: We immerse ourselves in your organization to understand your challenges and opportunities.
      </li>
      <li>
        Design: Our experts develop tailored AI and analytics solutions to address your specific needs.=
      </li>
      <li>
        Deliver: We implement, test, and refine solutions to ensure seamless integration and impactful outcomes.
      </li>
      <li>
        Evolve: We continuously improve and scale solutions to adapt to changing market dynamics.
      </li>
    </ul>
  </section>
  
  <section>
    <h3 class="heading-3">Join the Revolution</h3>
    <p>Quandrant X isn't just a consulting firm—it's a partner in transforming how your business operates, competes, and thrives. Together, we'll unlock the full potential of AI to create a smarter, more agile future for your organization.</p>
  </section>
  
  <section>
    <h3 class="heading-3">Contact Us</h3>
    <p>Discover what's possible when advanced AI meets strategic expertise. Let's redefine your business, one insight at a time.</p>
  </section>

  <footer>
    <!-- <FooterBackground /> -->
    <p>&copy; 2024 Quadrant X. All rights reserved.</p>
  </footer>
</div>

<style lang="scss">
  header {
    text-align: center;
    transform: translateY(-2rem);
    @media screen and (min-width: 1500px) {
      transform: translateY(-20rem);
    }
  }

  section.summary {
    display: flex;
    align-items: center;
    padding: 0 2rem;
    transform: translateY(0rem);
    @media screen and (min-width: 1500px) {
      transform: translateY(-10rem);
    }
    p {
      max-width: 40rem;
      margin: 0 auto;
    }
  }

  section {
    max-width: 80rem;
    margin: 0 auto 8rem;
    padding: 0 2rem;
  }

  footer {
    padding: 4rem 0 0;
    background: url("/footer.svg") no-repeat center center;
    text-align: center;
    overflow: hidden;
    @media screen and (min-width: 1500px) {
      margin: 16rem 0 0;
      padding: 4rem 0 0;
    }
  }
</style>