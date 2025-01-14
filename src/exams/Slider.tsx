import {styled} from "styled-components";
import {AnimatePresence, motion} from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        135deg, rgb(174, 188, 244), rgb(8, 62, 171)
    );
`;

const Box = styled(motion.div)`
    display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	width: 250px;
	height: 250px;
	background-color: white;
	border-radius: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	margin-bottom: 5px;
	position: absolute;
`;

const BtnContainer = styled.div`
    width: 160px;
	height: 40px;
	position: absolute;
	top: 500px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 0px;
	border-radius: 7px;
	padding: 3px;
	background-color: rgb(43, 97, 207);
`;

const Btn = styled.button`
    width: 70px;
	height: 30px;
	font-size: 16px;
	border: 0px;
	border-radius: 7px;
	background-color: rgb(174, 188, 244);
	margin: 0px 3px;
    &:hover {
        background-color: rgb(136, 153, 220);
    }
`;

const BoxVariants = {
    initial: {
        opacity: 0,
        x: 100
    },
    changeTabs: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5,
            duration: 0.6
        }
    },
    exitTabs: {
        opacity: 0,
        x: -100,
        transition: {
            duration: 0.5
        }
    }
};

function Slider(){
    const [Index, setIndex] = useState(1);

    const nextTabs = () => {
        setIndex((values) => values === 9 ? 0 : values + 1);
    }

    const prevTabs = () => {
        setIndex((values) => values === 0 ? 9 : values - 1);
    }

    return (
        <Wrapper>
            <AnimatePresence>
                <Box 
                    key={Index}
                    variants={BoxVariants}
                    initial="initial"
                    animate="changeTabs"
                    exit="exitTabs"
                >
                    {Index}
                </Box>
            </AnimatePresence>
            <BtnContainer>
                <Btn onClick={prevTabs}>◀</Btn>
                <Btn onClick={nextTabs}>▶</Btn>
            </BtnContainer>
        </Wrapper>
    );
}

export default Slider;