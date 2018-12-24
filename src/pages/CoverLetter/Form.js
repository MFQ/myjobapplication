// @flow

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

type Props = {
  onValidate: func,
  onSubmit: func,
  initialValues: object,
  submitLabel: string
};

const CoverLetterForm = ({
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
        <Field type="text" name="kind" />
        <ErrorMessage name="kind" component="div" />

        <Field type="text" name="content" />
        <ErrorMessage name="content" component="div" />

        <button type="submit" disabled={isSubmitting}>
          {submitLabel}
        </button>
      </Form>
    )}
  </Formik>
);

export default CoverLetterForm;
