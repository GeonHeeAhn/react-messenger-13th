import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import ChatInput from './ChatInput';
import ChatList from './ChatList';
import Profile from './Profile';
import { userData, chatData } from '../Data.js';
import { useParams } from 'react-router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 70px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: calc(100% - 100px); 
  margin-top: 10px;
`;

function Index() {
  const [user, setUser] = useState(userData[0]);
  const [message, setMessage] = useState();
  const chatListRef = useRef(null);
  const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    if (message === '' || message === null) {
      window.alert('값을 입력해주세요');
      return false;
    }

    setMessage(''); 
    var now = new Date();
    if (now.getMinutes() < 10) {
      var minutes = '0' + now.getMinutes();
    } else minutes = now.getMinutes();
    var time = now.getHours() + ':' + minutes;

    chatData[id].chatText.push({
      currentTime: time,
      user: userData[user.id],
      text: message,
    });
  }

  function handleChangeInput(e) {
    setMessage(e.target.value);
  }

  const clickProfile = (e) => {
    if (user === userData[0]) return setUser(userData[id]);
    else return setUser(userData[0]);
  };

  // return (
  //   <Container>
  //     <Profile profileData={profileData[user]} clickProfile={clickProfile} />
  //     <ChatList ref={chatListRef} chatData={chatData} />
  //     <ChatInput
  //       message={message}
  //       handleChangeInput={handleChangeInput}
  //       handleSubmit={handleSubmit}
  //     />
  //   </Container>
  // );
  return (
    <Container>
      <Profile userData={user} clickProfile={clickProfile} />
      <ChatList ref={chatListRef} chatData={chatData[id]} />
      <ChatInput
        message={message}
        handleChangeInput={handleChangeInput}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default Index;
