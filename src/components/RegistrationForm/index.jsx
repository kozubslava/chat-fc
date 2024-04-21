import { Form, Formik, Field, ErrorMessage } from "formik"
// import React from "react";
import { USER_REGISTRATION_SCHEMA } from "../../utils/validation";
import styles from "./RegistrationForm.module.scss"


  const initialValues = {
    imgSrc: '',
    firstName: '',
    lastName: '',
    email: '',
    isMale: true,
    password: '',
    confirm_password: ""
    
  };
  
  function RegistrationForm(props) {
    function handleSubmit(values, actions) {
      console.log(values);
      actions.resetForm();
      
    }

  return(
  <Formik
  initialValues={initialValues}
      validationSchema={USER_REGISTRATION_SCHEMA}
      onSubmit={handleSubmit}>
    <Form className={styles.form}> 
      <div >
        <Field type="text" name="firstName" placeholder="first name" className = {styles.imput}/>
        <ErrorMessage name="firstName" component={ErrorDetail}  className={styles.error} />
      </div>
      <div>
        <Field type="text" name="lastName" placeholder="last name" className = {styles.imput} />
        <ErrorMessage name="lastName" component={ErrorDetail} className={styles.error} />
      </div>
      
      <div>
        <Field type="email" name="email"  label='email' placeholder="email" className = {styles.imput}/>
        <ErrorMessage name="email" component={ErrorDetail} className={styles.error} />
      </div>
      <div>
        <Field type="password" name="password" placeholder="password" className = {styles.imput} />
        <ErrorMessage name="password" component={ErrorDetail} className={styles.error}
          />
      </div>
      <div>
          <Field type="password" name="confirm_password" placeholder="confirm passwordord" className = {styles.imput} />
          <ErrorMessage name="confirm_password" component={ErrorDetail}className={styles.error}
          />
          
      </div>
      <div className = {styles.submit}>
        <div className = {styles.imput}>
          <label htmlFor="isMale" >Is Male:</label>
          <Field type="checkbox" name="isMale" />
        </div>
        <button type="submit">Submit</button>
      </div>
      
    </Form>
  </Formik>
  )
}

function ErrorDetail({ children, ...rest }) {
  return <div {...rest}>Error: {children}</div>;
}

export default RegistrationForm;