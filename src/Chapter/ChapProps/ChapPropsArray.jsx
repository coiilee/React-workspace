

const ChapPropsArray = () => {
    return (
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

const ChildOne = ({name, age}) => {
    return (
        <div>
            <h2>name,age로 가져온 사용자 목록</h2>
            <ul>
                <li>{name}/{age} </li>

            </ul>
        </div>
    )

}
const ChildTwo = (props) => {
    return (
        <div>
            <h2>props로 가져온 사용자 목록</h2>
            <ul>
                <li>{props.name} / {props.age}</li>
            </ul>
        </div>
    )

}
//메인으로 확인할 배열 리스트 users{}를 사용하는 여부는 상관 X
const ChildThree = ({users}) => {
    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/*배열 형식으로 단일 데이터가 아닌 2개 이상의 데이터를 표기할 것*/}
                {/*
                1. map()-> return 생략 가능 / UI로 표현해줄 때 많이 사용
                Parent에서 가져온 변수이름.map(반복문 내에서 사용할 변수이름, 번호순서=index) => (<li key={index}> {user.name} / {user.age} </li>)   */}

                {/*
                2. map{} -> return 반드시 사용해야함 / UI와 기능을 동시에 표한할 때 많이 사용.
                Parent에서 가져온 변수이름.map(반복문 내에서 사용할 변수이름, 번호순서=index} => { return(<li key={index}> {user.name} / {user.age}  </li> ); }  */}
                {

                    users.map((user, index) => (
                        <li key={index}>{user.name} / {user.age} </li>))
                }

                {
                    users.map((user, index) => {
                        return (
                            <li key={index}>{user.name} / {user.age} </li>)
                    })

                }

            </ul>
        </div>
    )

}

const Parent = () => {
    //javascript를 작성하는 공간
    //name 과 age 를 담을 배열을 생성 -> 추후 데이터 베이스로 가져온 값으로 변경될 것

    //배열 형태는 []로 작성
    const numberList = [1, 2, 3]
    const stringList = ["가", "나", "다"]

    //만약 배열에서 한 칸 당 두개씩 값을 가져오고 싶다면 {}로 감싸서 가져오기 가능
    const numStringListOne = [
        {number: 1, String: "가"},
        {number: 2, String: "나"},
        {number: 3, String: "다"}]
    //DB에서 가져온 값을 표기할 때 사용할 배열 방식 [{React에서 가져온 DB를 사용할 변수 이름1번 : JavaBackend에서 전달받은 데이터1번 ,
    //                                        React에서 가져온 DB를 사용할 변수 이름2번 : JavaBackend에서 전달받은 데이터2번}]
    //java Backend에서 가져온 데이터를 사용할 때 왼쪾에서 작성한 변수이름으로 작성하겠다.
    const numStringListTwo = [{numberList: numberList, stringList: stringList}]
    const userList = [{name: "홍길동", age: 25},
        {name: "김철수", age: 35},
        {name: "김영희", age: 45},
    ]
    return (
        //html 태그 작성하는 공간
        <>
            <h1>부모->자식 데이터를 전달 ( 기본 형태로 전달 )</h1>
            <ChildOne name="가나다" age={10}/>
            <ChildTwo name="마바사" age={20}/>
            <h1>부모->자식 데이터를 전달 ( 배열 형태로 전달 )</h1>
            <ChildThree users={userList}/>
        </>
    )
}

export default ChapPropsArray;



















