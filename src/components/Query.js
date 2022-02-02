const query = `
{
  billboard(id: "6ZtluvEWIUjOrihD9rO3kE") {
    panelSelection {
      theme
      showScores
      panel1Animation
      panel1Headline
      panel1SubHeadline
      panel2Animation
      panel2Headline
      panel2SubHeadline
      panel3Animation
      panel3Headline
      panel3SubHeadline
      billboardBackgroundImage {
        title
        url
        width
        height
      }
      backgroundAnimation
    }
  }
}
`;

export default query;
