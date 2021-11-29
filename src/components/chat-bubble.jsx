import React from "react";
import styled from 'styled-components';

const StyledChatBubble = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffff;
  padding: 8px;
  margin-bottom: 8px;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}`;

const ChatBubble = ({ message }) => {
  const { transmitter, description, dateTime } = message;

  return (
    <StyledChatBubble>
      <div>
        <strong>{transmitter}</strong>
        <span>{description}</span>
      </div>
      <span>{dateTime}</span>
    </StyledChatBubble>
  );
}

export default ChatBubble;
