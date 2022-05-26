import React from "react";

const SingleCommentView = ({comment, toggleShowReply, deleteComment}) => {
  
  const { property } = comment;
  const {value} = property;

  return (
    <div>
      <h3 className="paddingRight">{value}</h3>
      <button  className="button buttonPink paddingRight" onClick={() => deleteComment(comment)}>
        DELETE
      </button>
      <button className="button buttonBlue" onClick={toggleShowReply}>
        ADD REPLY
      </button>
    </div>
  );
};

export default SingleCommentView;
