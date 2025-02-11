/*
* package.json 에서
* dependencies 내부에
*   "axios"가 작성되어 있다면 더이상 npm i axios를 하지 않아도 됨
*   왜냐하면 설치가 되어있기 때문에 my-app 폴더 내에서 언제든지 axios를 사용할 수 있음
*
 */

import {useEffect,useState} from "react";
import axios from "axios";


const APIDog = () => {
    const [dog,setDog] = useState("");

    const dogBtn = () => {
        axios
            .get("https://api.thedogapi.com/v1/images/search")
            .then(
                (res)=> {
                    setDog(res.data[0].url);
                }
            )
            .catch(
                ()=> {
                    alert("api 데이터를 가져올 수 없습니다.")
                }
            )
    }


    return(
        <div>
            <h1>랜덤 강아지 사진</h1>
            {dog ? <img src={dog}/> : <p>로딩중</p>}
            <button onClick={dogBtn}>강아지 사진 보기</button>
        </div>
    )
    // axios 형식으로
    // https://api.thedogapi.com/v1/images/search
    // 최초 1회 강아지 사진 랜덤 출력 후
    // 강아지 사진 새로고침 버튼을 클릭했을 때
    // 새로운 강아지 사진이 보일 수 있도록 설정
}

// const APIRandomJoke = () => {
//
//     const[setup,setSetup] = useState("");
//     const[delivery,setDelivery] = useState("");
//
//     useEffect( () => {
//         axios
//             .get("https://v2.jokeapi.dev/joke/Any")
//             .then (
//                 res=> {
//                     setSetup(res.data.setup)
//                     setDelivery(res.data.delivery)
//                 }
//             )
//     },[])
//
//     return(
//         <>
//         <h1>랜덤으로 농담 설정하기</h1>
//             {setup ? <p>{setup}</p>  :  <p>로딩중</p>}
//             {delivery ? <p>{delivery}</p>  :  <p>로딩중</p>}
//         </>
//     )
// }

const APIRandomJoke = () => {

    const[joke,setJoke] = useState({setup: "", delivery: ""});

    useEffect( () => {
        axios
            .get("https://v2.jokeapi.dev/joke/Any")
            .then (
                res=> {
                   setJoke({setup : res.data.setup , delivery : res.data.delivery})
                }
            )
    },[])

    return(
        <>
            <h1>랜덤으로 농담 설정하기</h1>
            {joke.setup? <p>{joke.setup}</p>  :  <p>로딩중</p>}
            {joke.delivery? <p>{joke.delivery}</p>  :  <p>로딩중</p>}

        </>
    )
}


const APIUser = () => {

    const [user, setUser] = useState("");

    const userBtn= () => {
        axios
            .get("https://randomuser.me/api/")
            .then(
                (res)=> {
                    setUser(
                        res.data.results[0]
                    )
                }
            )
            .catch(
                ()=>{
                    alert("api 데이터 불러오기 실패")
                }
            )
    }

    useEffect( () => {
        userBtn();
    },[])

    return(
        <div>
        <h1>유저 불러오기</h1>
            {user ? <p>{user.name.first}{user.name.last}</p> : <p>로딩중</p>}
            {user ? <p>{user.email}</p> : <p>로딩중</p>}
            {user ? <img src={user.picture.medium}/> : <p>로딩중</p>}
            <button onClick={userBtn} >유저 불러오기</button>
        </div>
    )
};


const APIUser=()=>{

}






const PracticeUseEffectAxios = () => {

    return(
        <>
            {/*<APIDog/>*/}
        {/*<APIRandomJoke/>*/}
            <APIUser/>
        </>
    )
}




export default PracticeUseEffectAxios;