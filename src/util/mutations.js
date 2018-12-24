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

const UpdateCoverLetter = gql`
  mutation UpdateCoverLetter($id: Int, $kind: String, $content: String) {
    updateCoverLetter(id: $id, kind: $kind, content: $content)
  }
`;

export default {};

export { CreateCoverLetter, DeleteCoverLetter, UpdateCoverLetter };
