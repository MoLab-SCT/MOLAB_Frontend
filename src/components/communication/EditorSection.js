import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";

function EditorSection() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <>
      <React.Fragment>
        <Editor
          wrapperClassName="editor-wrapper"
          editorClassName="editor-main"
          toolbarClassName="editor-toolbar"
          localization={{
            locale: "ko",
          }}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      </React.Fragment>
    </>
  );
}

export default EditorSection;
