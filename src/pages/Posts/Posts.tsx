import PostBlock from "../../components/PostBlock/postBlock";
import { postData } from "../../mock-data/posts";
import "./Posts.css";

export default function Posts() {
  const data = postData;
  return (
    <div className="posts">
      <div>
        <div className="posts-user">
          <div className="posts-user__text">Hello Jane</div>
          <p className="posts-user__subtext">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>
        <div className="post-list">
         
            <div className="post-block">
                <div className="post-block__header__text">Create post</div>
              <div className="post-block__desc">
                💬
                <input
                  className="post-block__desc__input"
                  placeholder="How are you feeling today?"
                />
              </div>
            </div>
       
          {data.map((item) => {
            return <PostBlock data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
