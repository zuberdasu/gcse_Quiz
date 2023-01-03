import { jValidate } from "./joi";
import { onboarding, registration } from "./joiSchemas";

export const validate = (type, payload) => {
  switch (type) {
    case 1: //onboarding validation
      return jValidate(onboarding, payload);

    case 5:
      //registration validation
      return jValidate(registration, payload);

    default:
      console.log("Invalid type sent in!");
      break;
  }
};
