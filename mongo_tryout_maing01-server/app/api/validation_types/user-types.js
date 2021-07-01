/* eslint-disable */

const createUserDtoInType = shape({
  code: code().isRequired(),
  name: string(1, 255).isRequired(),
  gender: oneOf(["W", "M"]).isRequired(),
  age: number().isRequired(),
  someKey: any()
});
