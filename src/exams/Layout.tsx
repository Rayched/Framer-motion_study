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

const Box = styled(motion.div)`
    width: 300px;
    height: 300px;
    display: flex;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    width: 75px;
    height: 75px;
    border-radius: 40px;
    background-color: rgb(8, 62, 171);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Layout(){
    const [Clicked, setClicked] = useState(false);

    const isClicked = () => setClicked((prev) => !prev);

    return (
        <Wrapper>
            <Box>
                <Circle />
            </Box>
        </Wrapper>
    );
}

export default Layout;