import {useState} from "react";
import {generateComment} from "../utils/comment";

const EMPTY_COMMENT = generateComment();
const EMPTY_COMMENT_ID = EMPTY_COMMENT.id;
const INITIAL_STATE = {
  ...EMPTY_COMMENT,
  allComments: {
    [EMPTY_COMMENT_ID]: EMPTY_COMMENT
  }
};


const useCommentWidget = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const addNewComment = (comment) => {
    const newComment = generateComment(comment);
    const {id: newCommentId, parentId} = newComment;
    if (!parentId) return;
    
    setState((oldState) => {
      const {allComments} = oldState;
      const parentComment = allComments[parentId];
    
      return {
        ...oldState,
        allComments: {
          ...allComments,
          [parentId]: {
            ...parentComment,
            replies: {
              ...parentComment.replies,
              [newCommentId]: newCommentId
            }
          },
          [newCommentId]: newComment
        }
      };
    });
  };

  const getReplyById = (id) => {
    if (!id) return null;
    const {allComments} = state;
    return allComments[id];
  };

  const deleteComment = ({id, parentId}) => {
    setState((oldState) => {
      const {allComments} = oldState;
      const parentComment = allComments[parentId];
      const {[id]: deleteComment, ...restAllComments} = allComments;
      const {[id]: deleteId, ...restReplyID} = parentComment.replies;
      return {
        ...oldState,
        allComments: {
          ...restAllComments,
          [parentId]: {
            ...parentComment,
            replies: {
              ...restReplyID
            }
          },
        }
      };
    });
  };

  return {
    state,
    addNewComment,
    deleteComment,
    getReplyById
  };
};

export default useCommentWidget;
