import React, { useState } from "react";
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";

function EditorSection({ getEditorContents }) {
  const defaultContent = convertFromHTML(
    "<p>[문제 해결의 필요성 : 왜 문제에 관심을 가지게 되었고, 왜 해결되어야 하는가?] </p><p>[문제와 관련된 이해관계자]</p><p>[실행 계획]</p>"
  );

  const sampleEditorContent = ContentState.createFromBlockArray(
    defaultContent.contentBlocks
  );

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(sampleEditorContent)
  );

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    getEditorContents(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
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
