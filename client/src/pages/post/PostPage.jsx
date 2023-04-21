import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";

import "./PostPage.css";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8800/post/${id}`).then((res) =>
      res.json().then((postInfo) => {
        setPostInfo(postInfo);
      })
    );
  }, []);

  console.log(postInfo);

  if (!postInfo) return "";
  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>

      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>

      <p className="author-tag">
        by <span className="author">{postInfo.author.username}</span>
      </p>

      <div className="img">
        <img src={`http://localhost:8800/${postInfo.cover}`} alt="" />
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
        className="article"
      />
    </div>
  );
};

export default PostPage;
