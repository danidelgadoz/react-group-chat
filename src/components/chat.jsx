import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from 'styled-components';

import { SocketContext } from '../context/socket';
import ChatBubble from './chat-bubble';

const StyledChat = styled.div`
  background-color: rgb(243 240 234);
  height: 100%;
  display: flex;
  flex-direction: column;
}`;

const ChatHistory = styled.div`
  padding: 16px;
  flex: 1 1 auto;
  overflow-y: auto;
  height: 0px;
}`;

const FormChat = styled.form`
  padding: 16px;
  background-color: rgb(233 233 233);
  display: flex;
  height: 36px;

  input {
    flex: 1;
    padding 8px;
  }
}`;

const Chat = ({ nickname }) => {
  const socket = useContext(SocketContext);
  const [inputValue, setInputValue] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);

  useEffect(() => {
    // subscribe to socket events
    socket.on("message", handleInviteAccepted);

    return () => {
      // before the component is destroyed
      // unbind all event handlers used in this component
      socket.off("message", handleInviteAccepted);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInviteAccepted = useCallback((incomingMessage) => {
    setMessageHistory(oldMessageHistory => [...oldMessageHistory, {
      'dateTime': incomingMessage.date_time,
      'transmitter': incomingMessage.transmitter,
      'description': incomingMessage.description,
    }]);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    socket.emit('message', {
      transmitter: nickname,
      description: inputValue,
    });
  };

  return (
    <StyledChat>

      <ChatHistory>
        {
          messageHistory.map((message, index) => (
            <ChatBubble
              key={index}
              message={{
                'transmitter': message.transmitter,
                'description': message.description,
                'dateTime': message.dateTime,
              }}
            />
          ))
        }

      </ChatHistory>

      <FormChat onSubmit={handleOnSubmit}>
        <input
          placeholder="Type a message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </FormChat>

    </StyledChat>
  );
}

export default Chat;
