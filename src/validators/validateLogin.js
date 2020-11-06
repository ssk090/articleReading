export default function validateLogin(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email Required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your Email is invalid.";
  }

  if (!values.password) {
    errors.password = "A Password is Required.";
  } else if (values.password.length < 6) {
    errors.password = "Your Password must be alteat 6 characters";
  }

  return errors;
}
