// @flow

import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Editor, EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

type Props = {
  onValidate: func,
  onSubmit: func,
  initialValues: object,
  submitLabel: string
};

class CoverLetterForm extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    // this.onChange = editorState => {
    //   console.log(editorState.getCurrentContent());
    //   debugger;
    //   return this.setState({ editorState });
    // };
    this.setEditor = editor => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  }

  componentDidMount() {
    this.focusEditor();
  }

  render() {
    const { initialValues, onValidate, onSubmit, submitLabel } = this.props;
    const setState = this.setState.bind(this);
    return (
      <Formik
        initialValues={initialValues}
        validate={onValidate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" placeholder="Kind" label="Kind" name="kind" />
            <ErrorMessage name="kind" component="div" />

            <Field
              name="content"
              render={({ field, form: { isSubmitting, setFieldValue } }) => (
                <Editor
                  disabled={isSubmitting}
                  ref={this.setEditor}
                  editorState={this.state.editorState}
                  onChange={editorState => {
                    console.log(stateToHTML(editorState.getCurrentContent()));
                    setFieldValue(
                      "content",
                      editorState.getCurrentContent().getPlainText()
                    );
                    return setState({ editorState });
                  }}
                />
              )}
            />
            <ErrorMessage name="content" component="div" />

            <button type="submit" disabled={isSubmitting}>
              {submitLabel}
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default CoverLetterForm;
