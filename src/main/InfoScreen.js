import styled from 'styled-components';
import FriendsList from './FriendsList';
import Profile from './Profile';

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    margin-left: 30px;
    margin-top: 10px;
`;

export default function InfoScreen(){
    return(
        <Screen>
            <h3>친구목록</h3>
            <Profile/>
            <FriendsList/>
        </Screen>
    );
}