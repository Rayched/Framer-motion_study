import { motion } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";

interface I_dragItem {
    targetNm: string;
    targetIdx: number;
}

//Framer-motion의 <Reorder /> 사용하지 않고, Drag and Drop 구현
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, rgb(174, 188, 244), rgb(8, 62, 171));
`;

const Box = styled(motion.div)`
    width: 320px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const DragItems = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18em;
    height: 5em;
    border-radius: 20px;
    background-color: rgb(194, 190, 195);
    margin: 7px 0px;

    span {
        background-color: inherit;
        font-size: 1.2em;
        font-weight: bold;
    };
    &:hover {
        background-color: rgb(215, 220, 217);
    }
`;

function DnDExam_old(){
    const [Items, setItems] = useState([1, 2, 3, 4, 5]);
    const dragItem = useRef(); 
    //Drag할 Item Index
    const dragOverITem = useRef(); 
    //드랍할 위치에 있는 Item의 Index

    const DragInit = (idx: any) => {
        console.log(dragItem);
        dragItem.current = idx;
        //드래그한 Item의 index 저장
        console.log(dragItem);
        console.log(idx);
    };

    const DragEnter = (idx: any) => {
        console.log(dragOverITem);
        dragOverITem.current = idx;
        //드래그한 Item이 접근한 영역의 index 저장
        console.log(dragOverITem);
        console.log(idx);
    };

    const ItemDrop = (e: any) => {
        const newList = [...Items];
        //기존 Items의 사본 생성, 저장
        const dragItemValue = newList[Number(dragItem.current)];
        //Items의 사본에서 드래그 한 아이템과 동일한 요소 가져옴

        newList.splice(Number(dragItem.current), 1);
        //Items의 사본에서 드래그한 아이템이 들어갈 위치에 있는
        //기존 요소를 삭제한다.
        newList.splice(Number(dragOverITem.current), 0, dragItemValue);
        //그리고 기존 요소를 삭제해서 빈 자리가 된 부분에
        //앞에서 추출해온 데이터를 추가한다.

        dragItem.current = undefined;
        dragOverITem.current = undefined;
        //드래그한 아이템의 index, 드래그 할 위치의 index
        //다음을 위해 저장해둔 정보 삭제하고 undefined로 초기화

        setItems(newList);
    };

    return (
        <Wrapper>
            <Box>
                {
                    Items.map((item, idx) => {
                        return (
                            <DragItems 
                                key={item}
                                draggable
                                onDragStart={() => DragInit(idx)}
                                onDragEnter={() => DragEnter(idx)}
                                onDragEnd={ItemDrop}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                <span>{"Item 0" + item}</span>
                            </DragItems>
                        );
                    })
                }
            </Box>
        </Wrapper>
    );
};

export default DnDExam_old;