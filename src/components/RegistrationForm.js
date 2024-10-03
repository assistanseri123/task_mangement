// src/components/RegistrationForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registrationSchema } from '../validationSchemas';

const RegistrationForm = () => {
  const handleSubmit = (values) => {
    // Handle registration logic here
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={registrationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
