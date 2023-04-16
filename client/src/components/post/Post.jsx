import "./Post.css";

const Post = () => {
  return (
    <section className="posts">
      <div className="entry">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2023/04/openai-chatgpt-GettyImages-1247883047.jpg?w=430&h=230&crop=1"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>
            The week in AI: OpenAI attracts deep-pocketed rivals in Anthropic
            and Musk
          </h2>

          <p className="info">
            <span className="author">Felix Olali</span>
            <time>16-04-2023 14:13</time>
          </p>

          <p className="article">
            Keeping up with an industry as fast-moving as AI is a tall order. So
            until an AI can do it for you, here’s a handy roundup of the last
            week’s stories in the world of machine learning, along with notable
            research and experiments we didn’t cover on their own.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Post;
