
import { projects } from "../data/projects.js";
import { ProjectCard } from "../components/ProjectCard.js";

export function Projects() {
  return `
    <section id="projects" class="section">
      <div class="shell">

        <div class="section-heading">
          <span class="section-label">SELECTED WORK</span>
          <h2>Projects</h2>
        </div>

        <div class="projects-list">
          ${projects.map((p, i) => ProjectCard(p, i)).join("")}
        </div>

      </div>
    </section>
  `;
}
