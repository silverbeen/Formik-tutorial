import { useActive, useCommands } from "@remirror/react";

import React from "react";

const BlodBtn = () => {
  const { toggleBold, focus } = useCommands(); // font를 굵게 해주는 역할

  const active = useActive(); // 현재 텍스트가 bold 여부인지 확인 해주는 역할

  return (
    <button
      onClick={() => {
        toggleBold();
        focus();
      }}
      style={{ fontWeight: active.bold() ? "bold" : undefined }}
      disabled={toggleBold.enabled() === false}
    >
      Bold
    </button>
  );
};

export default BlodBtn;
