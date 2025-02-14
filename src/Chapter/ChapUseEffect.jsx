import {useEffect, useState} from "react";
import axios from "axios";

//axios 를 가져올 때 프로젝트당 최초 1회 해야 할 작업 존재함
// npm i axios 로 axios 기능 설치 해야함
//회사 or 개인이 만든 특정 기능을 설치하기 원한다면
//npm i 기능명칭 또는 npm install 기능명칭 설치
//https://www.npmjs.com/ 설치와 사용 방법 작성되어 있음

const AxiosApiCat=()=>{
    const[cat,setCat] = useState("");

    const catBtn = () => {
        axios
            .get("https://api.thecatapi.com/v1/images/search")
            .then(
                (res) => {
                    setCat(res.data[0].url);
                })
            .catch(
                ()=> {
                    alert("API에서 데이터를 가져올 수 없습니다. 백엔드를 확인하세요.")
                }
            )
    }

    useEffect(() => {
        axios
            .get("https://api.thecatapi.com/v1/images/search")
            .then(
                (res) => {
                setCat(res.data[0].url);
            })
            .catch(
                ()=> {
                    alert("API에서 데이터를 가져올 수 없습니다. 백엔드를 확인하세요.")
                }
            )

    }, []);

    return (
        <div>
            <h1>랜덤 고양이 사진</h1>
            {cat ? <img src={cat}/> : <p>로딩중</p>}
            <button onClick={catBtn}>새로운 고양이 보기</button>
        </div>
    )
}

const FetchApiCat = () => {
    //ajax, axios 이전에 javascript 내에서 만든 api 전달, 전송 기능
    // a 라는 명칭이 존재하는 함수 useEffect(() => function a() {}, []);
    //기능을 다른 const나 function에서 재사용할 이유가 없는 익명함수 : useEffect(() => {}, []);
    const[cat,setCat] = useState(""); // cat에다가 고양이 사진이 들어있는 url에서 사진을 찾아 보여줄 것

    const[loading,setLoading] = useState(true); //데이터 가져오는 로딩 상태 추가
    //데이터를 가져오는 속도와 useEffect 가 실행되는 속도 차이

    useEffect(() => {
        //https://api.thecatapi.com/v1/images/search
        fetch("https://api.thecatapi.com/v1/images/search") // api url 을 작성하는 공간
            .then((res)=> res.json())

            .then(                                                //데이터 가져오기 성공햇다면
                (data)=>{                               //가져온 데이터를 특정 값에 전달해서 화면으로 보여주기
                /*특정 값에 데이터 전달 */
                    setCat(data[0].url) //https://api.thecatapi.com/v1/images/search 가 배열 형태이기 때문에
                                        //index 0번째 자리한 url 주소를 가져와서 cat에 전달할 수 있도록 설정한 것
            })
            .catch(                                                                 //데이터 가져오기 실패했다면
                () => {

                alert("API 주소에서 데이터를 가져올 수 없습니다. 백엔드를 확인하세요.");

                }
            )
            .finally(()=> {
                setLoading(false); //로딩 완료 후 상태 변경
            })

    }, []); // [] 최초1회만 실행


    return(
        <div>
            <h1>랜덤 고양이 사진</h1>

            {cat ? <img src={cat}/>  : <p>로딩중</p> }
        </div>
    )
}

const ChapUseEffect = () => {

    /*
    useEffect 컴포넌트의 생명 주기 관리
    컴포넌트가 실행될 때 특정 작업을 실행할 수 있음 (렌더링 될 때)

    렌더링 : 서버로부터 html 파일을 받아서 브라우저에 표기하는 과정
    ex) 로그인 렌더링 : 로그인 화면과 로그인에 관련된 스타일, 스크립트 실행

    render = rendere = 주다,제공하다,표현하다
    렌더링(rendering) :
        백엔드에서 렌더링이란? DB에서 데이터를 가져와 눈에 보이는 형태로 화면에 표기
        프론트엔드에서 렌더링이란? HTML, CSS, JS 를 눈에 보이는 형태로 표기



     */

    //특정 JAVASCRIPT 화면이 보여질 때 마다
    //최초, 몇 초, 몇분, 몇 시간마다 새로고침하여 데이터를 보여주는 HOOK

    /*
    작성방법 :
    useEffect (  (event 나 매개변수 자리) => { 실행할 기능들을 작성하는 공간 }, [특정 값이 변경될 때마다 실행]  );
    useEffect (  () => {  } []); 만약에 []가 비어있을 경우 최초 1회 실행
    useEffect (  () => {  });    특정 js를 호출할 때마다 실행
    useEffect (  () => {
                // 로그인화면 로그인 완료 , 로그인 상태를 유지
                   return() =>  {
                      //특정 컴포넌트 사용을 더이상 하지 않을 때
                      //실행할 내용 작성
                      //예를 들어 : 로그아웃 했을 경우
                   }
     } []);
    useEffect (  () => {
                   return() => {}
     } []);
     */


    return(
        <div>
            {/*<FetchApiCat/>*/}
            <AxiosApiCat/>
        </div>
    )
}








export default ChapUseEffect;