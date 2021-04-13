import styled, { css } from 'styled-components';
import { userData } from '../Data';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Screen = styled.div`
  position: fixed;
  left: 70px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: calc(100% - 100px); //후에 수정 : width 100%로 주면 버튼 사라짐
  margin-left: 30px;
  margin-top: 10px;
`;
const Header = styled.div`
  align-content: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ChatBox = styled.div`
  /* width:100%; */
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding-bottom: 20px;
  box-shadow: -3px 6px 20px -10px rgb(207, 195, 194);
`;

const NameItem = styled.div`
  margin-top: 10px;
  margin-left: 30px;
`;
const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 38%;
  overflow: hidden;
`;

const LastChat = styled.div`
  width: 100%;
  height: 20px;
  margin-left: 30px;
`;
export default function InfoScreen(props) {
  const list = props.list;
  console.log(list);
  return (
    <Screen>
      <Header>채팅방 목록</Header>
      {list.map((item) => {
        return (
          <Link to="/chat">
            <ChatBox chattingRoom={item}>
              <ProfileImg src={item.user.profileImg} />
              <div>
                <NameItem>{item.user.name}</NameItem>
                <LastChat>
                  {item.chatText[item.chatText.length - 1].text}
                </LastChat>
              </div>
            </ChatBox>
          </Link>
        );
      })}
    </Screen>
  );
}
