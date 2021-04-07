import styled, { css } from 'styled-components';
import FriendsList from './FriendsList';
import Profile from './Profile';
import {React, useState} from 'react';

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    width: 100%;
    margin-left: 30px;
    margin-top: 10px;
`;
const Header = styled.div`
    align-content: center;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    width:100%;
`;
const SearchButton = styled.button`
    margin-top: 15px;
    height: 30px;
    width: 30px;
    border: none;
    :focus{
        border: none;
        outline: none;
    }
`;

const Input = styled.input`
    width: 90%;
    margin: 10px;
    display: none;
    ${(props) =>
        props.isVisible &&
        css` display: inherit;`
    }
`;

export default function InfoScreen(props){
    const [isVisibleSearch, setIsVisibleSearch] = useState(false);
    function toggleVisibleSearch(){
        setIsVisibleSearch(!isVisibleSearch);
        
    };

    return(
        <Screen>
            <Header>
                <h3>친구목록</h3>
                <SearchButton onClick={toggleVisibleSearch}>Search</SearchButton>
            </Header>
            <Input isVisible ={isVisibleSearch}/>
            <Profile/>
            <FriendsList/>
        </Screen>
    );
}