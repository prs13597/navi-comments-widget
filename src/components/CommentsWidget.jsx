import React from "react";
import InputComment from "./InputComment";
import Comment from "./Comment";
import {useCommentWidget} from "../hooks";

const CommentsWidget = () => {

  const {state, addNewComment, getReplyById, deleteComment} = useCommentWidget();

  const {replyValue, id} = state;
  const {replies} = getReplyById(id);
  const renderSingleComment = (commentID) => {
    const comment = getReplyById(commentID);
    return <Comment key={commentID} comment={comment}
      addNewComment={addNewComment}
      getReplyById={getReplyById}
      deleteComment={deleteComment}
    />
  }

  return (
    <div className="widget">
      <h1 >
        Comment Widget
      </h1>
      <InputComment commentValue={replyValue} parentId={id}
        onAction={addNewComment}
        actionText="ADD COMMENT"
      />
      {Object.keys(replies).map(renderSingleComment)}
    </div>
  );
};

export default CommentsWidget;
