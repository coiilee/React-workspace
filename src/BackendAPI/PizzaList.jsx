import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const PizzaList = () => {

    const [pizzas, setPizzas] = useState([]);

    /*
    () => {}
    소괄호나 중괄호 내부에 들어갈 변수 이름이나 기능이 하나만 존재한다면 괄호 생략 가능
    변수이름이나 기능이 두가지 이상 존재한다면
    괄호를 필수로 작성해야함
    예시 :
    useEffect (   () => {}, []   )
    useEffect (   event => {}, []   )            ->소괄호 생략
    useEffect (   () => alert("안녕"),[] )        ->중괄호 생략
    useEffect (   event => alert(event),[] )     ->소괄호 중괄호 생략
    useEffect (   (event) => {alert(event)},[] ) ->소괄호 중괄호 모두 사용


    useEffect (   (event,xyz) => {                   -> 소괄호 중괄호 모두 생략 불가
                                    setPizzas("피자")
                                    alert(event)
                                    },[] )


    .then(  () => {}  )
    .then(    (res) => {setPizzas(res.data)}   ) -> 소괄호 중괄호 모두 사용
    .then(    res   => {setPizzas(res.data)}   ) -> 소괄호 생략
    .then(    (res) => setPizzas(res.data)  )    -> 중괄호 생략
    .then(     res  => setPizzas(res.data)   )   -> 소괄호 중괄호 모두 생략

    .then(      (res,rep)   =>  {                 -> 소괄호 중괄호 모두 생략 불가
                                    setPizzas("피자")
                                    alert(event)
                                    },[]  )

     */


    useEffect(() => {
        axios
            .get("http://localhost:8080/api/pizzas")
            .then( //8080/api/pizzas에서 데이터 가져오기에 성공했다면
                (res) => { //res = response = 응답
                    setPizzas(res.data); //res.data = get 으로 전달받은 데이터를 -> setPizzas 에 리스트로 저장하는 것
                }
            )
            .catch(
                () => {
                    alert("백엔드에서 데이터 가져오기를 실패했습니다.");
                }
            )
    }, []);


    return (
        <div>
            <h2>피자 메뉴🍕</h2>

            {/*<ul><li>태그를 <div><div> 태그로 변경해서 설정 */}
            {pizzas.map(pizza => {
                return (
                    <div key={pizza.id}>
                        <h3>{pizza.name}</h3>
                        <p>가격 : {pizza.price} 원</p>
                        <p>{pizza.description}</p>
                    {/*    react 는 a 태그 대신 Link 태그를 이용해      */}
                        <Link to={`/pizzas/detail/${pizza.id}`}>
                            <button>상세보기</button>
                        </Link>
                    </div>
                )

            })
            }



            {/*<ul>*/}
            {/*/!* axios 로 가져온 피자 목록을 map 으로 전달받아 보여주기 *!/*/}

            {/*    {pizzas.map((pizza) => (*/}
            {/*            // <li key={index}> -> index는 무조건 0번부터 시작함*/}
            {/*            <li key={pizza.id}>*/}
            {/*                <h3>{pizza.name}</h3>*/}
            {/*                <p>가격 : {pizza.price} 원</p>*/}
            {/*                <p>{pizza.description}</p>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    )}*/}
            {/*</ul>*/}


        </div>
    )
}

export default PizzaList;