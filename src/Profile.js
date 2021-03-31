import styled from 'styled-components';

const ProfileItem = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    position: fixed;
    top: 0px;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;

    border-bottom: 1px solid black;
    background-color: rgb(255, 236, 204);
    
`;

const NameItem = styled.div`
    flex-direction: column;
    align-content: center;
    margin-top: 5px;
`;

const ProfileImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 38%;
    overflow: hidden;

    margin-right: 30px;
    margin-left: 20px;
`;

const Name = styled.div`
    font-size: 110%;
    font-weight: bold;
`;

const State = styled.div`
    font-size: 90%;
    margin-top: 15px;
`;
const isMine = 0;
export default function(props){
    let {name, userId, proImg} = props.profileData[0]
    function handleClick(){
        if (isMine === userId) return {name, userId, proImg} = props.profileData[1];
        else return {name, userId, proImg} = props.profileData[0];
    }
    return <ProfileItem onClick= {handleClick}>
        <ProfileImg src={proImg}/>
        <NameItem>
            <Name>{name}</Name>
            <State>현재 활동 중</State>
        </NameItem>
    </ProfileItem>
}