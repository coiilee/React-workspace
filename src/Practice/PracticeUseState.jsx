import {useState} from "react";


function PracticeUseState(){
    return(
        <div>
            {/*

            function이나 const 로 작성한 기능과 html 내용을
            메인 기능에 보여주길 원한다면,
            html 태그 형식처럼 기능 명칭을 작성해주고 / 닫는 태그를 사용할 것

            */}
            <UseStateOne/>
            <UseStateTwo/>
            <UseStateThree/>
            <UseStateFour/>
        </div>
    )
}

const UseStateOne= () =>{
    //사용자가 입력한 텍스트를 화면에 표시하는 컴포넌트 생성
    //text라는 변수이름을 사용해서 값 설정
    const [text,setText] = useState("");

    return(
        <div>
            <input type="text" placeholder="텍스트를 입력하세요"
            value={text}
                   onChange={(e)=>setText(e.target.value)}
            />
            <p>입력한 값 :{text}</p>
        </div>
    )
}

const UseStateTwo= () =>{
    //랜덤 숫자 생성하기
    //변수이름  : text
    const [text,setText]=useState(0);

    const randomBtn = ()=>{
        setText(Math.floor(Math.random() * 100) + 1);
    }

    return(
        <div>
            <p>랜덤 숫자: {text}</p>
            <button onClick={randomBtn}>랜덤숫자생성</button>
        </div>
    )
}

const UseStateThree= () => {

    //좋아요와 좋아요 취소를 번갈아가며 표시하는 컴포넌트 기능
    const [liked,setLiked] =useState(false);

    return(
        <div>
            <button onClick={  ()  => setLiked(!liked)}>
                {   liked ?   "좋아요 취소": "좋아요"      }
            </button>

            <p>
                {      liked        ?"😊좋아요를 눌렀습니다!"     : "😐좋아요를 눌러보세요!"}
            </p>
        </div>
    )
}

const UseStateFour = () => {
//버튼 클릭시 "안녕하세요" => "반갑습니다 변경
    const[text,setText]=useState("안녕하세요");

    return(
        <div>
            <p>{text}</p>
            <button onClick={()   =>   setText("반갑습니다.")     }>글자변경</button>
        </div>
    )
}

export default PracticeUseState;