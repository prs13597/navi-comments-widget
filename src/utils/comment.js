let idCount  = 1;

const generateComment = (comment = {}) => {
  const {commentValue = "", parentId = null} = comment;
  return {
    id: idCount++,
    property: {
      value: commentValue,
    }, 
    replyValue: "",
    replies: {},
    parentId
  };
};

export {
  generateComment
};
