import gql from "graphql-tag";

const CoverLetterQuries = gql`
  {
    coverletters {
      kind
      content
      id
    }
  }
`;

export default {};

export { CoverLetterQuries };
