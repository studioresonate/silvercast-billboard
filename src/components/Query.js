const query = `
{
  billboard(id: "5Bmsdd1UYUmDTvSQ2bGrHY"){
    instructions
    showScores
    panel1 {
   		__typename
      ... on Panel1BillboardMessaging {
        theme
        headline
        subHeadline
        supportingImage {
          url
          title
          fileName
          contentType
          width
          height
        }
        backgroundImage {
          url
          title
          fileName
          width
          height
        }
      }
      sys {
        id
        publishedAt
      }
    }
    panel2 {
   		__typename
      ... on Panel2BillboardMessaging {
        theme
        headline
        subHeadline
        supportingImage {
          url
          title
          fileName
          contentType
          width
          height
        }
        backgroundImage {
          url
          title
          fileName
          width
          height
        }
      }
      sys {
        id
        publishedAt
      }
    }
    panel3 {
   		__typename
      ... on Panel3BillboardMessaging {
        theme
        headline
        subHeadline
        supportingImage {
          url
          title
          fileName
          contentType
          width
          height
        }
        backgroundImage {
          url
          title
          fileName
          width
          height
        }
      }
      sys {
        id
        publishedAt
      }
    }
    panel4 {
   		__typename
      ... on Panel4BillboardMessaging {
        theme
        headline
        subHeadline
        supportingImage {
          url
          title
          fileName
          contentType
          width
          height
        }
        backgroundImage {
          url
          title
          fileName
          width
          height
        }
      }
      sys {
        id
        publishedAt
      }
    }
  }
}
`;

export default query;
