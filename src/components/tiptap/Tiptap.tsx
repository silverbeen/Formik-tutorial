import styled from "@emotion/styled";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Mention from "@tiptap/extension-mention";
import TipTapMenu from "./TiptapMenu";
import suggestion from "./suggestion";

interface Props {
  editorRef: any;
  content?: string;
  isEditable?: boolean;
}

const Tiptap = (props: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Mention.configure({
        HTMLAttributes: {
          class: "mention",
        },
        suggestion,
      }),
    ],
    content: props.content,
    editable: props.isEditable,
  });

  return (
    <Container>
      <TipTapMenu editor={editor} />
      <EditorContent editor={editor} ref={props.editorRef} />
    </Container>
  );
};
export default Tiptap;

const Container = styled.div`
  .ProseMirror {
    margin: 30px 0;
    outline: none;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    padding: 20px;
    max-height: 300px;
    overflow: auto;
  }
`;
