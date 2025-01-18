import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, rgb(174, 188, 244), rgb(8, 62, 171));
`;

const Box = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    margin: 10px;
`;

const Circle = styled(motion.div)`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: rgb(8, 62, 171);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

function LayoutExam(){
    const [click, setClick] = useState(false);
    const isClick = () => setClick((clicked) => !clicked);

    return (
        <Wrapper onClick={isClick}>
            <Box>
                {
                    click ? <Circle layoutId="circle"/> : null
                }
            </Box>
            <Box>
                {
                    click ? null : <Circle layoutId="circle"/>
                }
            </Box>
        </Wrapper>
    );
}

export default LayoutExam;