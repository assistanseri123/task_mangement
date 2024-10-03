
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../validationSchemas';

const LoginForm = () => {
  const handleSubmit = (values) => {
    // Handle login logic here
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
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
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
