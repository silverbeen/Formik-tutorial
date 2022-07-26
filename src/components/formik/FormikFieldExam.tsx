import * as Yup from "yup";
import styled from "styled-components";
import { Form, Formik, Field } from "formik";
import { TextField, Button, Checkbox } from "@material-ui/core";
import LabeledRadio from "./lebel/LabeledRadio";
import LabeledCheckbox from "./lebel/LabeledCheckbox";
import YUP_SCHEMA from "../../constants/yupSchema";

const FormikFieldExam = () => {
  return (
    <Container>
      <h3>입력하는 input이 많은 경우 자동으로 넣어주는 인풋을 사용한다. </h3>
      <p>ex) {"<Formik /> <Field /> <Form />"} 태그들</p>

      <Formik
        initialValues={{
          username: "",
          password: "",
          isNoob: false,
          skills: [],
        }}
        validationSchema={Yup.object().shape({
          username: YUP_SCHEMA.USER_NAME,
          password: YUP_SCHEMA.PASSWORD,
          skills: YUP_SCHEMA.CHECK_BOX,
        })}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(data);

          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form>
            <div>
              <Field name="username" as={TextField} />
              {touched.username && errors.username ? (
                <ErrorText>{errors.username}</ErrorText>
              ) : null}
            </div>
            {/* Field의 name만으로도 handleSubmitm value, handleChange, handleBlur가 전부 자동 설정되고 as 를 통해 어떤 스타일의 input을 사용할 건지 정의 해주면 된다.  */}
            <div>
              <Field name="password" type="password" as={TextField} />
              {touched.password && errors.password ? (
                <ErrorText>{errors.password}</ErrorText>
              ) : null}
            </div>

            <h3> checkbox / radio example</h3>

            <Field name="isNoob" as={Checkbox} />

            <h3>상태관리</h3>
            <div>
              <LabeledCheckbox
                name="skills"
                value="Redux"
                label="Redux"
                type="checkbox"
              />

              <LabeledCheckbox
                name="skills"
                value="Redux-saga"
                label="Redux-saga"
                type="checkbox"
              />

              <LabeledCheckbox
                name="skills"
                value="react-query"
                label="react-query"
                type="checkbox"
              />

              <LabeledCheckbox
                name="skills"
                value="Recoil"
                label="Recoil"
                type="checkbox"
              />

              <LabeledCheckbox
                name="skills"
                value="zustand"
                label="zustand"
                type="checkbox"
              />
              {touched.skills && errors.skills ? (
                <ErrorText>{errors.skills}</ErrorText>
              ) : null}
            </div>

            <h3>사용언어</h3>
            <div>
              <LabeledRadio
                name="lang"
                value="Javascript"
                label="Javascript"
                type="radio"
              />
              <LabeledRadio
                name="lang"
                value="Typescript"
                label="Typescript"
                type="radio"
              />
              <LabeledRadio name="lang" value="All" label="All" type="radio" />
            </div>

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  margin: 100px auto;

  & label {
    cursor: pointer;
  }
`;

const ErrorText = styled.p`
  color: #ed7e7e;
  font-size: 14px;
  font-weight: bold;
`;
export default FormikFieldExam;
