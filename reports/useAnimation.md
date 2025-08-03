
### `useAnimation()`

- 시작 및 중지 메서드가 있는 AnimationControls를 만들 수 있게 하는 Hook
- 애니메이션을 동시에 실행시키고 싶을 때 유용한 Hook

``` ts
import {motion, useAnimation} from "framer-motion";

const MyComponents = () => {
	const Controls = useAnimation();
	return (
		<motion.div animate={Controls} />
	);
};
```

- 기본적으로 위와 같이 작성하고, 애니메이션은 `Controls.start` 메서드로 실행한다.

``` ts
import {motion, useAnimation} from "framer-motion";

const MyComponents = () => {
	const Controls = useAnimation();
	Controls.start({x: "100%", transition: {duration: 3}});
	
	return (
		<motion.div animate={Controls} />
	);
};
```