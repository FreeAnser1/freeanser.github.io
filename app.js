import { createElement, useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import htm from 'htm';

const html = htm.bind(createElement);

// ============================================
// COMPONENTS
// ============================================

const Ribbon = () => html`
  <div class="ribbon">
    <div class="ribbon-track">
      <span class="ribbon-item">Grab your Free Digital Audit now!</span>
      <span class="ribbon-item">Grab your Free Digital Audit now!</span>
      <span class="ribbon-item">Grab your Free Digital Audit now!</span>
      <span class="ribbon-item">Grab your Free Digital Audit now!</span>
      <span class="ribbon-item">Grab your Free Digital Audit now!</span>
      <span class="ribbon-item">Grab your Free Digital Audit now!</span>
      <span class="ribbon-item">Grab your Free Digital Audit now!</span>
      <span class="ribbon-item">Grab your Free Digital Audit now!</span>
      <span class="ribbon-item">Grab your Free Digital Audit now!</span>
      <span class="ribbon-item">Grab your Free Digital Audit now!</span>
    </div>
  </div>
`;

const Nav = () => html`
  <nav class="nav-pill">
    <a href="#hero" class="nav-logo">Free<span>Anser</span></a>
    <a href="#lead-form" class="nav-cta">Free Digital Presence Audit!</a>
  </nav>
`;

const Hero = () => html`
  <section id="hero" class="hero">
    <div class="blob blob-1"></div>
    <div class="hero-content">
      <div class="hero-badge">⚡ Maximum ROI</div>
      <h1>Lets <span>24x</span> your visibility<br/>with our professional writers!</h1>
      <p>Transform your brand with ultra-optimized content, stunning aesthetics, and a data-driven path to market dominance.</p>
    </div>
  </section>
`;

const Process = () => {
  const steps = [
    { num: "01", title: "Submit the form for Digital Presence Audit", desc: "Share your details and let our experts analyze your current digital footprint to find hidden growth levers." },
    { num: "02", title: "Report: What's wrong and what can be worked upon", desc: "Receive a comprehensive breakdown of your weaknesses and exact areas we will drastically improve." },
    { num: "03", title: "Get a Custom Quote", desc: "We provide transparent, flat-rate pricing for a custom package tailored specifically to 24x your visibility." },
    { num: "04", title: "Specialised roadmap and Execution for maximum results", desc: "Watch traffic and conversions multiply as we execute premium content streams and aesthetic design." },
  ];

  return html`
    <section id="process" class="process">
      <div class="process-container">
        <h2 class="section-title">The <span>Fast</span> 4-Step Process</h2>
        <div class="steps-grid">
          ${steps.map((step, i) => html`
            <div class="step-card" key=${i}>
              <div class="step-num">${step.num}</div>
              <h3 class="step-title">${step.title}</h3>
              <p class="step-desc">${step.desc}</p>
            </div>
          `)}
        </div>
      </div>
    </section>
  `;
};

const LeadForm = () => {
  const [email, setEmail] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Booked Audit for \${email} | Link: \${link}\`);
  };

  return html`
    <section id="lead-form" class="lead-section">
      <div class="blob blob-2"></div>
      <div class="form-wrapper">
        <h2>Free Digital Presence Audit</h2>
        <p>(no Strings attached)</p>
        <form onSubmit=${handleSubmit}>
          <div class="input-group">
            <input 
              type="email" 
              class="input-field" 
              placeholder="Your Email Address" 
              value=${email} 
              onInput=${e => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div class="input-group">
            <input 
              type="text" 
              class="input-field" 
              placeholder="Business link (Website / Instagram / Google profile)" 
              value=${link} 
              onInput=${e => setLink(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" class="glow-btn">Book My Free Audit</button>
        </form>
      </div>
    </section>
  `;
};

// ============================================
// ROOT APP COMPONENT
// ============================================

const App = () => {
  return html`
    <div id="root-container">
      <${Ribbon} />
      <${Nav} />
      <${Hero} />
      <${Process} />
      <${LeadForm} />
    </div>
  `;
};

// ============================================
// RENDER
// ============================================
const container = document.getElementById('root');
const root = createRoot(container);
root.render(html\`<\${App} />\`);
