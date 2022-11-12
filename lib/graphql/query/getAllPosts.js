import { gql } from "graphql-request";
import { hygraph } from "../index";

const query = gql`
  query getAllPosts {
    posts {
      id
      slug
      title
      excerpt
      coverImage {
        url
      }
      author {
        name
      }
      content {
        html
      }
    }
  }
`;

export default () => hygraph(query);
