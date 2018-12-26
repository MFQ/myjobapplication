// @flow

import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

type Props = {
  onValidate: func,
  onSubmit: func,
  initialValues: object,
  submitLabel: string
};

const JobApplicationForm = ({
  initialValues,
  onValidate,
  onSubmit,
  submitLabel
}: Props) => (
  <Formik
    initialValues={initialValues}
    validate={onValidate}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type="text" name="company" />
        <ErrorMessage name="company" component="div" />

        <Field type="textarea" name="jobDescription" />
        <ErrorMessage name="jobDescription" component="div" />

        <Field type="text" name="status" />
        <ErrorMessage name="status" component="div" />

        <Field type="textarea" name="coverLetter" />
        <ErrorMessage name="coverLetter" component="div" />

        <Field type="text" name="appliedDate" />
        <ErrorMessage name="appliedDate" component="div" />

        <Field type="text" name="source" />
        <ErrorMessage name="source" component="div" />

        <Field type="textarea" name="response" />
        <ErrorMessage name="response" component="div" />

        <Field type="text" name="timeTookToApply" />
        <ErrorMessage name="timeTookToApply" component="div" />

        <Field type="text" name="country" />
        <ErrorMessage name="country" component="div" />

        <Field type="textarea" name="notes" />
        <ErrorMessage name="notes" component="div" />

        <button type="submit" disabled={isSubmitting}>
          {submitLabel}
        </button>
      </Form>
    )}
  </Formik>
);

export default JobApplicationForm;
