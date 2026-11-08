
export function Contact() {
  return `
    <section id="contact" class="section">
      <div class="shell">

        <div class="contact-container">

          <span class="contact-label">
            08 / CONTACT
          </span>

          <h2 class="contact-title">
            Let's make something great.
          </h2>

          <p class="contact-description">
            Have a project, opportunity, or idea?
            Send me a message directly from this website.
          </p>

          <a
            href="mailto:pvdawis@gmail.com"
            class="contact-email"
          >
            <span aria-hidden="true">✉</span>
            <span>pvdawis@gmail.com</span>
          </a>

          <div class="contact-socials">

            <a
              href="https://github.com/PTE050305"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-social-btn"
            >
              <span aria-hidden="true">⌘</span>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/peter-victor-dawis-846889408/"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-social-btn"
            >
              <span aria-hidden="true">in</span>
              LinkedIn
            </a>

          </div>

          <form id="contact-form" class="contact-form">

            <div class="contact-field">
              <label for="contact-name">
                Your name
              </label>
              <input
                type="text"
                id="contact-name"
                name="from_name"
                placeholder="Your name"
                required
              />
            </div>

            <div class="contact-field">
              <label for="contact-email">
                Email address
              </label>
              <input
                type="email"
                id="contact-email"
                name="reply_to"
                placeholder="you@example.com"
                required
              />
            </div>

            <div class="contact-field">
              <label for="contact-message">
                Your message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell me about your idea..."
                required
              ></textarea>
            </div>

            <div class="contact-honeypot" aria-hidden="true">
              <label for="contact-website">Website</label>
              <input
                type="text"
                id="contact-website"
                name="website"
                tabindex="-1"
                autocomplete="off"
              />
            </div>

            <button
              type="submit"
              class="contact-submit"
            >
              Send Message ↗
            </button>

            <p
              id="contact-status"
              role="status"
              aria-live="polite"
            ></p>

          </form>

        </div>
      </div>
    </section>
  `;
}
