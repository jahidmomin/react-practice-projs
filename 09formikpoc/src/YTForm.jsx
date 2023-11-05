import React from "react";
import { useFormik } from "formik";
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

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = " Required";
  }
  if (!values.email) {
    errors.email = " Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.channel) {
    errors.channel = " Required";
  }

  return errors;
};

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

function YTForm() {
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    // validate,
    validationSchema
  });

  console.log("visited values", formik.touched);

  return (
    <div className="container">
      <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-danger">{formik.errors.name}</div>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="channel">Channel</label>
        <input
          type="channel"
          id="channel"
          name="channel"
          value={formik.values.channel}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.channel && formik.errors.channel ? (
          <div className="text-danger">{formik.errors.channel}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YTForm;
