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

    //요소의 id 값을 받아와서
    //그걸 state에 저장, 이를 <OverlayViews/> 내부의
    //<Box />가 layoutId로 참조하는 형태

    /**
     * Case 1
     * onClick()이 Box 요소의 id 값을 받아오고
     * 이를 state에 저장하고
     * state에 저장한 값을 <OverlayViews> 내부의
     * Box가 layoutId로 참조하는 형태
     * 
     * Case 2
     * 별도의 onClick event listener 없이
     * setState() 통해서 id 값을 바로 저장시키는 형태
     * 
     * 결과적으론 크게 다를 것은 없어보임
     * 도출하는 과정이 Case 1은 우회하는 식
     * Case 2는 우회없이 다이렉트로 가는 식
     * 어느 쪽이 더 좋을지 고민해볼 필요도 있을 것 같다.
     */

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