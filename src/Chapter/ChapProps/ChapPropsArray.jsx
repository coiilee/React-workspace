const ChapPropsArray = () => {
    return(
        <div>
            {/*
            <Parent><Parent/>
            만약에 태그 내부에 요소로 특정 값을 넣거나
            특별히 설정할 일이 없다면 아래와 같이 단축해서 작성할 수 있음
            */}
            <Parent/>
        </div>
    )
}

const ChildOne = ({name,age}) => {
    return(
        <div>
            <h2>name,age로 가져온 사용자 목록</h2>
            <ul>
                <li>{name}/{age} </li>

            </ul>
        </div>
    )

}
const ChildTwo = (props) => {
    return(
        <div>
            <h2>props로 가져온 사용자 목록</h2>
            <ul>
                <li>{props.name} / {props.age}</li>
            </ul>
        </div>
    )

}
//메인으로 확인할 배열 리스트
const ChildThree = () => {
    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/*배열 형식으로 단일 데이터가 아닌 2개 이상의 데이터를 표기할 것*/}

            </ul>
        </div>
    )

}

const Parent = () => {
    //javascript를 작성하는 공간
    return(
        //html 태그 작성하는 공간
        <>
            <h1>부모->자식 데이터를 전달 ( 기본 형태로 전달 )</h1>
            <ChildOne name="가나다" age={10}/>
            <ChildTwo name="마바사" age={20}/>
            <h1>부모->자식 데이터를 전달 ( 배열 형태로 전달 )</h1>
            <ChildThree/>
        </>
    )
}

export default ChapPropsArray;



















