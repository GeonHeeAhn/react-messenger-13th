import styled from 'styled-components';
import React from 'react';
import ChatInput from './ChatInput';
import ChatList from './ChatList';
import Profile from './Profile';
import {useState, useEffect} from 'react';

const Container = styled.div`
  display:flex;
  flex-direction:column;
`;

const chatData = [{
  currentTime: "18: 23",
  chatText: "거니야",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
}, {
  currentTime: "18: 23",
  chatText: "왜안와",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
}, 
{
  currentTime: "18: 24",
  chatText: "집 언제와ㅠㅡㅠ",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
}, {
  currentTime: "18: 25",
  chatText: "헉 나 보고싶지 !! ",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + 'profile1.jpg'
}, {
  currentTime: "19: 40",
  chatText: "아니 츄르",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
},{
  currentTime: "19: 48",
  chatText: "아",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + 'profile1.jpg'
},{
  currentTime: "20: 05",
  chatText: "얼른 와",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
},{
  currentTime: "20: 54",
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
  const [message, setMessage] = useState();

  useEffect(() => {
      window.scrollBy(0, document.body.scrollHeight);
  }); //실행안됨
  
  function handleSubmit(e){
    e.preventDefault();
    if ( message== ''|| message == null){
      window.alert("값을 입력해주세요");
      return false;
    } 

    setMessage('');  //chatdata를 useState으로 만들어서 다시 해보기
    var now = new Date();
    if(now.getMinutes() < 10){
      var minutes = "0" + now.getMinutes();
    } else var minutes = now.getMinutes();
    var time = now.getHours() + ":" + minutes;
    
    chatData.push({
      currentTime: time,
      chatText: message,
      userId: user,
      profileImg: process.env.PUBLIC_URL + `profile${user+1}.jpg`
    });
    console.log('chatData : ', chatData);
  }

  function handleChangeInput(e){
    setMessage(e.target.value);
  }

  const clickProfile = e =>{
    if(user===0 ) return setUser(1);
    else return setUser(0);
  }

  return (
    <Container>
      <Profile profileData = {profileData[user]} clickProfile = {clickProfile}/>
      <ChatList chatData={chatData}/>
      <ChatInput message = {message} handleChangeInput = {handleChangeInput} handleSubmit = {handleSubmit}/>
    </Container>
    );
}

export default App;
