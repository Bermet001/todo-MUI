import * as Yup from "yup";

const emailRegex = "^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$";

const validationSchemaForm = Yup.object().shape({
  name: Yup.string().required("Поле name обязятельное!"),
  age: Yup.number()
    .min(18, "Возраст должен быть больше 18")
    .required("Поле age обязятельное!"),
  email: Yup.string()
    .email()
    .matches(
      emailRegex,
      "Адрес электронной почты должен быть в формате ...@gmail.com"
    )
    .required("Поле email обязятельное!"),
  password: Yup.string()
    .min(6, "Password должен быть больше 6")
    .max(26, "Password должен быть меньше 26")
    .required("Поле password обязятельное!"),
});

export { validationSchemaForm };
