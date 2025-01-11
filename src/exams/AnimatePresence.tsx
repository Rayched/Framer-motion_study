import styled from "styled-components";
import { BasicExams } from "./BasicExam";
import { AnimatePresence, delay, motion } from "framer-motion";
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
    width: 180px;
    height: 180px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    margin-bottom: 5px;
`;

const HideBtn = styled.button`
    width: 70px;
    height: 30px;
    font-size: 16px;
    border: 0px;
    border-radius: 7px;
    position: absolute;
    top: 450px;
    background-color: rgb(174, 188, 244);
`;

const BoxVariants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    showing: {
        opacity: 1,
        scale: 1,   
    },
    hiding: {
        opacity: 0,
        x: 100
    }
};


function PresenceExam(){
    const [Hide, setHide] = useState(false);

    const setShowing = () => setHide(!Hide);

    return (
        <Wrapper>
            <AnimatePresence>
                {
                    Hide ? null 
                    : (
                        <Box 
                            variants={BoxVariants}
                            initial="initial"
                            animate="showing"
                            exit={{
                                opacity: 0,
                                x: 100
                            }}
                            transition={{
                                duration: 0.4
                            }}
                        />
                    )
                }
            </AnimatePresence>
            <HideBtn onClick={setShowing}>
                {Hide ? "Show" : "Hide"}
            </HideBtn>
        </Wrapper>
    );
};

export default PresenceExam;