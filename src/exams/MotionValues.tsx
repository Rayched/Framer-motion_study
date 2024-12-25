import styled from "styled-components";
import {motion, useMotionValue, useMotionValueEvent} from "framer-motion";
import { BasicExams } from "./BasicExam";

const MotionWrapper = styled(BasicExams.Wrapper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        margin: 5px 0px;
    }
`;
const MotionBox = styled(BasicExams.Box)``;

function MotionValues(){
    const x = useMotionValue(0);
    console.log(x);

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
        x, 
        "change", 
        (latest) => console.log(`x = ${latest}`)
    );

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

    return (
        <MotionWrapper>
            <MotionBox 
                drag="x"
                dragSnapToOrigin
                style={{x}}
            />
            <div>
                <button onClick={MoveLeft}>◀</button>
                <button onClick={MoveRight}>▶</button>
            </div>
            <button onClick={() => x.set(0)}>Reset</button>
        </MotionWrapper>
    );
};

export default MotionValues;