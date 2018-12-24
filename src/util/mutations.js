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

const DeleteCoverLetter = gql`
  mutation deleteCoverLetter($id: Int) {
    deleteCoverLetter(id: $id)
  }
`;

export default {};

export { CreateCoverLetter, DeleteCoverLetter };
