import styled from 'styled-components';

const ProfileBox = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
`;

const NameItem = styled.div`
    margin: 10px;
`;
const ProfileImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 38%;
    overflow: hidden;
`;

export default function Profile(props){
    return(
        <ProfileBox>
            <ProfileImg src={process.env.PUBLIC_URL + 'profile1.jpg'} />
            <NameItem>안거닝</NameItem>
        </ProfileBox>
    );
}