export default function Development() {
  return (
    <div className="text-component">
      <div className="project-section">
        <h4 className="first-element">Riot Org Data Pipeline</h4>
        <p className="source-link">
          <strong>Source:</strong>{' '}
          <a
            href="https://github.com/platonicLiquid/rg-etl-sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            rg-etl-sample GH Repo
          </a>
        </p>
        <p>
          I designed and deployed a Python-based ETL pipeline to harvest
          Riot&apos;s internal team and product data, automatically populating
          corresponding Notion databases to ensure organizational transparency.
        </p>
      </div>

      <div className="project-section">
        <h4>Confluence to Notion Migration (League Studio)</h4>
        <p>
          During a studio-wide shift in infrastructure, I developed the
          migration logic and Python tooling necessary to move documentation en
          masse. This included integrity verification, automated reporting, and
          the systematic redirection of legacy links to their new Notion
          counterparts.
        </p>
      </div>

      <div className="project-section">
        <h4>Kaiser Permanente Data Dictionary Pipeline</h4>
        <p className="source-link">
          <strong>Source:</strong>{' '}
          <a
            href="https://github.com/platonicLiquid/kp-webscrape-sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            kp-webscrape-sample GH Repo
          </a>
        </p>
        <p>
          To support financial dashboards, I engineered a pipeline that extracted
          data definitions from Confluence and loaded them into a SQL
          environment, enabling live, hover-over tooltips for end-users.
        </p>
      </div>

      <div className="project-section">
        <h4>Fantasy World Map App</h4>
        <p className="source-link">
          <strong>Status:</strong> In Progress
        </p>
        <p>
          A browser-based cartography tool built with Leaflet.js. It features a
          private authentication system and 2FA via Cloudflare, allowing users to
          annotate and store metadata for custom world maps.
        </p>
      </div>
    </div>
  );
}
