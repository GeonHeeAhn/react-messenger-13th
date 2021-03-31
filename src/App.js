import styled from 'styled-components';
import React from 'react';
import ChatInput from './ChatInput';
import ChatList from './ChatList';
import Profile from './Profile';
//데이터는 App에서 다룸

const Continaer = styled.div`
  display:flex;
  flex-direction:column;
`;

const chatData = [{
  chatId: 0,
  chatText: "안뇽",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
}, {
  chatId: 1,
  chatText: "안뇽",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
}, 
{
  chatId: 2,
  chatText: "안뇽",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
}, {
  chatId: 3,
  chatText: "안뇽",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
}, {
  chatId: 4,
  chatText: "안뇽",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
},{
  chatId: 5,
  chatText: "안뇽",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
},{
  chatId: 6,
  chatText: "안뇽",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
},{
  chatId: 7,
  chatText: "안뇽",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
}, {
  chatId: 8,
  chatText: "안뇽",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
},{
  chatId: 9,
  chatText: "안뇽",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
},{
  chatId: 10,
  chatText: "안뇽",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
},{
  chatId: 11,
  chatText: "안뇽",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
},{
  chatId: 12,
  chatText: "안뇽",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + '/logo512.png'
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
  
  return (
    <Continaer>
      <Profile profileData = {profileData}/>
      <ChatList chatData={chatData}/>
      <ChatInput/>
    </Continaer>
    );
}

export default App;
