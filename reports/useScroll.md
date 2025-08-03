
### `useScroll()`

- `Progress Indicator`나 `Parallax Effect (패럴랙스 이펙트, 시차 효과)`와 같이
- 마우스 스크롤과 관련된 애니메이션 효과를 만들 때 사용하는 Hook
	- `Progress Indicator`
		- 시스템이 중단되거나, 사용자 입력을 기다리고 있지 않음을 확인하기 위해 <br/>
			작업이 진행 중임을 사용자에게 알리기 위한 인터페이스 요소

<img src="refImgs/useScroll/useScroll_sample.gif"/>

- 위의 이미지를 확인해보면, 스크롤의 움직임에 따라
- 화면 상단에서 빨간색 바가 조금씩 채워지는 모습을 볼 수 있다.

- 즉, `useScroll()`은 위의 이미지와 같이 마우스 스크롤에 연동된 <br/>
	애니메이션 효과를 만드는 Hook이라고 이해하면 된다.

---

- `useScroll()`은 아래 4개의 `motion value`를 return 한다.
	- `scrollX` / `scrollY`
	- `scrollXProgress` / `scrollYProgress`

---

### `useScroll()` 사용 예시

- `Neflix` 클론 코딩 작업 중 발췌




