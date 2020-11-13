# 김주호 201740206
## Movie_app_2020
React Js Fundamentals Course 2020

## 11월 13일
>1. 장르 출력하기 (genres 속성추가)
>2. App.css와 Movie.css로 카드모양으로 출력하기
>4. 시놉시스 180자로 제한하기 (summary.slice(0, 180) 이용)
>5. title 수정 (이름 Movie App)
>6. 라우터 이용해서 네이게이션 만들기

## 11월 6일
>1. App 컴포넌트에 HTML 추가(<session>, <div>, <span> 등)
>2. Movie 컴포넌트에 HTML 추가(data, year, summary 속성 추가)
    warning => 리액트에서는 class가 아닌 className 속성을 사용해야 함.
>3. 영화 포스터 이미지 추가 (<img> 태그 사용)
>4. Movie 컴포넌트에서 id 속성은 필요없으니 지움
>5. Movie.css와 App.css 생성
>6. Movie 컴포넌트에 genres props 넘겨주기
    warning => genres는 필수인데 undefined라서 에러
>7. App 컴포넌트 수정(genres props 값 넘겨줌)
>8. class를 className으로 수정
>9. genres 속성 출력 (map함수, <ul>, <li>)
    warning => key props 추가하지 않아서
>10. <li>에 key props 추가

## 10월 30일
>1. 객체 key값으로 영화 데이터 가져오기
>2. 키와 대입할 변수의 이름이 같으면 축약할 수 있다.
>3. isLoading state true에서 false로 로딩 상태 변경하기
>4. Movie 컴포넌트 만들기 (함수형)
>5. Movie.propTypes 작성하기
>6. 영화 데이터 평점순으로 내림차순으로 정렬
>7. App 컴포넌트에서 Movie 컴포넌트 그리기 (map()함수 이용)
>8. Movie 컴포넌트에 props 전달하기 (console에서 확인)
>9. key props 추가 (경고 메시지 없애기)


## 10월 16일
>1. constructor()함수는 props인자와 super(props) 키워드를 사용한다.
>2. componentDidMount(): 컴포넌트가 처음 화면에 그려지면 실행되는 함수
>3. Life Cycle: constructor() -> render() -> componentDidMount()
>4. componentDidUpdate(): 화면 업데이트시 실행되는 함수
>5. Life Cycle: setState() -> render() -> componentDidUpdate()
>6. componentWillUnmount(): 컴포넌트가 화면에서 떠날 때 실행되는 함수(컴포넌트가 죽을때, 언마운트)
>7. 데이터 로딩 상태 표시하기
>8. 로딩 현상 구현하기 => setTimeout((), 6000);
>9. 영화 데이터는 배열에 담는다.
>10. 영화 API 사용해 보기(axios 도구 사용)
>11. axios.get('URL') 함수 이용해서 API 호출
>12. getMovies() 메서드 만들기 => axios.get()함수는 componentDidMount()에서 실행된다.
>13. 데이터를 받아오는 axios.get()을 실행하려면 시간이 필요하고, 그 사실을 자바스크립트에 알려야 함 => async, await 키워드 사용



## 10월 7일
>1. prop-types를 이용한 평점 매기기
>2. .isRequired는 props가 필수가 아니라면 붙이지 않아도 된다.
>3. state로 숫자 증감 기능 만들기
>4. 클래스형 컴포넌트를 만들때는 React.Component를 상속 받는다.
>5. 클래스형 컴포넌트는 render()함수가 JSX를 반환한다.
>6. state를 사용하려면 반드시 클래스형 컴포넌트 안에서, 소문자를 이용하여 state 라고 적는다.
>7. state는 직접 변경하는 코드를 작성하면 안된다.
>8. setState() 함수를 이용해 state의 데이터를 업데이트한다.


## 09월 25일
>1. foodILike에 이미지 추가
>2. 콘솔에서 map()함수 실습
>3. img 엘리먼트에 alt 속성 추가하기


## 09월 18일
>1. 컴포넌트가 무엇인지 알아보고 JSX를 학습.
>2. JSX는 단지 HTML과 자바스크립트를 조합한 문법이다.
>3. JSX를 이용해서 컴포넌트를 작성.
>4. 컴포넌트의 이름은 대문자로 시작한다.
>5. 컴포넌트에 데이터를 전달할 때는 props를 사용한다.
>6. 점 연산자를 대신해서 ES6의 구조 분해 할당을 사용할 수 있다.
>7. 리액트는 다수의 컴포넌트로 이루어지나, 최종적으로는 하나의 컴포넌트만 사용한다.
* 언제까지? 9월 23일까지.

## 09월 11일
>1. Dothome에 indexfile 수정하기
>2. readme.md 수정 후 Github에 push하기.
* 언제까지? 9월 16일까지.