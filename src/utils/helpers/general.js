export const showErrors = (errors) => {
  let errorMessage = null;

  console.log(errors);

  if (Object.keys(errors).length > 1) {
    errorMessage = "Пожалуйста заполните все поля!";
  } else if (errors?.name) {
    errorMessage = errors?.name;
  } else if (errors?.age) {
    errorMessage = errors?.age;
  } else if (errors?.email) {
    errorMessage = errors?.email;
  } else if (errors?.password) {
    errorMessage = errors?.password;
  }

  return errorMessage;
};
