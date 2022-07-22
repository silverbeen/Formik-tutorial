import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useState } from "react";

const UseFormikExam = () => {
  const [isButton, setIsButton] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(4, "4글자 이상 입력해주세요").required(),
      lastName: Yup.string().min(4, "4글자 이상 입력해주세요").required(),
      //   email: Yup.string().email("이메일 형식을 맞춰주세요").required(),
    }),
    initialTouched: { firstName: true },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      {/* First Name */}
      <InputBox>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="firstName"
          {...formik.getFieldProps("firstName")}
        />
        {/* 유효성 메세지 */}
        {formik.touched.firstName && formik.errors.firstName ? (
          <ErrorText>{formik.errors.firstName}</ErrorText>
        ) : null}
      </InputBox>

      {/* last Name */}
      <InputBox>
        <label htmlFor="lastName">last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="lastName"
          {...formik.getFieldProps("lastName")}
        />
        {/* 유효성 메세지 */}
        {formik.touched.lastName && formik.errors.lastName ? (
          <ErrorText>{formik.errors.lastName}</ErrorText>
        ) : null}
      </InputBox>

      {/*  email */}
      <InputBox>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          //   name="email"
          //   onChange={formik.handleChange}
          //   value={formik.values.email}
          placeholder="email"
          required
          //   {...formik.getFieldProps("email")}
        ></input>
        {/* 유효성 메세지 */}
        {formik.touched.email && formik.errors.email ? (
          <ErrorText>{formik.errors.email}</ErrorText>
        ) : null}
      </InputBox>
      <button type="submit">Submit</button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;

  & label {
    margin: 10px 0;
  }

  & input {
    padding: 10px;
    border: 1px solid #bfbfbf;
    border-radius: 10px;
  }

  & button {
    margin-top: 30px;
    border: none;
    padding: 10px;
    border-radius: 10px;
    color: gray;
    transition: all 0.5s;
    cursor: pointer;

    :hover {
      background-color: blue;
      color: white;
    }
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorText = styled.p`
  color: #ed7e7e;
  font-size: 14px;
  font-weight: bold;
`;

export default UseFormikExam;
