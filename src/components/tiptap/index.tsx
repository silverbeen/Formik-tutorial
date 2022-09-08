import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import Tiptap from "./Tiptap";
import dompurify from "dompurify";

const TiptapWrap = () => {
  const editorRef = useRef<any>();
  const [html, setHTML] = useState<string>("");

  const sanitizer = dompurify.sanitize;

  const getContent = () => {
    setHTML(editorRef.current.props.editor.getHTML());
    console.log(editorRef.current.props.editor.getHTML());
    console.log(editorRef.current.props.editor.getJSON());
  };

  const createMarkup = () => {
    return { __html: sanitizer(html) };
  };

  return (
    <Container>
      <EditorContainer>
        <Tiptap editorRef={editorRef} />
        <button onClick={getContent}>내용 추출하기</button>
      </EditorContainer>
      <PreviewContainer>
        <h2>미리보기</h2>
        {html.length === 0 ? (
          <ValidationText>내용 추출하기를 클릭해주세요.</ValidationText>
        ) : (
          <div dangerouslySetInnerHTML={createMarkup()}></div>
        )}
      </PreviewContainer>
    </Container>
  );
};

export default TiptapWrap;

const Container = styled.div`
  margin: 100px auto;
  width: 50%;
`;

const EditorContainer = styled.div`
  width: 100%;
  padding: 20px;
  border: 2px solid #ececec;
  border-radius: 20px;
  box-shadow: 0 2px 8px #dadada;
`;

const PreviewContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const ValidationText = styled.p`
  margin: 50px 0;
  text-align: center;
  color: #b8b8b8;
`;
