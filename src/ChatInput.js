import styled from 'styled-components';


const Box = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 100%;
    bottom: 0px;
    position: fixed;
`;
const Input = styled.input`
    flex-grow: 5;
`;

const Button = styled.button`
    flex-grow: 1;
`;
export default function(props){
    return <Box>
        <Input placeholder='Message...'/>
        <Button>전송</Button>
    </Box>
};
