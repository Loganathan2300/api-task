import React, { useState } from "react";
import { Formik, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import { CONSTANT } from "../constant";

const Forms = ({value, onclick, onclick1 }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z0-9\s]*$/, "Name can only contain letters, numbers, and spaces")
      .required("Name is required"),
    email: Yup.string()
      .matches(/@(gmail\.com|outlook\.com)$/, "Invalid email host")
      .required("Email is required"),
      gender: Yup.string().required("Gender is required").matches(/^(female|male)$/, "Gender must be either 'female' or 'male'"),
      status: Yup.string().required("Status is required").matches(/^(active|inactive)$/, "Status must be either 'active' or 'inactive'"),
  });
  const [initialValues] = useState({
         name:value?value.name:"",
         email:value?value.email: "",
         gender:value?value.gender: "",
         status:value?value.status: "",
       });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onclick1}
    >
      {({ isSubmitting,errors,values,handleChange}) => (
        <Form disabled={isSubmitting}>
          {CONSTANT.USER_INPUT_VALUE.map((item, i) => (
            <div key={i} className='mb-3'>
              <InputField
                type={item.type}
                onChange={handleChange}
                value={values[item.name]}
                name={item.name}
                className='px-3 py-1 w-100'
              />
              {errors &&<p>{errors[item.name]}</p>}
            </div>
          ))}
          <div className=''>
            <button type="submit" disabled={isSubmitting} onClick={onclick1}>Submit</button>
            <button type="button" onClick={onclick}>Clear</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Forms;

// const Forms = ({ onChange, value, onclick, onclick1 }) => {
//   // const Forms = ({ onClick, onClick1 }) => {
//     const validationSchema = Yup.object().shape({
//       name: Yup.string()
//         .required("Name is required")
//         .matches(
//           /^[a-zA-Z0-9\s]*$/,
//           "Name can only contain letters, numbers, and spaces"
//         ),
//       email: Yup.string()
//         .required("Email is required")
//         .matches(/@(gmail\.com|outlook\.com)$/, "Invalid email host"),
//       gender: Yup.string().required("Gender is required"),
//       status: Yup.string().required("Status is required"),
//     });
//     const initialValues = {
//       name: "",
//       email: "",
//       gender: "",
//       status: "",
//     };
  
//     const handleSubmit = async (values, { setSubmitting }) => {
//       try {
//         // Perform API call to post form data
//         const response = await fetch("your-api-endpoint", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         });
  
//         // Check if the API call was successful
//         if (response.ok) {
//           console.log("Form submitted successfully:", values);
//           // Optionally, you can reset the form here
//           // formik.resetForm();
//           onClick1(); // This can be your success callback
//         } else {
//           throw new Error("Failed to submit form");
//         }
//       } catch (error) {
//         console.error("Error occurred:", error);
//       } finally {
//         setSubmitting(false); // Reset submitting state
//       }
//     };
  
//     const formik = useFormik({
//       initialValues,
//       validationSchema,
//       onSubmit: handleSubmit,
//     });
//     return (
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           id="name"
//           type="text"
//           name="name"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.name}
//         />
//         {formik.errors.name && formik.touched.name ? (
//           <p>{formik.errors.name}</p>
//         ) : (
//           ""
//         )}
//         <input
//           id="email"
//           type="text"
//           name="email"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//         />
//         {formik.errors.email && formik.touched.email ? (
//           <p>{formik.errors.email}</p>
//         ) : (
//           ""
//         )}
//         <input
//           id="gender"
//           type="text"
//           name="gender"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.gender}
//         />
//         {formik.errors.gender && formik.touched.gender ? (
//           <p>{formik.errors.gender}</p>
//         ) : (
//           ""
//         )}
//         <input
//           id="status"
//           type="text"
//           name="status"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.status}
//         />
//         {formik.errors.status && formik.touched.status ? (
//           <p>{formik.errors.status}</p>
//         ) : (
//           ""
//         )}
//         <button type="button" onClick={onClick}>
//           clear
//         </button>
//         <button type="submit" disabled={formik.isSubmitting}>
//           Submit
//         </button>
//       </form>
//     );
//   };

// export default Forms;
