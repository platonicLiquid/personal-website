export default function Development() {
  return (
    <div className="text-component">
      <div className="project-section">
        <h4>
          Riot Org Teams and Products Data Pipeline
        </h4>
        <p className="source-link">
          <strong>Source:</strong>{' '}
          <a href="https://github.com/platonicLiquid/rg-etl-sample" target="_blank" rel="noopener noreferrer">
            rg-etl-sample GH Repo
          </a>
        </p>
        <p>
          While at Riot Games, I proposed, designed, and implemented a Python data pipeline to scrape Riot's teams and products data and load it into corresponding Notion databases.
        </p>
      </div>

      <div className="project-section">
        <h4>
          League Studio Confluence to Notion Migration
        </h4>
        <p>
          During my tenure at Riot Games, we transitioned from Confluence to{' '}
          <a href="https://notion.so" target="_blank" rel="noopener noreferrer">
            Notion
          </a>{' '}
          for documentation. I developed migration strategies and built Python tooling to automate page transfers, verify integrity, generate reports, and update Confluence pages with links to their Notion replacements.
        </p>
      </div>

      <div className="project-section">
        <h4>
          Kaiser Permanente Data Dictionary Definitions Pipeline
        </h4>
        <p className="source-link">
          <strong>Source:</strong>{' '}
          <a href="https://github.com/platonicLiquid/kp-webscrape-sample/blob/main/webscrape_example.py" target="_blank" rel="noopener noreferrer">
            kp-webscrape-sample GH Repo
          </a>
        </p>
        <p>
          I built a Python pipeline to extract data dictionary definitions from Confluence and load them into a SQL database, supporting live tooltips in financial dashboards.
        </p>
      </div>

      <div className="project-section">
        <h4>
          Personal Website – matthew.yocum.dev
        </h4>
        <p className="source-link">
          <strong>Source:</strong>{' '}
          <a href="https://github.com/platonicLiquid/personal-website" target="_blank" rel="noopener noreferrer">
            personal-website GH Repo
          </a>
        </p>
        <p>
          A modern portfolio site built with React, Vite, and deployed via Cloudflare Pages. This site is actively maintained and serves as the central showcase for all professional work and side projects.
        </p>
      </div>

      <div className="project-section">
        <h4>
          Fantasy World Map App – map-app.matthew.yocum.dev
        </h4>
        <p>
          A browser-based map editor and viewer built with Leaflet.js. This app allows users to explore and annotate a fantasy world map. It uses Cloudflare for authentication, 2FA, and storage of user-generated map metadata. Designed for extensibility and performance, it is a work in progress.
        </p>
      </div>

      <div className="project-section">
        <h4>
          <a href="https://eetah.io" target="_blank" rel="noopener noreferrer">
            eetah.io – Web and App Development
          </a>
        </h4>
        <p>
          <a href="https://eetah.io" target="_blank" rel="noopener noreferrer">
            eetah.io
          </a>{' '}
          is a professional services site for my web/app development business. The frontend is built using Vite, with a backend powered by Cloudflare Workers. Features include user authentication, two-factor authentication, customer account management, and Stripe integration for payments. All infrastructure is designed for scalability and performance.
        </p>
      </div>

      <div className="project-section">
        <h4>
          <a href="https://writing-pros.com" target="_blank" rel="noopener noreferrer">
            writing-pros.com – Technical & Marketing Content
          </a>
        </h4>
        <p>
          <a href="https://writing-pros.com" target="_blank" rel="noopener noreferrer">
            writing-pros.com
          </a>{' '}
          is a lightweight Vite site for a writing consultancy I co-founded. While the frontend is simple, the business focuses on high-quality content delivery for technical and manufacturing clients. I handle site maintenance, branding, and content infrastructure.
        </p>
      </div>
    </div>
  );
}