
### `Variants` (1)

- Components가 가질 수 있는 미리 정의된 시각적 `state`
- `motion components`에서 사용할  `Animation state` 미리 정의할 수 있다.

- 이전에 만들어둔 `Animation` 예제에 `Variants` 적용해보자.

``` tsx
import {motion} from "framer-motion";
import {styled} from "styled-components";

//variants props에 전달하기 위해 만든 객체
//여러 <motion/>에 적용하려고 만든 Animation Sample이라고 생각하자.

const VarSamples = {
	start: { scale: 0 }, //<-> initial
	end: {
		scale: 1,
		rotateZ: 360,
		transition: {
			type: "spring",
			delay: 1,
			duration: 2
		}
	} //<-> animate (+transition)
};

function App(){
	/** 
		Before Code's
		<Box 
			initial={{scale: 0}}
			animate={{scale: 1, rotateZ: 360}}
			transition={{type: "spring", delay: 1, duration: 2}}
		/>
	*/
	//After Code's (use variants)
	return (
		<Wrapper>
			<Box
				variants={VarSamples} 
				initial="start"
				animate="end"
			/>
		</Wrapper>
	);
	/*
		'initial="start" animate="end"' 식으로 해도되고
		아니면 initial={VarSamples.start} animate={VarSamples.end}
		형식으로 설정해도 둘 다 문제 없이 적용된다.
	*/
};
```


