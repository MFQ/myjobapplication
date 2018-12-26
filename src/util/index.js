import { forEach } from "lodash";

const OnValidateErrors = values => {
  let errors = {};
  forEach(values, (value, key) => {
    if (value === "") {
      errors[key] = `${key} is required`;
    }
  });
  return errors;
};

export { OnValidateErrors };
