import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, rgb(174, 188, 244), rgb(8, 62, 171));
`;

const Box = styled(motion.div)`
    width: 320px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const DragItems = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18em;
    height: 5em;
    border-radius: 20px;
    background-color: rgb(194, 190, 195);
    margin: 7px 0px;

    span {
        background-color: inherit;
        font-size: 1.2em;
        font-weight: bold;
    };
`;

function DnDExam(){
    return (
        <Wrapper>
            <Box>
                <DragItems><span>Item 01</span></DragItems>
                <DragItems><span>Item 02</span></DragItems>
                <DragItems><span>Item 03</span></DragItems>
                <DragItems><span>Item 04</span></DragItems>
                <DragItems><span>Item 05</span></DragItems>
            </Box>
        </Wrapper>
    );
};

export default DnDExam;