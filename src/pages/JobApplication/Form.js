// @flow

import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input } from "react-materialize";

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
        <Field type="text" placeholder="Company" name="company" />
        <ErrorMessage name="company" component="div" />

        <Field
          component="textarea"
          placeholder="Job Description"
          name="jobDescription"
        />
        <ErrorMessage name="jobDescription" component="div" />

        <Field type="text" placeholder="status" name="status" />
        <ErrorMessage name="status" component="div" />

        <Field
          component="textarea"
          placeholder="Cover Letter"
          name="coverLetter"
        />
        <ErrorMessage name="coverLetter" component="div" />

        <Field
          name="appliedDate"
          render={({ field, form: { isSubmitting, setFieldValue } }) => (
            <Input
              {...field}
              disabled={isSubmitting}
              name="on"
              type="date"
              placeholder="Applied Date"
              onChange={function(e, value) {
                setFieldValue("appliedDate", value);
              }}
            />
          )}
        />

        <ErrorMessage name="appliedDate" component="div" />

        <Field type="text" placeholder="Source" name="source" />
        <ErrorMessage name="source" component="div" />

        <Field component="textarea" placeholder="Response" name="response" />
        <ErrorMessage name="response" component="div" />

        <Field
          type="text"
          placeholder="Time Took to Apply for example 10.00"
          name="timeTookToApply"
        />
        <ErrorMessage name="timeTookToApply" component="div" />

        <Field type="text" placeholder="Country" name="country" />
        <ErrorMessage name="country" component="div" />

        <Field type="textarea" placeholder="Notes" name="notes" />
        <ErrorMessage name="notes" component="div" />

        <button type="submit" disabled={isSubmitting}>
          {submitLabel}
        </button>
      </Form>
    )}
  </Formik>
);

export default JobApplicationForm;
