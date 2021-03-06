import React from 'react';
import { Formik, Form } from 'formik';

import RegistrationField from '../RegistrationField';

const AppDetailsForm = ({ initialValues, validationSchema, onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, dirty, isValidating }) => (
          <Form className='form'>
            <div className='form__input'>
              <RegistrationField
                placeholder='App Name:'
                type='text'
                name='app'
              />
            </div>
            <div className='form__input'>
              <RegistrationField
                placeholder='Description:'
                as='textarea'
                name='description'
              />
            </div>
            <br></br>
            <div className=''>
              <RegistrationField
                name='terms'
                type='checkbox'
                fieldLabel='I agree to our Terms of Use and Privacy Policy by signing up'
              />
            </div>
            <div className='form__input'>
              <button
                className='button button--yellow'
                type='submit'
                disabled={isSubmitting || !isValid || isValidating || !dirty}
              >
                MAKE MY APP NOW
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AppDetailsForm;
