import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormikExam from "./components/formik/FormikExam";
import Header from "./components/Header";
import Editor from "./components/edit/Edit";
import UseFormikExam from "./components/formik/UseFormikExam";
import UseFieldExam from "./components/formik/UseFieldExam";
import FormikExam2 from "./components/formik/FormikFieldExam";
import BeautifulDnd from "./components/dnd";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      {count}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="prose-mirror" element={<Editor />} />
          <Route path="formik" element={<FormikExam />} />
          <Route path="formik2" element={<FormikExam2 />} />
          <Route path="useFormik" element={<UseFormikExam />} />
          <Route path="useField" element={<UseFieldExam />} />
          <Route path="dnd" element={<BeautifulDnd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
