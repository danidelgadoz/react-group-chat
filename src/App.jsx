import styled from 'styled-components';

import Header from './components/header';
import Groups from './components/groups';
import Chat from './components/chat';
import { SocketContext, socket } from './context/socket';
import UserNicknameForm from './components/NicknameForm';
import { useState } from 'react';

const StyleApp = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  > div {
    flex: 1;
    display: flex;
  }
}`;

const App = () => {
  const [nicknametValue, setNicknameValue] = useState(null);

  const handleNicknameSaved = (nickname) => {
    setNicknameValue(nickname);
    console.log('nicknametValue', nicknametValue)
  };

  const renderChatApp = () => {
    return (
      <SocketContext.Provider value={socket}>
        <StyleApp>
          <Header nickname={nicknametValue} />

          <div>
            <div style={{ flex: '.30', }}>
              <Groups />
            </div>

            <div style={{ flex: '.70', }}>
              <Chat nickname={nicknametValue} />
            </div>
          </div>
        </StyleApp>
      </SocketContext.Provider>
    );
  };

  const renderNicknameForm = () => {
    return (
      <UserNicknameForm
        onNicknameSaved={handleNicknameSaved}
      />
    );
  }

  return (
    <>
      {!nicknametValue && renderNicknameForm()}
      {!!nicknametValue && renderChatApp()}
    </>
  );
};

export default App;