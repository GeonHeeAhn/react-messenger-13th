import styled from 'styled-components';

const Container = styled.div`
  width: 70px;
  height: 100vh;
  background-color: rgb(66, 54, 48);
`;

const Contents = styled.img`
    margin-left: 22px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 26px;
    height: 26px;
`;
export default function MenuBar() {
  return <Container>
      <Contents src={process.env.PUBLIC_URL + 'person.png'}/>
      <Contents src={process.env.PUBLIC_URL + 'chat.png'}/>
      <Contents src={process.env.PUBLIC_URL + 'setting.png'}/>
  </Container>;
}
