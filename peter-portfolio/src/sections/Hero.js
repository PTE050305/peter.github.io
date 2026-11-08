
export function Hero() {
  return `
    <section id="home" class="hero shell">

      <!-- LEFT PANEL -->
      <div class="hero-copy">

        <div class="eyebrow">
          <span class="status-dot"></span>
          OPEN TO OPPORTUNITIES
          <span class="eyebrow-line"></span>
          IT STUDENT & ASPIRING TECH PROFESSIONAL
        </div>

        <h1>
          Building better<br/>
          <em>digital experiences.</em>
        </h1>

        <p class="hero-name">
          Hi, I'm <strong>Peter Victor D. Dawis.</strong>
        </p>

        <p class="hero-desc">
          Ensuring product quality through structured project
          delivery. Specialized in Agile management, QA testing,
          and technical documentation.
        </p>

        <div class="hero-actions">
          <a
            class="btn btn-dark"
            href="/documents/resume.pdf"
            download
          >
            Download résumé <span>↓</span>
          </a>

          <a class="btn btn-outline" href="#contact">
            Get in touch <span>↗</span>
          </a>
        </div>

        <div class="hero-meta">
          <div>
            <strong>04</strong>
            <small>Years of learning</small>
          </div>

          <div>
            <strong>03</strong>
            <small>Years in student leadership</small>
          </div>

          <div>
            <strong>05</strong>
            <small>Featured academic projects</small>
          </div>
        </div>

      </div>

      <!-- RIGHT PANEL: PROFILE PHOTO -->
      <div class="hero-visual">

        <div class="portrait">

          <img
            src="/images/profile.jfif"
            alt="Peter Victor D. Dawis"
            class="portrait-image"
            loading="eager"
            fetchpriority="high"
          />

          <div class="portrait-caption">
            PETER VICTOR D. DAWIS <span>↗</span>
          </div>

        </div>

        <div class="floating-tag tag-top">
          ✦ &nbsp; DETAIL-ORIENTED
        </div>

        <div class="floating-tag tag-bottom">
          <span class="status-dot"></span>
          DESIGN · BUILD · IMPROVE
        </div>

      </div>

      <div class="scroll-cue">
        SCROLL TO EXPLORE <span>↓</span>
      </div>

    </section>
  `;
}
