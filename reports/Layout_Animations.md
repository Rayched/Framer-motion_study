
### `Layout Animations`

#### `layout props`

- `<motion />`의 `'layout' props`의 값을 `true` 설정하면 <br/>
	컴포넌트의 `layout`이 변할 때 자동으로 애니메이션 효과를 적용한다.

``` tsx
<motion.div 
	layout
	style={{justifyContent: true: "flex-start" : "flex-end"}}
/>
```

- `layout props` 통해서 이런 식의 애니메이션 효과를 구현할 수 있다.

<img src="refImgs/Layout/layout_sample.gif"/>

---
#### `Shared layout Animation`

- `'layoutId' props`는 동일한 `layoutId` 가진 `<motion />` 간의 <br/>
	애니메이션 효과를 적용할 수 있다.
- `layoutId` 가진 새 컴포넌트가 랜더링되고, 다른 컴포넌트가 제거되면 <br/>
	이전 컴포넌트에서 새 컴포넌트로 랜더링되는 과정에서 <br/>
	애니메이션이 실행된다.

``` tsx
return (
	<div>
		<Box>
			{
				isClick ? <motion.div layoutId="circle" /> : null
			}
		</Box>
		<Box>
			{
				isClick ? null : <motion.div layoutId="circle" />
			}
		</Box>
	</div>
);
```
---

### 예제

#### 예제 1

``` tsx
import {styled} from "styled-components";
import {motion} from "framer-motion";
import {useState} from "react";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(135deg, rgb(174, 188, 244), rgb(8, 62, 171));
`;

const Box = styled.div`
	width: 250px;
	height: 250px;
	display: flex;
	background-color: white;
	border-radius: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
	width: 50px;
	height: 50px;
	border-radius: 25px;
	background-color: rgb(8, 62, 171);
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Layout(){
	const [Click, setClick] = useState(false);
	const isClick = () => setClick((clicked) => !clicked);
	
	return (
		<Wrapper onClick={isClick}>
			<Box 
				style={{
					justifyContent: Click ? "center" : "flex-start",
					alignItems: click ? "center" : "flex-start"
				}}
			>
				<Circle />
			</Box>
		</Wrapper>
	);
}
```

- 화면을 클릭하면 박스 내부에 있는 공의 위치가 바뀌는 간단한 예제이다.
- `state` 통해서 `Click` 여부를 관리하고, 이에 따라 `Box` 하위 요소의 <br/>
	배치 방식을 변경하는 형태로 해서 예제를 구현하였다.

- 여기서 `layout`이 달라지는 요소는 `<Circle />`이기 때문에 <br/>
	해당 `Component`에 `layout props` 추가해보자.

``` tsx
function Layout(){
	/* 기존 코드 */
	return (
		<Circle layout />
	);
}
```

- 예제를 다시 확인해보면 화면 클릭 시 `<Circle />`의 위치가 바뀔 때 <br/>
	`Circle`에 애니메이션 효과가 추가된 것을 확인할 수 있다.

<img src="refImgs/Layout/layout_exam1.gif"/>

---

#### 예제 2

- 이번에는 예제에서 `Box`와 `Circle` 컴포넌트를 하나 더 추가해보자.

``` tsx
import {styled} from "styled-components";
import {motion} from "framer-motion";
import {useState} from "react";

const Wrapper = styled.div`...`;

const Box = styled.div`
	width: 250px;
	height: 250px;
	display: flex;
	background-color: white;
	border-radius: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	
	/*New*/
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

const Circle = styled(motion.div)`...`;

function Layout(){
	const [Click, setClick] = useState(false);
	const isClick = () => setClick((clicked) => !clicked);
	
	return (
		<Wrapper onClick={isClick}>
			<Box>
				{Click ? <Circle /> : null}
			</Box>
			<Box>
				{Click ? null : <Circle />}
			</Box>
		</Wrapper>
	);
}
```

- 이전 예제에서 `Box` 하나 더 추가한, 화면 클릭 시 `Circle`의 위치가 바뀌는 예제이다.

<img src="refImgs/Layout/layout_exam2_before.gif"/>

- 화면 클릭 여부를 관리하는 `state`이 `true/false`냐에 따라 <br/>
	`<Circle />`를 Rendering하거나 아니면 `null`을 return한다.

- 시각적으로 봤을 때 화면을 클릭하면 두 `Box` 사이에서 <br/>
	`Circle`의 위치가 바뀌는 형태이다.

- 이제 `<Circle />`에 `layoutId` 추가해보자.

``` tsx
function Layout(){
	const [Click, setClick] = useState(false);
	const isClick = () => setClick((clicked) => !clicked);
	
	return (
		<Wrapper onClick={isClick}>
			<Box>
				{Click ? <Circle layoutId="circle"/> : null}
			</Box>
			<Box>
				{Click ? null : <Circle layoutId="circle"/>}
			</Box>
		</Wrapper>
	);
}
```

<img src="refImgs/Layout/layout_exam2_after.gif"/>

- `state, 'Click'`의 값에 따라 `<Box />` 컴포넌트 내부의 <br/>
	`<Circle />`이 랜더링되거나 삭제되는 과정의 애니메이션이 추가됐다.

- 화면을 클릭하면 두 개의 `Box` 사이에서 `Circle`이 움직이는 것 같은 <br/>
	애니메이션 효과가 자동으로 추가된 것을 확인할 수 있다.

---
