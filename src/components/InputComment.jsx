import React, {useState} from "react";

const InputComment = ({parentId, onAction, actionText}) => {
  
  const [comment, setComment] = useState("");

  const onChange = (event) => {
    console.log(event.target.value);
    setComment(event.target.value);
  };

  const onAddComment = () => {
    if (!comment.trim()) return;

    onAction({
      commentValue: comment.trim(),
      parentId
    })
    setComment("");
  }

  return (
    <div>
      <input className="paddingRight" type="text" placeholder="Enter a comment" onChange={onChange} value={comment}/>
      <button className="button buttonBlue" onClick={onAddComment}>{actionText}</button>
    </div>
  );
};

export default InputComment;
