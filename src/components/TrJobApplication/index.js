// @flow

import React from "react";
import { tr, td, Button } from "react-materialize";

type Props = {
  company: string,
  jobDescription: string,
  status: string,
  coverLetter: string,
  appliedDate: string,
  id: string,
  source: string,
  response: string,
  timeTookToApply: string,
  country: string
};

const TrJobApplication = ({
  company,
  jobDescription,
  status,
  coverLetter,
  appliedDate,
  id,
  source,
  response,
  timeTookToApply,
  country
}: Props) => (
  <tr key={`${id}trs`}>
    <td>{id}</td>
    <td>{company}</td>
    <td>{jobDescription}</td>
    <td>{status}</td>
    <td>{coverLetter}</td>
    <td>{appliedDate}</td>
    <td>{source}</td>
    <td>{response}</td>
    <td>{timeTookToApply}</td>
    <td>{country}</td>
    <td>
      <Button
        floating
        className="blue"
        icon="details"
        node="a"
        href={`/jobApplications/${id}`}
      />
      <Button
        floating
        className="green"
        node="a"
        icon="create"
        href={`/jobApplications/${id}/edit`}
      />
      <Button floating className="red" icon="delete" href="/coverletters/" />
    </td>
  </tr>
);

export default TrJobApplication;
