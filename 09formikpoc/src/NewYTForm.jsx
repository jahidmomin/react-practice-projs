import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Required !"),
  email: Yup.string().email("Invalid Email Format !").required("Required !"),
  channel: Yup.string().required("Required !"),
});

const handleSubmit = (v) => {
  console.log("====================================");
  console.log(v);
  console.log("====================================");
};

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

function NewYTForm() {
  return (
    <Formik
      className="container"
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="channel" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default NewYTForm;
