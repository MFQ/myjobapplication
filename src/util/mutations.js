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

const CreateJobApplication = gql`
  mutation CreateJobApplications(
    $jobDescription: String
    $company: String
    $country: String
    $status: String
    $appliedDate: String
    $coverLetter: String
    $source: String
    $response: String
    $timeTookToApply: String
    $notes: String
  ) {
    createJobApplications(
      jobDescription: $jobDescription
      company: $company
      country: $country
      status: $status
      appliedDate: $appliedDate
      coverLetter: $coverLetter
      source: $source
      response: $response
      timeTookToApply: $timeTookToApply
      notes: $notes
    ) {
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

const UpdateJobApplication = gql`
  mutation UpdateJobApplication(
    $id: Int
    $jobDescription: String
    $company: String
    $country: String
    $status: String
    $appliedDate: String
    $coverLetter: String
    $source: String
    $response: String
    $timeTookToApply: String
    $notes: String
  ) {
    updateJobApplication(
      id: $id
      jobDescription: $jobDescription
      company: $company
      country: $country
      status: $status
      appliedDate: $appliedDate
      coverLetter: $coverLetter
      source: $source
      response: $response
      timeTookToApply: $timeTookToApply
      notes: $notes
    )
  }
`;

const DeleteJobApplication = gql`
  mutation deleteJobApplication($id: Int) {
    deleteJobApplication(id: $id)
  }
`;

export default {};

export {
  CreateCoverLetter,
  DeleteCoverLetter,
  UpdateCoverLetter,
  CreateJobApplication,
  UpdateJobApplication,
  DeleteJobApplication
};
