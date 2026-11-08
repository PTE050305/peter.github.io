import './styles/main.css';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { Hero } from './sections/Hero.js';
import { Ticker } from './sections/Ticker.js';
import { About } from './sections/About.js';
import { Stack } from './sections/Stack.js';
import { Journey } from './sections/Journey.js';
import { Projects } from './sections/Projects.js';
import { Certificates } from './sections/Certificates.js';
import { Contact } from './sections/Contact.js';

const app = document.querySelector('#app');
app.innerHTML = `${Navbar()}<main>${Hero()}${Ticker()}${About()}${Stack()}${Journey()}${Projects()}${Certificates()}${Contact()}</main>${Footer()}`;

document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const closeMenu = () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
};
toggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(opened));
  toggle.textContent = opened ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Portfolio inquiry from ${form.get('name')}`);
  const body = encodeURIComponent(`${form.get('message')}\n\nFrom: ${form.get('name')} (${form.get('email')})`);
  window.location.href = `mailto:pvdawis@gmail.com?subject=${subject}&body=${body}`;
});

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.08 });
  document.querySelectorAll('.section-heading,.skill-card,.timeline-item,.project-card,.about-feature,.about-copy,.aside-card')
    .forEach(element => { element.classList.add('reveal'); observer.observe(element); });
}
