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
`;

const ChatContent = styled.p`
    
`;

export default function(props){
    const {chatId, chatText, userId, profileImg} = props.chatItem

    return <ChatItem isMine={userId == 0}>
        <ProfileImg src={profileImg} ></ProfileImg>
        <ChatContent>{chatText}</ChatContent>
    </ChatItem>
}; 