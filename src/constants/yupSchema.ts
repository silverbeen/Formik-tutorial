import * as Yup from "yup";

export const YUP_SCHEMA = {
  REQUIRED: Yup.string().required(),
  NOT_REQUIRED: Yup.string().notRequired(),
  USER_NAME: Yup.string()
    .min(2, "2글자 이상 입력해주세요")
    .max(10, "10글자 이하로 입력해주세요")
    .required(),
  PASSWORD: Yup.string().required(),
  CHECK_BOX: Yup.array().min(1, "최소 한개의 필드를 선택해주세요").required(),
  EMAIL: Yup.string().email().required(),
};

export default YUP_SCHEMA;
