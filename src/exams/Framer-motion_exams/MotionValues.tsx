import styled from "styled-components";
import {motion, useMotionValue, useScroll, useTransform} from "framer-motion";

const MotionWrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    button {
        margin: 5px 0px;
    }
`;

const MotionBox = styled(motion.div)`
    width: 180px;
    height: 180px;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function MotionValues(){
    const y = useMotionValue(0);
    const x = useMotionValue(0);
    const {scrollYProgress} = useScroll();

    const bgColor = useTransform(x, [-400, 0, 400], [
            "linear-gradient(135deg, rgb(255, 255, 255), rgb(134, 205, 218))",
            "linear-gradient(135deg, rgb(176, 233, 243), rgb(43, 195, 222))",
            "linear-gradient(135deg, rgb(174, 188, 244), rgb(8, 62, 171))"
    ]);

    const BoxColors = useTransform(y, [-200, 0, 200], [
        "rgba(255, 255, 255, 0.1)",
        "rgba(255, 255, 255, 0.5)",
        "rgba(255, 255, 255, 1.0)"
    ]);

    return (
        <MotionWrapper style={{background: bgColor}}>
            <MotionBox 
                drag
                dragSnapToOrigin
                style={{x, y, backgroundColor: BoxColors}}
            />
        </MotionWrapper>
    );
};

export default MotionValues;