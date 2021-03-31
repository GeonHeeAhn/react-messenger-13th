import styled from 'styled-components';
import React, {useState} from 'react';

const ProfileItem = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    position: fixed;
    top: 0px;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;

    border-bottom: 1.5px solid black;
    background-color: rgb(227, 200, 204);
    
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

export default function(props){
    const user = props.user;
    return <ProfileItem onClick= {props.clickProfile}>
        <ProfileImg src={props.profileData.proImg}/>
        <NameItem>
            <Name>{props.profileData.name}</Name>
            <State>현재 활동 중</State>
        </NameItem>
    </ProfileItem>
}