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
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    margin: 5px;
`;

const Circle = styled(motion.div)`
    width: 45px;
    height: 45px;
    border-radius: 40px;
    background-color: rgb(8, 62, 171);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Layout(){
    const [Clicked, setClicked] = useState(false);

    const isClicked = () => setClicked((prev) => !prev);

    return (
        <Wrapper onClick={isClicked}>
            <Box>
                {!Clicked ? <Circle layoutId="circle"/> : null}
            </Box>
            <Box>
                {Clicked ? <Circle layoutId="circle"/> : null}
            </Box>
        </Wrapper>
    );
}

export default Layout;