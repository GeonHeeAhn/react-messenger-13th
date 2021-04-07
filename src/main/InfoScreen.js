import styled from 'styled-components';
import FriendsList from './FriendsList';
import Profile from './Profile';

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
`;

export default function InfoScreen(){
    return(
        <Screen>
            <Profile/>
            <FriendsList/>
        </Screen>
    );
}