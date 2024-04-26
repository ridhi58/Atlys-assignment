import "./postBlock.css"

export default function PostBlock(props: any) {
  const data = props.data;
  return (
    <div className="post-block">
      <div className="post-block__header">
        <img alt="" src="./user1.svg"  />
        <div >
          <p className="post-block__header__text">{data.name}</p>
          <p className="post-block__header__timestamp" >{data.timeStamp}</p>
        </div>
      </div>

      <div className="post-block__desc">
      👋
        <div className="post-block__desc__text" >{data.desc}</div>
      </div>

      <div className="post-block__comments">
        <img alt="" src="./comment.svg" />
        <span>{data.comments} comments</span>
      </div>
    </div>
  );
}
