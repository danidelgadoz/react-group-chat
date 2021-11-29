import { useState } from 'react';
import styled from 'styled-components';

const StyledUserNicknameForm = styled.div`
  background-color: rgb(243 240 234);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    padding: 16px;
    background-color: rgb(233 233 233);
    display: flex;
    height: 48px;
    min-width: 400px;

    input {
      flex: 1;
      padding 8px;
    }
  }
}`;


const UserNicknameForm = ({ onNicknameSaved }) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onNicknameSaved(inputValue);
  };

  return (
    <StyledUserNicknameForm>
      <form onSubmit={handleOnSubmit}>
        <input
          placeholder="Type your nickname"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">SAVE</button>
      </form>
    </StyledUserNicknameForm>
  );
};

export default UserNicknameForm;