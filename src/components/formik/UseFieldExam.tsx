import { useField, Form, FormikProps, Formik } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const TextField = ({ label, ...props }: any) => {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <label>
        {label}
        <input type="text" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const UseFieldExam = () => {
  return (
    <div>
      <h1>My From</h1>
      <Formik
        initialValues={{ email: "", firstName: "", lastName: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props: FormikProps<Values>) => {
          console.log(props);

          return (
            <Form>
              <TextField name="firstName" type="text" label="First Name" />
              <TextField name="lastName" type="text" label="Last Name" />
              <TextField name="email" type="email" label="Email" />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UseFieldExam;
