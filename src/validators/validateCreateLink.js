export default function validateCreateLink(values) {
  let errors = {};

  if (!values.description) {
    errors.description = "A Description is Required.";
  } else if (values.description.length < 10) {
    errors.description = "The Description must be atleast 10 characters";
  }

  if (!values.url) {
    errors.url = "A URL is Required.";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "The URL must be Valid.";
  }

  return errors;
}
