import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 70px;
  height: 100vh;
  background-color: rgb(66, 54, 48);
  padding-top: 25px;
`;

const Contents = styled.img`
  margin-left: 22px;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 26px;
  height: 26px;
`;
export default function MenuBar() {
  return (
    <Container>
      <Link to="/">
        <Contents src={process.env.PUBLIC_URL + 'person.png'} />
      </Link>
      <Link to="/chatList">
        <Contents src={process.env.PUBLIC_URL + 'chat.png'} />
      </Link>
      <Link to="/setting">
        <Contents src={process.env.PUBLIC_URL + 'setting.png'} />
      </Link>
    </Container>
  );
}
