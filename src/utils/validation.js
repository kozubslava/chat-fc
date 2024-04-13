import * as yup from "yup";

export const registrationSchema = yup.object({
  imgSrc: yup.string().url(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  isMale : yup.boolean(),
  password: yup.string().required().min(8).max(16),
  confirm_password: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords must match')
});