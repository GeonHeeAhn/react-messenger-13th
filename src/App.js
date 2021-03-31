import styled from 'styled-components';
import React from 'react';
import ChatInput from './ChatInput';
import ChatList from './ChatList';
import Profile from './Profile';
import {useState} from 'react';
//데이터는 App에서 다룸

const Continaer = styled.div`
  display:flex;
  flex-direction:column;
`;

const chatData = [{
  chatId: 0,
  chatText: "거니야",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
}, {
  chatId: 1,
  chatText: "왜안와",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
}, 
{
  chatId: 2,
  chatText: "집 언제와ㅠㅡㅠ",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
}, {
  chatId: 3,
  chatText: "헉 나 보고싶지 !! ",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + 'profile1.jpg'
}, {
  chatId: 4,
  chatText: "아니 츄르",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
},{
  chatId: 5,
  chatText: "아",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + 'profile1.jpg'
},{
  chatId: 6,
  chatText: "얼른 와",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
},{
  chatId: 7,
  chatText: "돈 벌어서 금방 갈게...",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + 'profile1.jpg'
},];

const profileData = [{
  name: "안거닝",
  userId: 0,
  proImg: process.env.PUBLIC_URL +'profile1.jpg'
},{
  name: "야옹쓰", 
  userId: 1,
  proImg: process.env.PUBLIC_URL + 'profile2.jpg'
}];

function App() {
  const [user, setUser] = useState(0);
  const {name, userId, proImg} = profileData[user]
  const clickProfile = e =>{
    if(user===0 ) return setUser(1);
    else return setUser(0);
  }
  return (
    <Continaer>
      <Profile profileData = {profileData[user]} clickProfile = {clickProfile}/>
      <ChatList chatData={chatData}/>
      <ChatInput/>
    </Continaer>
    );
}

export default App;
