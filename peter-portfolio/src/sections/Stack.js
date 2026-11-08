import { escapeHtml, pills } from "../utils/html.js";
import { skills } from "../data/skills.js";
export function Stack() {
  return `<section id="stack" class="section section-muted"><div class="shell"><div class="section-heading"><span class="section-index">02 / TOOLKIT</span><h2>My working <em>stack.</em></h2><p>A growing set of tools, technologies, and practices I use to turn ideas into solutions.</p></div><div class="skills-grid">${skills.map((s,i)=>`<article class="skill-card"><div class="skill-number">0${i+1} <span>↗</span></div><h3>${escapeHtml(s.title)}</h3><div class="pills">${pills(s.items)}</div></article>`).join('')}</div></div></section>
`;
}
