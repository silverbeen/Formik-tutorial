import styled from "@emotion/styled";
import { MdFormatBold } from "react-icons/md";

const TipTapMenu = ({ editor }: any) => {
  if (!editor) return null;

  const addYoutubeVideo = () => {
    const url = prompt("Enter YouTube URL");

    editor.commands.setYoutubeVideo({
      src: url,
      width: 640,
    });
  };

  return (
    <div>
      {/*  Blod */}
      <MdFormatBold
        size={20}
        cursor={"pointer"}
        onClick={() => editor.chain().focus().toggleBold().run()}
        style={{
          color: editor.isActive("bold") ? "rgb(0, 195, 221)" : "black",
        }}
      />

      <Tag
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        editor={editor}
        state="blockquote"
      >
        인용구
      </Tag>
      <Tag
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        editor={editor}
        state="heading, { level: 1 }"
      >
        H1
      </Tag>
      <Tag
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        editor={editor}
        state="heading, { level: 2 }"
      >
        H2
      </Tag>
      <Tag
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        editor={editor}
        state="heading, { level: 3 }"
      >
        H3
      </Tag>

      <Tag
        onClick={addYoutubeVideo}
        editor={editor}
        state="heading, { level: 3 }"
      >
        Youtube
      </Tag>
    </div>
  );
};

export default TipTapMenu;

const Tag = styled.span<{ state: string; editor: any }>`
  margin: 0 5px;
  padding: 5px 14px;
  font-size: 14px;
  border: 1px solid #e7e7e7;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s;

  ${({ state, editor }) =>
    editor.isActive(state)
      ? { color: "white", backgroundColor: "rgb(0, 195, 221)" }
      : { color: "black", backgroundColor: "" }}

  :hover {
    color: white;
    box-shadow: 0 0 6px #e7e7e7;
    background-color: rgb(0, 195, 221);
  }
`;
