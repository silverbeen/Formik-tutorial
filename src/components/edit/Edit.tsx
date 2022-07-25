import { useCallback, useEffect, useRef, useState } from "react";
import {
  BoldExtension,
  ItalicExtension,
  UnderlineExtension,
} from "remirror/extensions";
import {
  Remirror,
  useRemirror,
  OnChangeJSON,
  EditorComponent,
  OnChangeHTML,
} from "@remirror/react";
import type { RemirrorJSON } from "remirror";
import BlodBtn from "./BlodBtn";
import { WysiwygEditor } from "@remirror/react-editors/wysiwyg";
import styled from "styled-components";

interface EditorProps {
  onChange: (json: RemirrorJSON) => void;
  onChangeHtml: (html: string) => void;
}

const extensions = () => [
  new BoldExtension(),
  new ItalicExtension(),
  new UnderlineExtension(),
];

const STORAGE_KEY = "remirror-editor-content";

const Editor = () => {
  const viewRef = useRef<any>(null);
  const [htmlState, setHtmlState] = useState(" ");

  const onChange = useCallback((json: RemirrorJSON) => {
    // Store the JSON in localstorage
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(json));

    console.log(json);
  }, []);

  const onChangeHTML = useCallback((html: string) => {
    // viewRef.current = html;
    console.log(viewRef);
    viewRef.current = html;
    setHtmlState(html);
  }, []);

  const { manager, state } = useRemirror({
    extensions,
    content: "<p>Hi <strong>Friend</strong></p>",
    stringHandler: "html",
    selection: "end",
  });

  useEffect(() => {
    console.log(htmlState);
  }, [htmlState]);

  return (
    <EditorContainer>
      <WysiwygEditor placeholder="Enter text...">
        <OnChangeJSON onChange={onChange} />
        <OnChangeHTML onChange={onChangeHTML} />
      </WysiwygEditor>
      <Remirror manager={manager} initialContent={state}>
        <EditorComponent />
        <BlodBtn />
      </Remirror>
      <View ref={viewRef}></View>
      <pre>{htmlState}</pre>
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  width: 700px;
  margin: 50px auto;
`;

const View = styled.pre`
  width: 700px;
`;

export default Editor;
  