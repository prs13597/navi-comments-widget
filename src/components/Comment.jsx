import React from "react";
import SingleCommentView from "./SingleCommentView";

import InputComment from "./InputComment";
import {useReply} from "../hooks";

const Comment = ({comment, getReplyById, addNewComment, deleteComment}) => {
  
  const {replies, id} = comment;
  const {reply, showReplyInput, toggleShowReply} = useReply();

  const renderSinlgeReply = (replyID) => {
    const reply = getReplyById(replyID);
    return <Comment key={replyID} comment={reply}
      getReplyById={getReplyById}
      addNewComment={addNewComment}
      deleteComment={deleteComment}
    />
  }

  return (
    <div>
      <SingleCommentView comment={comment} toggleShowReply={toggleShowReply} deleteComment={deleteComment}/>
      {
        showReplyInput &&
        <InputComment commentValue={reply} parentId={id}
          onAction={addNewComment}
          actionText="Reply"
        />
      }
      <div className="padding24">
        {Object.keys(replies).map(renderSinlgeReply)}
      </div>
    </div>
  );
};

export default Comment;
