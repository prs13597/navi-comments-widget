import {useState} from "react";

const useReply = () => {
  const [reply, setReply] = useState("");
  const [showReplyInput, setShowReplyInput] = useState(false);
  
  const toggleShowReply = () => {
    if (showReplyInput) setReply("");
    setShowReplyInput(!showReplyInput);
  }
  
  return {
    toggleShowReply,
    showReplyInput,
    reply
  };
};

export default useReply;
