const CV = () => {
  return (
    <>
      <div className="home container w-50 p-3">
        <div className="container-fluid">
          <h1>Coding</h1>
          <h3>Riot Org Teams and Products Data Pipeline</h3>
          <p>
            <b>Source:</b>{" "}
            <a
              href="https://github.com/platonicLiquid/rg-etl-sample"
              target="_blank"
            >
              rg-etl-sample
            </a>
          </p>
          <p>
            <b>Project Description:</b>
          </p>
          <p>
            While at Riot Games, I proposed, designed, and implemented a Python
            data pipeline to scrape Riot's teams and products data and load it
            into corresponding Notion databases.
          </p>
          <h3>League Studio Confluence to Notion Migration</h3>
          <p>
            <b>Project Description:</b>
          </p>
          <p>
            During my tenure at Riot Games, we switched from Confluence to{" "}
            <a href="https://notion.so" target="_blank">
              Notion
            </a>{" "}
            for documentation. For the business units I supported in League
            Studio, I designed and implemented a strategy to migrate Confluence
            docs into Notion. Due to problems with Notion's importer tools and
            reporting, I wrote extensive python scripts to verify that pages
            were migrated successfully; provide reporting for known issues in
            migrating from Confluence to Notion; and update Confluence page
            headers to direct users to the new Notion pages.
          </p>
          <h3>Kaiser Permanente Data Dictionary Definitions Pipeline</h3>
          <p>
            <b>Source:</b>{" "}
            <a
              href="https://github.com/platonicLiquid/kp-webscrape-sample/blob/main/webscrape_example.py"
              target="_blank"
            >
              kp-webscrape-sample
            </a>
          </p>
          <p>
            <b>Project Description:</b>
          </p>
          <p>
            While at Kaiser Permanente, I proposed, designed, and implemented a
            Python data pipeline to scrape data dictionary definitions from
            Confluence and load them into a SQL database. These definitions were
            used in tooltips for the dashboards our finance team created.
          </p>
          <h3>matthew.yocum.dev React Website</h3>
          <p>
            <b>Source:</b>{" "}
            <a
              href="https://github.com/platonicLiquid/personal-website"
              target="_blank"
            >
              matthew.yocum.dev source
            </a>
          </p>
          <p>
            <b>Project Description:</b>
          </p>
          <p>
            I created this website to learn React. Major goals were to learn the
            framework generally, implement a dark mode toggle, implement
            elements that respond to current theme, and desgin and implement
            some basic animations.
          </p>
          <h1>Technical Writing</h1>
        </div>
      </div>
    </>
  );
};

export default CV;
