import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';
import { CONSTANT } from '../constant';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  status: Yup.string().required('Status is required'),
});

const Forms = ({ onChange, value }) => {
  const initialValues = CONSTANT.INIT_INPUT_VALUE;

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log('Form submitted:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {CONSTANT.USER_INPUT_VALUE.map((item, i) => (
          <InputField
            key={i}
            type={item.type}
            onChange={onChange}
            value={value[item.name]}
            name={item.name}
            className='px-3 py-1 w-100'
          />
        ))}
        {/* <button type="submit">Submit</button> */}
      </Form>
    </Formik>
  );
};

export default Forms;




// import React from 'react'
// import { Form } from 'react-bootstrap'
// import InputField from './InputField'
// import {CONSTANT} from '../constant'
// const Forms = ({onChange,value}) => {
//   initialValues={CONSTANT}
//   return (

//     <Form>
//         {CONSTANT.USER_INPUT_VALUE.map((item,i)=>(
//             <InputField key={i} type={item.type} onChange={onChange} value={value[item.name]} name={item.name} className='px-2 py-1 mx-2 p-0 w-50'/>
//         ))}  
//     </Form>
//   )
// }
// export default Forms;