//ViewController 처럼 주소와 js를 연결해주는 컨트롤러와 같은 설정
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import PizzaList from "./BackendAPI/PizzaList";
import PizzaDetail from "./BackendAPI/PizzaDetail";
//경로를 설정해주는 js 파일은 function을 많이 사용

//React 에서 작성하는 경로는 view controller 와 관계 없음
//springboot resource 밑에 작성한 css/js/html 파일은 더이상 의미가 없음
//위 역할을 react 에서 모두 할 것이기 때문

// const RootPath=()=>{ }
function RootPath() {
    return(

            <Routes>
                <Route path="/" element={<PizzaList/>}/>
                <Route path="/pizzas/detail/:id" element={<PizzaDetail/>}/>
            </Routes>

    )
}
export default RootPath;