import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Create.css";
import { Editor } from "../../components";

const Create = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");

  const navigate = useNavigate();

  const createPost = async (e) => {
    const postData = new FormData();
    postData.set("title", title);
    postData.set("summary", summary);
    postData.set("content", content);
    postData.set("file", files[0]);

    e.preventDefault();

    const response = await fetch("http://localhost:8800/post", {
      method: "POST",
      body: postData,
    });

    // console.log(await response.json());
    response.status === 200 && navigate("/");
  };

  return (
    <form onSubmit={createPost}>
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
