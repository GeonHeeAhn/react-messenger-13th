export const userData = [
  {
    name: '안건희',
    id: 0,
    myState: '집인데 집가고 싶어요',
    profileImg: `${process.env.PUBLIC_URL}/profile1.jpg`,
  },
  {
    name: '야옹이',
    id: 1,
    myState: '오늘부터 다이어트 츄르 안머금',
    profileImg: `${process.env.PUBLIC_URL}/profile2.jpg`,
  },
  {
    name: '토깽',
    id: 2,
    myState: '산지직송 $$ 당근 떨이 @@%@',
    profileImg: `${process.env.PUBLIC_URL}/profile6.jpg`,
  },
  {
    name: '겸댕',
    id: 3,
    myState: '흥',
    profileImg: `${process.env.PUBLIC_URL}/profile3.jpg`,
  },{
    name: '오잉',
    id: 4,
    myState: '우리집 고양이 본 사람 연락좀',
    profileImg: `${process.env.PUBLIC_URL}/profile5.jpg`,
  }
];

export const chatData = [
  {
    user:userData[0],
    id:0,
    chatText:[{
        user: userData[0],
        text:'나와의 채팅방'
    },{
        user: userData[0],
        text:'데베 과제 - 월요일까지'
    },{
      user: userData[0],
      text:'사캠 출석하기 - 주말'
    },{
      user: userData[0],
      text:'채팅목록에서 search 구현하기'
    }]
},{
  user:userData[1],
  id:1,
  chatText:[{
      user: userData[1],
      text:'올 때 츄르 사오랫지 내가'
  },{
      user: userData[1],
      text:'ㅡㅡ'
  },{
    user: userData[1],
    text:'왜 안사옴'
  },{
    user: userData[0],
    text:'힝'
  },{
    user: userData[0],
    text:'너가 깡패야????'
  }]
},{
user:userData[2],
id:2,
chatText:[{
    user: userData[0],
    text:'당근 1키로에 얼마에요?'
},{
    user: userData[2],
    text:'하우스 당근 100% 제주산 무농약 산지직송 / 주문건 5월 14일 금요일부터 출고가능'
},{
  user: userData[2],
  text:'1키로 1만원 / 3키로 2만 5천원'
},{
  user: userData[2],
  text:'상담을 원할 시 대표 전화로 연락바람'
}]
},{
  user:userData[3],
  id:3,
  chatText:[{
      user: userData[3],
      text:'야 거니야'
  },{
      user: userData[3],
      text:'세지 숙제 햇냐'
  }]
  },];
