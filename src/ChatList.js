import styled from 'styled-components';
import MessageItem from './MessageItem';

const Container = styled.div`
    display: flex;
    flex-direction: column;  
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
    width: 100%;
    top: 100px;
    bottom: 50px;

`;
export default function(props){
    const {chatData} = props;
    const list = chatData.map((item) => {
        return <MessageItem chatItem={item} />
    });
    
    return <Container>
        {list /*이건 js*/}
    </Container>
};