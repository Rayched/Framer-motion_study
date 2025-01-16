import { AnimatePresence, motion } from "framer-motion";
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    div:first-child {
        grid-column: span 2;
    };
    div:last-child {
        grid-column: span 2;
    };
    width: 50vw;
    gap: 10px;
`;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
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
            <Grid>
                <Box layoutId="SampleBox"/>
                <Box />
                <Box />
                <Box />
            </Grid>
            <AnimatePresence>
                {
                    Clicked ? 
                    <Overlay 
                        initial={{backgroundColor: "rgba(0, 0, 0, 0)"}} 
                        animate={{backgroundColor: "rgba(0, 0, 0, 0.1)"}} 
                        exit={{backgroundColor: "rgba(0, 0, 0, 0)"}}
                    >
                        <Box layoutId="SampleBox" style={{width: 300, height: 200}}/>
                    </Overlay> 
                    : null
                }
            </AnimatePresence>
        </Wrapper>
    );
}

export default Layout;