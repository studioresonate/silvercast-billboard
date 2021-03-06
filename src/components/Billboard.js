import React, { useState, useEffect } from "react";

import "../css/animation.css";
import styled from "styled-components";

import Scores from "../components/Score";
import query from "../components/Query";

const Panels = styled.div`
  display: flex;
  width: 2512px;
  height: 341px;
  position: relative;
  section {
    padding: 10px;
    position: relative;
  }
`;

// Panel 1

const Panel1 = styled.section`
  width: 472px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  .supportingImage {
    height: 100px;
    object-fit: fill;
  }
  .copy {
    padding: 2rem 4rem;
  }
`;

const Panel1Headline = styled.h2`
  font-size: 3.2rem;
`;

const Panel1Subheadline = styled.h3`
  font-size: 2.1rem;
`;

// Panel 2

const Panel2 = styled.section`
  width: 1648px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  .copy {
    padding: 0 22rem 0 4rem;
  }
`;

const Panel2Headline = styled.h2`
  font-size: 3.6rem;
`;

const Panel2Subheadline = styled.h3`
  font-size: 2.4rem;
`;

// Panel 3

const Panel3 = styled.section`
  width: 392px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  .copy {
    padding: 0 2rem;
  }
  .supportingImage {
    height: 100px;
    object-fit: fill;
  }
`;

const Panel3Headline = styled.h2`
  font-size: 2.6rem;
`;

const Panel3Subheadline = styled.h3`
  font-size: 1.8rem;
`;

export default function Billboard() {
  const [billboard, setBillboard] = useState(null);

  useEffect(() => {
    // Need to fix the sloppiness
    // Setting initial state, then reloading every x seconds... :(
    fetch(
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

    const interval = setInterval(() => {
      fetch(
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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!billboard) {
    return "Loading...";
  }

  // remove space from animation dropdown value
  const animeType1 = `${billboard.panelSelection.panel1Animation}`;
  const animeValue1 = animeType1.replace(/ /g, "");
  console.log(animeValue1);

  const animeType2 = `${billboard.panelSelection.panel2Animation}`;
  const animeValue2 = animeType2.replace(/ /g, "");
  console.log(animeValue2);

  const animeType3 = `${billboard.panelSelection.panel3Animation}`;
  const animeValue3 = animeType3.replace(/ /g, "");
  console.log(animeValue3);

  const bgAnimeType = `${billboard.panelSelection.backgroundAnimation}`;
  const bgAnimeValue = bgAnimeType.replace(/ /g, "");
  console.log(bgAnimeValue);

  return (
    <div>
      <Panels id="panels" className={`${billboard.panelSelection.theme}`}>
        {/* Panel 1 */}
        <Panel1 id="panel1">
          <p className="panelNumber">Panel one</p>
          <div className={`copy ${animeValue1}`}>
            {billboard.panelSelection.panel1Headline !== null && (
              <Panel1Headline className={animeValue1} style={{ opacity: 0 }}>
                {billboard.panelSelection.panel1Headline}
              </Panel1Headline>
            )}

            {billboard.panelSelection.panel2SubHeadline !== null && (
              <Panel1Subheadline className={animeValue1} style={{ opacity: 0 }}>
                {billboard.panelSelection.panel1SubHeadline}
              </Panel1Subheadline>
            )}
          </div>
        </Panel1>

        {/* Panel 2 */}
        <Panel2 id="panel2">
          <p className="panelNumber">Panel two</p>
          <div className={`copy ${animeValue2}`}>
            {billboard.panelSelection.panel2Headline !== null && (
              <Panel2Headline className={animeValue2} style={{ opacity: 0 }}>
                {billboard.panelSelection.panel2Headline}
              </Panel2Headline>
            )}

            {billboard.panelSelection.panel2SubHeadline !== null && (
              <Panel2Subheadline className={animeValue2} style={{ opacity: 0 }}>
                {billboard.panelSelection.panel2SubHeadline}
              </Panel2Subheadline>
            )}
          </div>

          <Scores show={billboard.panelSelection.showScores} />
        </Panel2>

        {/* Panel 3 */}
        <Panel3 id="panel3">
          <p className="panelNumber">Panel three</p>
          <div className={`copy ${animeValue3}`}>
            {billboard.panelSelection.panel3Headline !== null && (
              <Panel3Headline className={animeValue3} style={{ opacity: 0 }}>
                {billboard.panelSelection.panel3Headline}
              </Panel3Headline>
            )}

            {billboard.panelSelection.panel3SubHeadline !== null && (
              <Panel3Subheadline className={animeValue3} style={{ opacity: 0 }}>
                {billboard.panelSelection.panel3SubHeadline}
              </Panel3Subheadline>
            )}
          </div>
        </Panel3>

        {billboard.panelSelection.billboardBackgroundImage !== null && (
          <img
            src={billboard.panelSelection.billboardBackgroundImage.url}
            alt={billboard.panelSelection.billboardBackgroundImage.title}
            className={`sectionBackground ${bgAnimeValue}`}
          />
        )}
      </Panels>
    </div>
  );
}
