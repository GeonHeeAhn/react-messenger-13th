import styled from 'styled-components';

const ProfileBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    padding-bottom: 20px;
    /* box-shadow: -3px 6px 20px -10px rgb(207, 195, 194); */
`;

const NameItem = styled.div`
    margin-top:10px;
    /* margin-bottom:0px;
    padding-top:0px;
    padding-bottom:0px; */
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;
const ProfileImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 38%;
    overflow: hidden;
`;

export default function Profile(props){
    const {myState, profileImg, name} = props.otherProfile;
    return(
        <ProfileBox>
            <ProfileImg src={profileImg}/>
            <NameItem><h4 style={{marginTop: 0 + 'px'}}>{name}</h4><h5 style={{marginTop: 0 + 'px'}}>{myState}</h5></NameItem>
        </ProfileBox>
    );
}