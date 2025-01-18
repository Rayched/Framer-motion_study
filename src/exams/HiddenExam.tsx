import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(125deg, rgb(174, 188, 244), rgb(8, 62, 171));
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    div:nth-child(2){
        grid-column: span 2;
    };
    div:nth-child(3){
        grid-column: span 2;
    }
    width: 50vw;
    gap: 10px;
`;

const Box = styled(motion.div)`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    width: 50px;
    height: 50px;
    background-color: rgb(40, 90, 188);
    border-radius: 30px;
`;

const OverlayViews = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
`;

function HiddenExam(){
    const [Move, setMove] = useState(false);
    const [Clicked, setClicked] = useState("");

    const isCircleMove = () => setMove((prev) => !prev);

    const isBoxClicked = (event: React.MouseEvent) => {
        const {
            currentTarget: {id}
        } = event;
        setClicked(id);
    };

    return (
        <Wrapper>
            <GridContainer>
                <Box id="Box1" layoutId="Box1" onClick={isBoxClicked}/>
                <Box id="Box2" onClick={isCircleMove}>
                    {!Move ? <Circle layoutId="circle"/> : null}
                </Box>
                <Box id="Box3" onClick={isCircleMove}>
                    {Move ? <Circle layoutId="circle"/> : null}
                </Box>
                <Box id="Box4" layoutId="Box4" onClick={isBoxClicked}/>
            </GridContainer>
            {
                Clicked ? (
                    <OverlayViews>
                        <Box 
                            layoutId={Clicked}
                            onClick={() => setClicked("")}
                            style={{width: 400, height: 250}}
                        />
                    </OverlayViews>
                ) : null
            }
        </Wrapper>
    );
};

export default HiddenExam;