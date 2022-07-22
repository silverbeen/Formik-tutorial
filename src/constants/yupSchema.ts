import * as Yup from "yup";

export const YUP_SCHEMA = {
  REQUIRED: Yup.string().required(),
  NOT_REQUIRED: Yup.string().notRequired(),
  USER_NAME: Yup.string()
    .matches(/^[A-Za-z0-9]*$/, {
      message: "profile.username_format_validation_message",
    })
    .min(6, "register.userinfo_username_format_validation_message")
    .max(25, "register.userinfo_username_format_validation_message")
    .required(),
  PASSWORD: Yup.string()
    .matches(/^[a-zA-Z\d]{8,25}$/, {
      message: "login.userinfo_password_format_validation_message",
    })
    .required(),

  EMAIL: Yup.string().email().required(),
};

export default YUP_SCHEMA;
