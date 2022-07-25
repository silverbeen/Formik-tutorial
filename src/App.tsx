import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormikExam from "./components/FormikExam";
import Header from "./components/Header";
import Editor from "./components/edit/Edit";
import UseFormikExam from "./components/UseFormikExam";
import UseFieldExam from "./components/UseFieldExam";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="prose-mirror" element={<Editor />} />
          <Route path="formik" element={<FormikExam />} />
          <Route path="useFormik" element={<UseFormikExam />} />
          <Route path="useField" element={<UseFieldExam />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
