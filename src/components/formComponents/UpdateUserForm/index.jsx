import { Form,Formik, Field, ErrorMessage } from 'formik';
import React, { useContext } from 'react';
import styles from "./UpdateUserForm.module.scss"
import { USER_UPDATE_SCHEMA } from '../../../utils/validation';
import UserContext from '../../../contexts/userContext';

const initialValues = {
  imgSrc: '',
  firstName: '',
  lastName: '',
  email: '',
  isMale: true,
  password: '',
  confirm_password: ""
  
};

const UpdateUserForm = (props) => {

  const[user,setUser] = useContext(UserContext);

  const handleSubmit = (values, formikBag) => {
    const updatedUserFields = {};

    Object.entries(values).forEach(([key, value]) => {
      if (value !== '' && key !== 'gender') {
        updatedUserFields[key] = value;
      } else if (value !== '' && key === 'gender') {
        
      }
    });

    console.log(updatedUserFields);

    setUser({
      ...user,
      ...updatedUserFields
    });
  };
  return (
    <Formik
    initialValues={initialValues}
      validationSchema={USER_UPDATE_SCHEMA}
      onSubmit={handleSubmit}>
    <Form className={styles.form}> 
      <div >
        <Field type="text" name="firstName" placeholder="first name" className={styles.imput}/>
        {/* <ErrorMessage name="firstName" component={ErrorDetail}  className={styles.error} /> */}
      </div>
      <div>
        <Field type="text" name="lastName" placeholder="last name" className={styles.imput} />
        {/* <ErrorMessage name="lastName" component={ErrorDetail} className={styles.error} /> */}
      </div>
      
      <div>
        <Field type="email" name="email"  label='email' placeholder="email" className={styles.imput}/>
        {/* <ErrorMessage name="email" component={ErrorDetail} className={styles.error} /> */}
      </div>
      <div>
        <Field type="password" name="password" placeholder="password" className={styles.imput} />
        {/* <ErrorMessage name="password" component={ErrorDetail} className={styles.error}
          /> */}
      </div>
      <div>
          <Field type="password" name="confirm_password" placeholder="confirm passwordord" className={styles.imput} />
          {/* <ErrorMessage name="confirm_password" component={ErrorDetail}className={styles.error}
          /> */}
          
      </div>
      <div className={styles.submit}>
        <div className={styles.imput}>
          <label htmlFor="isMale" >Is Male:</label>
          <Field type="checkbox" name="isMale" />
        </div>
        <button type="submit">Submit</button>
        <button type='reset' >
            Reset fields
          </button>
      </div>
      
    </Form>
    </Formik>
  );
}

export default UpdateUserForm;
