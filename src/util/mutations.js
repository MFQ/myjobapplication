import gql from "graphql-tag";

const CreateCoverLetter = gql`
  mutation createCoverLetter($kind: String, $content: String) {
    createCoverLetter(kind: $kind, content: $content) {
      kind
      id
      content
    }
  }
`;

export default {};

export { CreateCoverLetter };
