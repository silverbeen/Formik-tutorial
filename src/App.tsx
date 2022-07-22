import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormikExam from "./components/FormikExam";
import Header from "./components/Header";
import ProseMirror from "./components/ProseMirror";
import UseFormikExam from "./components/UseFormikExam";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="prose-mirror" element={<ProseMirror />} />
          <Route path="formik" element={<FormikExam />} />
          <Route path="useFormik" element={<UseFormikExam />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
