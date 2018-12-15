import React, { Component } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

class Login extends Component {
  render() {
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
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:3000/login", values).then(res => {
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

            <Field type="password" name="password" />

            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default Login;
