
### `framer-motion`

- `framer`에서 제공하는 `React` 용 `Animation Library`
- `Netflix`에서 영화나 드라마 아이콘에 마우스를 가져다 대면  <br/>
	해당 영화나 드라마 아이콘이 커진다거나 하는 등
- 멋진 `animation` 효과를 구현하기 쉽게 해주는 라이브러리라고 생각하자.

- 아래 명령어를 통해 설치할 수 있고, `motion`을 import해보자.

``` shell
npm install framer-motion
```

``` tsx
//motion import
import {motion} from "framer-motion";
import {styled} from "styled-components";

const Wrapper = styled.div``;
const Box = styled.div``;

function App(){
	return (
		<Wrapper>
			<Box />
		</Wrapper>
	);
}
```

- `framer-motion`의 모든 기능들은 `motion` Component 안에서 작동한다.
- 기존에 만들어 둔 `styled-components`에서 `framer-motion` 적용하려면 <br/>
	아래와 같이 `motion Component` 상속하는 형태로 수정해주면 된다.

``` tsx
import {motion} from "framer-motion";
import {styled} from "styled-components";

const Wrapper = styled.div``;
//const Box = styled.div``;
const Box = styled(motion.div)``; 

function App(){
	return (
		<Wrapper>
			<Box />
		</Wrapper>
	);
}
```

---

### `motion props`

#### `props: initial`

- `Animation` 효과가 시작하는 방식을 명시하는 `<motion />`의 `props`
-  `motion Component`가 처음 Render 될 때의 상태를 명시한다.
- 만약 Render 시, `Animation` 효과가 적용이 안된 상태를 원한다면 <br/>
	`initial={false}`로 설정하면 된다.

``` tsx
import {motion} from "framer-motion";
import {styled} from "styled-components";

const Wrapper = styled.div``;
const Box = styled(motion.div)``; 

function App(){
	return (
		<Wrapper>
			<Box 
				initial={{scale: 0}}
				animate={{scale: 1, rotateZ: 360}}
			/>
		</Wrapper>
	);
	/*
		scale: 지정한 크기만큼 요소를 확대/축소 시키는 속성
	*/
}
```

---
#### `props: transition`

- `initial`이 `Animation`이 시작되기 전의 모습을 설정한다면
- `transition`은 `Animation`이 진행되는 형식을 지정하는 `props`이다.
- 이때 지정되는 `Animation`의 형식은 총 3가지이다.
	- `tween`: 기본 값 (between 약어), 기본적인 CSS Animation 형식에 가깝다.
	- `spring`: `Animation`이 끝나도, 요소가 약간의 탄성을 가지게 하는 형식
	- `Inertia`: 관성과 관련이 있다고 한다. <br/>
			(결과물을 확인하지 못해서 잘 모르겠다...)

``` tsx
function App(){
	return (
		<Wrapper>
			<Box 
				initial={{scale: 0}}
				animate={{scale: 1, rotateZ: 360}}
				transition={{type: "spring", delay: 1, duration: 2}}
			/>
		</Wrapper>
	);
};
/*
	아무것도 없는 빈 화면에서 약 1초 뒤에 Box가 회전하면서 나타난다.
	(scale: 1로 설정, 기본 크기)
*/
```

---

