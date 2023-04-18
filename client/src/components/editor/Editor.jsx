import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./Editor.css";

const Editor = ({ onChange, value }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div className="content">
      <ReactQuill
        modules={modules}
        onChange={onChange}
        theme="snow"
        value={value}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
