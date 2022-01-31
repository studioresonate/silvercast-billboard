import { useState, useEffect } from "react";
import styled from "styled-components";

import Scores from "./components/Score";
import query from "./components/Query";

const Panels = styled.div`
  display: flex;
  height: 341px;
  section {
    padding: 10px;
    position: relative;
  }
`;

// Panel 1

const Panel1 = styled.section`
  width: 472px;
  .supportingImage {
    height: 100px;
    object-fit: fill;
  }
`;

const Panel1Headline = styled.h2`
  font-size: 1.6rem;
`;

const Panel1Subheadline = styled.h3`
  font-size: 1.1rem;
`;

// Panel 2

const Panel2 = styled.section`
  width: 800px;
  .supportingImage {
    height: 100px;
    object-fit: fill;
  }
`;

const Panel2Headline = styled.h2`
  font-size: 1.6rem;
`;

const Panel2Subheadline = styled.h3`
  font-size: 1.1rem;
`;

// Panel 3

const Panel3 = styled.section`
  width: 848px;
  .supportingImage {
    height: 100px;
    object-fit: fill;
  }
`;

const Panel3Headline = styled.h2`
  font-size: 1.6rem;
`;

const Panel3Subheadline = styled.h3`
  font-size: 1.1rem;
`;

// Panel 4

const Panel4 = styled.section`
  width: 392px;
  .supportingImage {
    height: 100px;
    object-fit: fill;
  }
`;

const Panel4Headline = styled.h2`
  font-size: 1.6rem;
`;

const Panel4Subheadline = styled.h4`
  font-size: 1.1rem;
`;

function App() {
  const [billboard, setBillboard] = useState(null);

  useEffect(() => {
    window
      // Put keys into an .env!!!
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${process.env.REACT_APP_CONTENT_DELIVERY}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setBillboard(data.billboard);
      });
  }, []);

  if (!billboard) {
    return "Loading...";
  }

  return (
    <div className="App">
      <Panels id="panels">
        {/* panel 1 */}

        <Panel1 id="panel1" className={billboard.panel1.theme}>
          <p className="panelNumber">Panel one</p>

          {billboard.panel1.supportingImage !== null && (
            <img
              src={billboard.panel1.supportingImage.url}
              alt={billboard.panel1.supportingImage.title}
              className="supportingImage"
            />
          )}

          {billboard.panel1.headline !== null && (
            <Panel1Headline>{billboard.panel1.headline}</Panel1Headline>
          )}

          {billboard.panel1.subHeadline !== null && (
            <Panel1Subheadline>
              {billboard.panel1.subHeadline}
            </Panel1Subheadline>
          )}

          {billboard.panel1.backgroundImage !== null && (
            <img
              src={billboard.panel1.backgroundImage.url}
              alt={billboard.panel1.backgroundImage.title}
              className="sectionBackground"
            />
          )}
        </Panel1>
        {/* panel 2 */}
        <Panel2 id="panel2" className={billboard.panel2.theme}>
          <p className="panelNumber">Panel two</p>

          {billboard.panel2.supportingImage !== null && (
            <img
              src={billboard.panel2.supportingImage.url}
              alt={billboard.panel2.supportingImage.title}
              className="supportingImage"
            />
          )}

          {billboard.panel2.headline !== null && (
            <Panel2Headline>{billboard.panel2.headline}</Panel2Headline>
          )}

          {billboard.panel2.subHeadline !== null && (
            <Panel2Subheadline>
              {billboard.panel2.subHeadline}
            </Panel2Subheadline>
          )}

          {billboard.panel2.backgroundImage !== null && (
            <img
              src={billboard.panel2.backgroundImage.url}
              alt={billboard.panel2.backgroundImage.title}
              className="sectionBackground"
            />
          )}
        </Panel2>
        {/* panel 3 */}
        <Panel3 id="panel3" className={billboard.panel3.theme}>
          <p className="panelNumber">Panel three</p>

          {billboard.panel3.supportingImage !== null && (
            <img
              src={billboard.panel3.supportingImage.url}
              alt={billboard.panel3.supportingImage.title}
              className="supportingImage"
            />
          )}
          {billboard.panel3.headline !== null && (
            <Panel3Headline>{billboard.panel3.headline}</Panel3Headline>
          )}
          {billboard.panel3.subHeadline !== null && (
            <Panel3Subheadline>
              {billboard.panel3.subHeadline}
            </Panel3Subheadline>
          )}
          {billboard.panel3.backgroundImage !== null && (
            <img
              src={billboard.panel3.backgroundImage.url}
              alt={billboard.panel3.backgroundImage.title}
              className="sectionBackground"
            />
          )}
          {/* load in scores */}

          <Scores show={billboard.showScores} />
        </Panel3>
        {/* panel 4 */}
        <Panel4
          id="panel4"
          className={billboard.panel4.theme}
          // style={{
          //   backgroundImage: `url(${billboard.panel4.backgroundImage.url})`,
          // }}
        >
          <p className="panelNumber">Panel four</p>

          {billboard.panel4.supportingImage !== null && (
            <img
              src={billboard.panel4.supportingImage.url}
              alt={billboard.panel4.supportingImage.title}
              className="supportingImage"
            />
          )}

          {billboard.panel4.headline !== null && (
            <Panel4Headline>{billboard.panel4.headline}</Panel4Headline>
          )}

          {billboard.panel4.subHeadline !== null && (
            <Panel4Subheadline>
              {billboard.panel4.subHeadline}
            </Panel4Subheadline>
          )}

          {billboard.panel4.backgroundImage !== null && (
            <img
              src={billboard.panel4.backgroundImage.url}
              alt={billboard.panel4.backgroundImage.title}
              className="sectionBackground"
            />
          )}
        </Panel4>
      </Panels>
    </div>
  );
}

export default App;
