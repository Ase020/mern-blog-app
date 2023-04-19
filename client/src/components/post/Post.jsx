import { formatISO9075 } from "date-fns";

import "./Post.css";

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
  return (
    <section className="posts">
      <div className="entry">
        <div className="image">
          <img src={`http://localhost:8800/${cover}`} alt="" />
        </div>

        <div className="texts">
          <h2>{title}</h2>

          <p className="info">
            <span className="author">{author.username}</span>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>

          <p className="article">{summary}</p>
        </div>
      </div>
    </section>
  );
};

export default Post;
