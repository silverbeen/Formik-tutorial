import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormikExam from "./components/formik/FormikExam";
import Header from "./components/Header";
import Editor from "./components/edit/Edit";
import UseFormikExam from "./components/formik/UseFormikExam";
import UseFieldExam from "./components/formik/UseFieldExam";
import FormikExam2 from "./components/formik/FormikFieldExam";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="prose-mirror" element={<Editor />} />
          <Route path="formik" element={<FormikExam />} />
          <Route path="formik2" element={<FormikExam2 />} />
          <Route path="useFormik" element={<UseFormikExam />} />
          <Route path="useField" element={<UseFieldExam />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
