import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

import "./Post.css";

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
  return (
    <section className="posts">
      <div className="entry">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={`http://localhost:8800/${cover}`} alt="" />
          </Link>
        </div>

        <div className="texts">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>

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
