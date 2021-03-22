import { ValidationError } from "yup"

interface Errors {
  [key: string]: string
}

export default function getValidationErrors(yupError: ValidationError)
  : Errors {
  const validationErrors: Errors = {};

  yupError.inner.forEach(error => {
    validationErrors[error.path || ''] = error.message;
  });

  return validationErrors;
}