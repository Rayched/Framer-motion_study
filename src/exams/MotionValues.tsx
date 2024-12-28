import styled from "styled-components";
import {motion, useMotionValue, useMotionValueEvent, useTransform} from "framer-motion";
import { BasicExams } from "./BasicExam";

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
const MotionBox = styled(BasicExams.Box)``;

function MotionValues(){
    const x = useMotionValue(0);
    const rotateZ = useTransform(x, [-400, 400], [-360, 360]);
    const background = useTransform(
        x, 
        [-400, 0, 400], 
        [
            /**
             * left, center, right
             */
            "linear-gradient(135deg, rgb(179, 237, 247), rgb(183, 235, 244))",
            "linear-gradient(135deg, rgb(135, 228, 245), rgb(107, 209, 227))",
            "linear-gradient(135deg, rgb(61, 90, 209), rgb(8, 62, 171))"
        ])

    /*
    useEffect(() => {x.onChange(() => console.log(x.get()))}, [x]);
     * 강의에서 사용했던 Box의 위치값을 console에 띄우는 방법
     * 다만 현 시점에선 사용할 수 없는 방법이다.
     *
     * useMotionValueEvent() Hook으로 대체 가능하기에
     * 아래와 같이 코드를 작성해서
     * Box의 x축 값을 추적, console에 출력까지 할 수 있다.
    */

    useMotionValueEvent(
        rotateZ, 
        "change", 
        (latest) => console.log(`scales: ${latest}`)
    );

    /**
     * MotionWrapper의 background 속성 값으로
     * useTransform의 return value 전달
     */
    return (
        <MotionWrapper style={{background}}>
            <MotionBox 
                drag="x"
                dragSnapToOrigin
                style={{x}}
            />
        </MotionWrapper>
    );
};

/**
 * 버튼 Logic
 * <div>
        <button onClick={MoveLeft}>◀</button>
        <button onClick={MoveRight}>▶</button>
    </div>
    <button onClick={() => x.set(0)}>Reset</button>

    const MoveRight = () => {
        const oldX = x.get();
        const newX = x.set(oldX+50);

        return newX;
    };

    const MoveLeft = () => {
        const oldX = x.get();
        const newX = x.set(oldX-50);

        return newX;
    }
 */
export default MotionValues;