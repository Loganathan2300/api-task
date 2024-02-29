import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';
import { CONSTANT } from '../constant';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  status: Yup.string().required('Status is required'),
});

const Forms = ({ onChange, value,isSubmitting }) => {
  const initialValues = CONSTANT.INIT_INPUT_VALUE;

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log('Form submitted:', values);
    setSubmitting(false); 
  };
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form disabled={isSubmitting}>
          {CONSTANT.USER_INPUT_VALUE.map((item, i) => (
            <div key={i} className='mb-3'>
              <InputField
                type={item.type}
                onChange={onChange}
                value={value[item.name]}
                name={item.name}
                className='px-3 py-1 w-100'
              />
              <ErrorMessage name={item.name} component="div" className="error" />
            </div>
          ))}
          {/* <button type="submit" disabled={isSubmitting}>Submit</button> */}
        </Form>
      )}
    </Formik>
  );
};

export default Forms;
