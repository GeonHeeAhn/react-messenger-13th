import styled from 'styled-components';
import React, {useState} from 'react';

const Box = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 70px;
    width: 95%;
    bottom: 0px;
    position: fixed;
`;
const Input = styled.input`
    height: 50px;
    border-radius: 30px;
    margin-left: 5%;
    flex-grow: 5;
    border: 1px solid rgb(204, 194, 180);
    :focus{
        border:  1px solid rgb(204, 194, 180);;
        outline: none;
    }
`;

const Button = styled.button`
    height: 50px;
    flex-grow: 1;
    margin-left: 10px;
    border-radius: 30px;
    background-color: rgb(222, 189, 164);
    border: none;
    :focus{
        border: none;
        outline: none;
    }
`;

export default function ChatInput(props){
    const {msgTime,message,handleSubmit,handleChangeInput} = props;
     //props는 input된 정보
    return(
        <Box onSubmit = {handleSubmit}>
            <Input
                type="text"
                value={message}
                placeholder = ' Please enter a message'
                onChange = {handleChangeInput}
                //id = {msgTime}
            />
            <Button type="submit">전송</Button>
        </Box>
    )
}
