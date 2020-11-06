export default function validateEditProfile(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Username Required.";
  }

  if (!values.email) {
    errors.email = "Email Required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your Email is invalid.";
  }

  if (!values.currentPassword) {
    errors.currentPassword = "Your Current Password is Required.";
  } else if (values.currentPassword.length < 6) {
    errors.currentPassword =
      "Your Current Password must be alteat 6 characters";
  }

  if (values.newPassword.length < 6) {
    errors.password = "Your New Password must be atleast 6 characters.";
  }

  return errors;
}
