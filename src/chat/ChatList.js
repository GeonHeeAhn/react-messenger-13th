import styled from 'styled-components';
import MessageItem from './MessageItem';
import { useEffect, useRef } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  width: 100%;
  top: 120px;
  bottom: 70px;
  background-image: url('./heart_bg.png');
`;

export default function ChatList(props) {
  const { chatData } = props;
  const cr = useRef();
  const list = chatData.map((item) => {
    return <MessageItem chatItem={item} />;
  });

  useEffect(() => {
    cr.current.scrollBy(0, 1000);
  }, [list]);

  return <Container ref={cr}>{list}</Container>;
}
