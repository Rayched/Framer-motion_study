
### SVG Animation

<img src="refImgs/LogoAnimation_a.gif"/>

- 이번에 만들어볼 것은 로고 애니메이션이다.
- 이번 예제에서 사용한 로고는 아래 웹 사이트에서 받아왔다.
- **[Font Awesome](https://fontawesome.com/)**

- 필자는 `React` 로고를 가져와서 사용하긴 했지만
- 위의 웹 사이트에는 다양한 로고가 존재하기 때문에
- 취향에 맞는 걸로 사용하면 될 것이다.

---

- `Font Awesome`에서 `React` 로고의 `SVG` 코드를 `복사 + 붙여넣기`
- 적용한 결과는 다음과 같다.

<img src="refImgs/LogoAnimation/LogoAnimation_b.png"/>

``` tsx
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(135deg, rgb(174, 188, 244), rgb(8, 62, 171));
`;
const Box = styled.div`
	width: 200px;
	height: 200px;
	background-color: rgba(88, 116, 245, 0.8);
	border-radius: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Logos = styled.svg`
	width: 180px;
	height: 180px;
`;

function SVGExam(){
	return (
		<Wrapper>
			<Box>
				<Logos xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<motion.path d="..."/>
				</Logos>
			</Box>
		</Wrapper>
	);
}
```

- `<SVG />` 요소를 `styled-components`로 바꿔주고
- `Animation` 효과를 적용하기 위해서 `<path />`를 `<motion.path />` 변경하였다.

- 본격적으로 `Logo` 애니메이션 효과를 구현하기 전에
- 이걸 배우는 시점에서 `<svg />` 요소에 대해 잘 모르기 때문에 <br/>
	간략하게 `<svg />` 요소에 대해 다루고 넘어가도록 하겠다.

---

### `<svg />`

- `svg` => Scable Vector Graphics, XML 기반의 W3C 그래픽 표준 권고안
- 크기를 확대, 축소할 수 있는 수학적 함수를 이용해서  <br/>
	도형이나 선을 그려서 표현한 그래픽
- `px` 기반인 웹 페이지에서 픽셀의 영향을 받지 않는 `Vector` 이미지를 표현 가능
- `jpg, png, gif` 등의 이미지와 다르게 확대해도 해상도가 떨어지지 않는다.

``` html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
	<path d="..."/>
</svg>
```

#### `<svg>`의 `props`

- `xmlns` : XML 문서의 속성, namespace 의미한다.

- **`viewBox`**
	- `svg` 요소가 그려지는 영역에서, `svg`의 크기를 확대, 축소 <br/>
		그리고 위치를 조정할 수 있는 속성
		
	- `viewBox` 속성 없이도, 화면에 그릴 수는 있지만 <br/>
		이 경우에는 `svg` 요소의 크기가 고정된다.
		
	- `viewBox` 속성을 사용하면 화면 크기에 따라 <br/>
		`svg` 요소의 크기가 자동 조절된다.
		
	- 반응형 웹을 설계한다면 필수적으로 명시해야 하는 속성

	- `viewBox` 속성에 전달되는 값은 다음과 같은 형태이다.
	- `viewBox="[min-x] [min-y] [width] [height]"`
		- `(min-x, min-y)` 기준으로 `width * height` 크기의 사각형을 출력한다.
		- `viewBox="0, 0, 512, 512"`라면 `(0, 0)` 기준으로 <br/>
			`512 * 512px`의 화면을 `<svg />` 요소에 출력한다.

---

#### `<path />`

- `<svg />`에서 사용 가능한 다양한 도형을 그리는 요소 중 하나
- 사각형, 원, 타원, 다각형 등 다양한 도형을 그릴 수 있게 해준다.

- `svg`에서 그릴 도형의 모양은 `<path />` 요소의 `d` 속성에서 정의된다.
- 여기서 `d` 속성은 여러 개의 명령어와 Parameter로 구성됐다.

- 여기서 `path`에 대해 자세하게 다루지는 않고
- 이번 예제에서 사용할 몇 가지 `props`만 다룰 것이기에
- 상세한 내용은 아래 공식 문서 링크를 참고하길 바란다.

- **[SVG 튜토리얼 / 패스](https://developer.mozilla.org/ko/docs/Web/SVG/Tutorial/Paths)**

---

#### `<path />, props 몇 가지`

- `fill` : 도형을 채울 색상을 설정하는 속성
- `stroke`: 도형의 테두리 색상을 설정하는 속성
	- `stroke-width`: 도형의 테두리 굵기를 설정하는 속성
- `pathLength`: 도형을 그리는 선, 경로(path) 길이를 지정하는 속성

``` html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
	<path d="..."
		fill="rgba(255, 255, 255, 0)"
		stroke="currentColor"
		stroke-width="2"
	/>
</svg>
```

---

