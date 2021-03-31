import styled from 'styled-components';
import React, {useState} from 'react';

const Box = styled.form`
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 100%;
    bottom: 0px;
    position: fixed;
`;
const Input = styled.input`
    flex-grow: 5;
    border: 1px solid rgb(204, 194, 180);
`;

const Button = styled.button`
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
    const {message, handleSubmit,handleChangeInput} = props;
     //props는 input된 정보
    return(
        <Box onSubmit = {handleSubmit}>
            <Input
                type="text"
                value={message}
                placeholder = 'Message...'
                onChange = {handleChangeInput}
            />
            <Button type="submit">전송</Button>
        </Box>
    )
}
// export default MessageInput();
