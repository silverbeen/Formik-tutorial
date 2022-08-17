import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormikExam from "./components/formik/FormikExam";
import Header from "./components/Header";
import Editor from "./components/edit/Edit";
import UseFormikExam from "./components/formik/UseFormikExam";
import UseFieldExam from "./components/formik/UseFieldExam";
import FormikExam2 from "./components/formik/FormikFieldExam";
import BeautifulDnd from "./components/dnd";
import { PATH } from "./constants/paths";
import "keen-slider/keen-slider.min.css";

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
          <Route path={PATH.REMIRROR} element={<Editor />} />
          <Route path={PATH.FORMIK} element={<FormikExam />} />
          <Route path={PATH.FORMIK2} element={<FormikExam2 />} />
          <Route path={PATH.USEFORMIK} element={<UseFormikExam />} />
          <Route path={PATH.USEFIELD} element={<UseFieldExam />} />
          <Route path={PATH.DND} element={<BeautifulDnd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
