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

const CoverLetterFilterQuries = id => gql`
  {
    coverletters(id: ${id}) {
      kind,
      content,
      id
    }
  }
`;

export default {};

export { CoverLetterQuries, CoverLetterFilterQuries };
