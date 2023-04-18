import { useState } from "react";

import "./Create.css";
import { Editor } from "../../components";

const Create = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");

  return (
    <form>
      <input
        type="title"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="summary"
        placeholder="Summary"
        value={summary}
        onChange={(e) => {
          setSummary(e.target.value);
        }}
      />
      <input
        type="file"
        onChange={(e) => {
          setFiles(e.target.files);
        }}
      />
      <Editor value={content} onChange={(newValue) => setContent(newValue)} />
      <button className="btn-create-post">Create Post</button>
    </form>
  );
};

export default Create;
