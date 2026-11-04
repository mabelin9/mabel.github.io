      :root {
        color-scheme: dark;
        --background: #090909;
        --surface: #141111;
        --text: #f5eeee;
        --muted: #bebebe;
        --accent: #7d0000;
        --border: #883500;
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        background: var(--background);
        color: var(--text);
        font-family: Georgia, "Times New Roman", serif;
        line-height: 1.65;
      }

      a {
        color: inherit;
      }

      a:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 4px;
      }

      .site-header,
      main,
      .site-footer {
        width: min(100% - 2rem, 68rem);
        margin-inline: auto;
      }

      .site-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        padding-block: 1.25rem;
        border-bottom: 1px solid var(--border);
      }

      .brand {
        color: var(--accent);
        font-family: "Courier New", monospace;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-decoration: none;
        text-transform: uppercase;
      }

      nav {
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem;
      }

      nav a {
        color: var(--muted);
        font-size: 0.95rem;
        text-decoration-thickness: 1px;
        text-underline-offset: 0.25em;
      }

      nav a:hover {
        color: var(--text);
      }

      .hero {
        padding-block: clamp(4rem, 12vw, 8rem);
      }

      .eyebrow {
        margin: 0 0 1rem;
        color: var(--muted);
        font-family: "Courier New", monospace;
        font-size: 0.82rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      h1,
      h2,
      p {
        margin-top: 0;
      }

      h1 {
        max-width: 13ch;
        margin-bottom: 1.25rem;
        font-size: clamp(3rem, 9vw, 6.5rem);
        font-weight: 400;
        letter-spacing: -0.06em;
        line-height: 0.98;
      }

      h1 span {
        color: var(--accent);
      }

      .hero-copy {
        max-width: 42rem;
        margin-bottom: 2rem;
        color: var(--muted);
        font-size: clamp(1.05rem, 2vw, 1.3rem);
      }

      .text-link {
        display: inline-block;
        color: var(--text);
        text-decoration-color: var(--accent);
        text-decoration-thickness: 2px;
        text-underline-offset: 0.35em;
      }

      section {
        padding-block: 3.5rem;
        border-top: 1px solid var(--border);
      }

      .section-grid {
        display: grid;
        grid-template-columns: minmax(10rem, 0.8fr) minmax(0, 1.6fr);
        gap: 2rem;
      }

      h2 {
        margin-bottom: 0.75rem;
        font-size: clamp(1.7rem, 4vw, 2.5rem);
        font-weight: 400;
        letter-spacing: -0.03em;
      }

      .section-label {
        margin: 0;
        color: var(--accent);
        font-family: "Courier New", monospace;
        font-size: 0.8rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .section-copy {
        max-width: 42rem;
        margin-bottom: 0;
        color: var(--muted);
      }

      .prompt-card {
        padding: 1.5rem;
        border: 1px dotted var(--border);
        background: var(--surface);
      }

      .prompt-card p:last-child {
        margin-bottom: 0;
      }

      .prompt {
        color: var(--text);
      }

      .site-footer {
        padding-block: 1.5rem 2rem;
        border-top: 1px solid var(--border);
        color: var(--muted);
        font-size: 0.9rem;
      }

      @media (max-width: 600px) {
        .site-header {
          align-items: flex-start;
          flex-direction: column;
        }

        nav {
          gap: 0.75rem 1rem;
        }

        .section-grid {
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
      }

