import { Form, Formik, Field } from "formik";
import { TextField, Button, Checkbox } from "@material-ui/core";
import styled from "styled-components";
import LabeledRadio from "./LabeledRadio";
import LabeledCheckbox from "./LabeledCheckbox";

const FormikFieldExam = () => {
  return (
    <Container>
      <h3>Formik 기본</h3>
      <Formik
        initialValues={{ username: "", password: "" }} // 필수로 들어가야 하는 요소
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // 비동기 통신을 설정해주면, isSubmitting을 통해 현재 비동기 통신중인지 확인할 수 있다.

          console.log(data);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <>
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              {/* isSubmitting 을 사용하여 true일 때는 양식을 두 번 보내지 않도록 버튼을 disabeld 시킨다. */}
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </form>
          </>
        )}
      </Formik>

      <h3>입력하는 input이 많은 경우 자동으로 넣어주는 인풋을 사용한다. </h3>
      <p>ex) {"<Formik /> <Field /> <Form />"} 태그들</p>

      <Formik
        initialValues={{
          username: "",
          password: "",
          isNoob: false,
          skills: [],
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);

          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field name="username" as={TextField} />
            </div>
            {/* Field의 name만으로도 handleSubmitm value, handleChange, handleBlur가 전부 자동 설정되고 as 를 통해 어떤 스타일의 input을 사용할 건지 정의 해주면 된다.  */}
            <Field name="password" as={TextField} />

            <h3> checkbox / radio example</h3>

            <Field name="isNoob" as={Checkbox} />

            <div>
              <LabeledCheckbox
                name="skills"
                value="React"
                label="React"
                type="checkbox"
              />

              <LabeledCheckbox
                name="skills"
                value="Redux"
                label="Redux"
                type="checkbox"
              />

              <LabeledCheckbox
                name="skills"
                value="Webpack"
                label="Webpack"
                type="checkbox"
              />

              <LabeledCheckbox
                name="skills"
                value="Typescript"
                label="Typescript"
                type="checkbox"
              />
            </div>
            <div>
              <LabeledRadio
                name="nation"
                value="Korea"
                label="Korea"
                type="radio"
              />
              <LabeledRadio
                name="nation"
                value="Japan"
                label="Japan"
                type="radio"
              />
              <LabeledRadio
                name="nation"
                value="China"
                label="China"
                type="radio"
              />
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
  width: 500px;
  margin: 100px auto;

  & label {
    cursor: pointer;
  }
`;

export default FormikFieldExam;
