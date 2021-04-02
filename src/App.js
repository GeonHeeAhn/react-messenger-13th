import styled from 'styled-components';
import React from 'react';
import ChatInput from './ChatInput';
import ChatList from './ChatList';
import Profile from './Profile';
import {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
//데이터는 App에서 다룸

const Continaer = styled.div`
  display:flex;
  flex-direction:column;
`;

const chatData = [{
  chatText: "거니야",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
}, {
  chatText: "왜안와",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
}, 
{
  chatText: "집 언제와ㅠㅡㅠ",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
}, {
  chatText: "헉 나 보고싶지 !! ",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + 'profile1.jpg'
}, {
  chatText: "아니 츄르",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
},{
  chatText: "아",
  userId: 0,
  profileImg: process.env.PUBLIC_URL + 'profile1.jpg'
},{
  chatText: "얼른 와",
  userId: 1,
  profileImg: process.env.PUBLIC_URL + 'profile2.jpg'
},{
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
  const [message, setMessage] = useState();

  // useEffect(() => {
  //   window.scrollBy(0, document.body.scrollHeight);
  //   // document.getElementById('root').scrollBy(0, document.body.scrollHeight);
  // }, [chatData]);

  function handleSubmit(e){
    e.preventDefault();
    if( e.target.value== '' || e.target.value== null){
      window.alert("값을 입력해주세요");
      return false;
    }
    setMessage('');  //chatdata를 useState으로 만들어서 다시 해보기
    chatData.push({
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
    <Continaer>
      <Profile profileData = {profileData[user]} clickProfile = {clickProfile}/>
      <ChatList chatData={chatData}/>
      <ChatInput message = {message} handleChangeInput = {handleChangeInput} handleSubmit = {handleSubmit}/>
    </Continaer>
    );
}

export default App;
