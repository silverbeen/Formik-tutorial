import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface InitType {
  firstName: string;
  secName: string;
}

const FormikExam = () => {
  const initialValues: InitType = { firstName: "", secName: "" };

  const test = Yup.object({
    firstName: Yup.string().min(4, "4글자 이상 입력해주세요").required(),
    lastName: Yup.string().min(4, "4글자 이상 입력해주세요").required(),
    email: Yup.string().email("이메일 형식을 맞춰주세요").required(),
  });
  return (
    <div>
      <h1>Formik</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={test}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
        }}
      >
        <Form
          style={{ display: "flex", flexDirection: "column", width: "300px" }}
        >
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <Field id="secName" name="secName" placeholder="sec Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikExam;
