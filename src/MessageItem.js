import styled, {css} from 'styled-components';

const ChatItem = styled.div`
    display: flex;
    flex-direction: row;

    ${(props) =>
        props.isMine && // && 요게 참이면 아래거 해라
            css`flex-direction:row-reverse;`
    }
`;

const ProfileImg = styled.img`
    width:50px;
    height:50px;   
    border-radius: 50%; 
    margin:5px;
    box-shadow: 5px 5px 20px 1px rgb(207, 195, 194);
`;

const ChatContent = styled.p`
    background-color: rgb(247, 193, 201);
    border-radius: 30px;
    padding: 5px;//이거 쓰면 프사랑 정렬이 안됨
    padding-left: 15px;
    padding-right: 15px;
    margin: 15px;
    
`;

export default function(props){
    const {chatId, chatText, userId, profileImg} = props.chatItem

    return <ChatItem isMine={userId == 0}>
        <ProfileImg src={profileImg} ></ProfileImg>
        <ChatContent>{chatText}</ChatContent>
    </ChatItem>
}; 