//Switch -> Route 명칭 변환 도입에 쓰임
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const PizzaDetail = () => {
    const {id} = useParams(); //url에서 id값 가져오기 ajax에서 urlSearchParams와 같은 역할

    const [pizza, setPizza] = useState(null);

    // useNavigate = 현재 위치를 기반으로 하여 앞으로가기 뒤로가기와 같은 설정
    /*
    hook
    useNavigate() React Router 에서 제공하는 페이지 이동 함수

    navigate(-1) : 뒤로가기
    navigate(1)  : 앞으로가기
    navigate("/"): 홈으로 이동
    navigate("경로설정") : Link 대신 위치 이동
    -> window.location.href 와 동일한 기능
     */

    const navigate = useNavigate();

    const backBtn = () => {
        navigate(-1);
    }

    //axios get을 이용해 상세정보 호출하기
    //@requestMapping("/api") @GetMapping("/pizzas/{id}") 참조

    useEffect(() => {

        axios
            .get(`http://localhost:8080/api/pizzas/${id}`)
            .then(
                (res) => {
                    setPizza(res.data);
                }
            )
            .catch(
                () => {
                    alert("데이터 가져오는데 문제 발생");
                }
            )

    }, []);

    if(!pizza){
        return (
            <div>
                로딩중
            </div>
        )
    }


    return (
        <>
            <h1>피자 상세보기</h1>
            <div key={pizza.id}>
            <p>가격 : {pizza.price} 원</p>
            <p>피자 설명 상세보기 : {pizza.description}</p>
            <button onClick={backBtn}>뒤로가기</button>
            </div>
        </>
    )
}

export default PizzaDetail;