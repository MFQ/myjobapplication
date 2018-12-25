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

const JobApplicationQuries = gql`
  {
    jobApplications {
      company
      jobDescription
      status
      coverLetter
      appliedDate
      userId
      id
      source
      response
      timeTookToApply
      country
      notes
    }
  }
`;

const JobApplicationFilterQuries = id => gql`
  {
    jobApplications(id: ${id}) {
      company
      jobDescription
      status
      coverLetter
      appliedDate
      userId
      id
      source
      response
      timeTookToApply
      country
      notes
    }
  }
`;

export default {};

export {
  CoverLetterQuries,
  CoverLetterFilterQuries,
  JobApplicationQuries,
  JobApplicationFilterQuries
};
