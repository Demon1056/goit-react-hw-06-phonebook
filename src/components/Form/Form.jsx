import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormStyles, FieldStyles, ErrorMessageStyled } from './Form.styled';
const phoneRegExp =
  /^\(?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const nameValid = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi;
const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameValid, 'Name can only contain Latin letters.')
    .required('Sorry, but Name is a required field'),
  number: yup
    .string()
    .length(9, ' Sorry, but the phone number should consist of 9 characters')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Sorry, but Number is a required field'),
});
export const ContactForm = ({ showName }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={showName}
      validationSchema={schema}
    >
      <FormStyles>
        <label>
          Name
          <FieldStyles type="text" name="name" />
        </label>{' '}
        <ErrorMessageStyled name="name" component="span" />
        <label>
          Number
          <FieldStyles type="tel" name="number" />
        </label>
        <ErrorMessageStyled name="number" component="span" />
        <button type="submit">Add contact</button>
      </FormStyles>
    </Formik>
  );
};
ContactForm.propTypes = {
  showName: PropTypes.func.isRequired,
};
