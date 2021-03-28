import styled from 'styled-components';


const Box = styled.div`
    display: flex;
    flex-direction: row;
`;
const Input = styled.input`
    flex-grow: 5;
`;

const Button = styled.button`
    flex-grow: 1;
`;
export default function(props){
    return <Box>
        <Input>Message...</Input>
        <Button>전송</Button>
    </Box>
};
