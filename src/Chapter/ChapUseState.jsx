//ChapuseState.jsx      ChapuseState.js


import {useState} from "react";
//리액트 자체에 내장되어 있는 기본 기능
//컴포넌트의 상태를 관리하는 기능

function ChapUseState() {

    //자바스크립트 변수 이름 선언하는 방법
    //1. 단일 변수 이름 선언
    const abc=1;

    //2. 기본값을 가진 변수이름 선언, 기본값을 변형할 변수이름 선언
    //값을 새로 생성해서 변형할 값을 넣는 변수이름 앞에 set을 추가하는 이유는
    const [xyz,setXyz] = useState(0);
    // xyz 변수이름이 기본으로 가져야 할 값을 설정

    //edf와 setEdf 모두 0의 값을 가짐
    //useState를 사용하지 않고 일반 숫자(0) 배열 구조 분해해서 사용하려 했기 때문에 문제 발생
    //문제되는 변수 선언 = const[edf,setEdf] = 0;
    // const [edf,setEdf] = 0;

    //                   기본 초기값 = 숫자, 배열, 문자열, 문자 논리값 무엇이든 들어갈 수 있음
    //     초기값        , 초기값에 새로 저장할 값 = useState(기본초기값 설정);
    const [count, setCount] = useState(0);

    //function()은 더 큰 기능임
    //function 내에 const로 기능 명칭을 설정해주는게 좋음
    function 감소버튼1(){

    }

    //                어떤 이벤트 들어왔을때 함수를 실행하겠다
    //const 기능명칭 = (                   ) => {실행할 기능들 작성}
    const 감소버튼2 = () => {
        setCount(count-1);
    }

    return (
        <div>
            <h1>useState 사용 시작하기</h1>
            {/* return 위에 존재하는 자바스크립트에서
                특정 변수 이름을 사용할 때는 {자바스크립트변수이름} 작성 */}
            <p>현재 카운트 : {count}</p>
            <button onClick={()=> setCount(count+1)}>증가</button>
            <button onClick={감소버튼2}>감소</button>
            {/*
            클릭 이벤트 내에 사용해야 하는 기능을 직접적으로 작성하는 방식 지양할 것
            onClick 숫자 감소 이외 추가적인 기능을 작성할 때 제한이 있기 때문에
            버튼 실행시 실행할 함수를 정의한 후 함수 이름을 가져와서 설정
            <button onClick={()=> setCount(count-1)}>감소</button>
            */}
        </div>
    )
}
//만약 export default가 회색 글자라면 외부에서 사용하지 않기 때문에 회색 글자인 것
export default ChapUseState;