import React, { Component } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

import AppContext from "../../util/AppContext";

class Register extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ hostname }) => {
          return (
            <Formik
              initialValues={{ email: "", password: "", username: "" }}
              validate={values => {
                let errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (values.password !== values.confirmPassword) {
                  errors.password = "Passport mis match";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                axios.post(`${hostname}/signup`, values).then(res => {
                  const { status, token } = res.data;
                  if (status === 200) {
                    window.location = "/";
                    return localStorage.setItem("token", token);
                  }

                  if (status === 403) {
                    alert(res.data.error);
                    setSubmitting(false);
                  }
                });
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />

                  <Field type="text" name="username" />
                  <ErrorMessage name="username" component="div" />

                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />

                  <Field type="password" name="confirmPassword" />
                  <ErrorMessage name="confirmPassword" component="div" />

                  <button type="submit" disabled={isSubmitting}>
                    Register
                  </button>
                </Form>
              )}
            </Formik>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Register;
