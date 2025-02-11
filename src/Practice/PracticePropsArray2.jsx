const PracticePropsArray2 = () => {
    return(
        <div>
            <Parent/>
        </div>
    )
}

const MusicPlay = ({songs}) => {
    return (
        <div>
            <h2>🎵 음악 재생 목록</h2>
            <ul>
                {
                    songs.map((songs,index)=> (
                        <li key={index}>
                            {songs.title || "재생 목록이 없습니다."} - {songs.artist}
                            <br></br>
                            {/*제목: {songs.title? songs.title : "알 수 없음"} 가수 : {songs.artist}*/}
                            제목: {songs.title} 가수 :{songs.artist}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

// {}은 배열이 아님.
//songs 에서 작성된 목록에서 값을 가져오는 것
//defaultProps 부모에게서 특정 값을 가져오지 못할 때를 대비해서 설정

//부모에서 상태를 전달할 때는 props.songs 자체가 undefined 상태일 때 적용 
//상태 관리가 부모 컴포넌트 이외 외부 작성했을 경우 많이 불러옴
MusicPlay.defaultProps={
    songs: [
        {
            title : "알 수 없음 ",
            artist: "아티스트 미상"
        }
    ]
}

const Todo = ({ tasks }) => {
    return (
        <div>
            <h2>✅ 할 일 목록</h2>
            <ul>
                {
                    tasks.map((task,index)=> {
                        return(
                            <li key={index}>
                            <input type="checkbox" checked={task.done}/>
                                할일: {task.task || "할 일이 없습니다."}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

//삼항연산자로 표현
const TodoList = ({ tasks }) => {
    return (
        <div>
            <h2>✅ 할 일 목록</h2>
            <ul>
                {
                    tasks.map((task,index)=> {
                        //done=boolean=true,false값은 화면에 보이지 X
                        //화면에 보여지기 위해서는 값 변환을 해서 넣어줘야 함

                        return(
                            <li key={index}>
                                {task.task} - {task.done? "완료" : "미완료"}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

Todo.defaultProps = {
  task: "할 일이 없습니다."
}

const TeamMembers = ({ teamMember }) => {
    return (
        <div>
            <h2>👥 팀원 목록</h2>
            <ul>
                {
                    teamMember.map((teamMember,index)=>(
                        //javascript 를 작성하는 공간
                        //예를 들어 가격 표시할 때 DB에 작성된 가격에 한국기준 , 를 표기하는 것과 같은 설정을 하는 공간
                        <div key={index}>
                           이름: {teamMember.name || "등록된 팀원이 없습니다."} 담당 직무 : {teamMember.role}
                        </div>
                    ))
                }
            </ul>
        </div>
    );
};
TeamMembers.defaultProps = {
    name : "등록된 팀원이 없습니다.",
    role: "등록된 팀원이 없습니다."
}

const ShoppingCart = ({ cartItems }) => {
    return (
        <div>
            <h2>🛒 쇼핑 장바구니</h2>
            <ul>
                {cartItems.map((cartItems,index)=>
                    (<li key={index}>
                        품명: {cartItems.item || "장바구니가 비었습니다."} , 수량: {cartItems.quantity}
                    </li>
                    ))}
            </ul>
        </div>
    );
};
ShoppingCart.defaultProps = {
    item: "장바구니가 비었습니다."
}

const EventSchedule = ({ events }) => {
    return (
        <div>
            <h2>📅 행사 일정</h2>
            <ul>
                {events.map((events,index)=> (
                    <li key={index}>
                        행사명: {events.name }, 날짜: {events.date || "예정된 행사가 없습니다."}
                    </li>
                ))
                }
            </ul>
        </div>
    );
};
EventSchedule.defaultProps= {
    name : "예정된 행사가 없습니다."
}



const Parent=()=>{
    //추후 DB로 값 전달받거나, 전달할 상태 작성
    //javascript 정규식과 같은 코드
    //javascript 공간

    const songs = [
        { title: "Attention", artist: "Charlie Puth" },
        { title: "Shape of You", artist: "Ed Sheeran" },
        { title: "Dynamite", artist: "BTS" },
        { artist: "Black Pink" }
];
    const tasks = [
        { task: "React 공부하기", done: false },
        { task: "운동하기", done: true },
        { task: "책 읽기", done: false },
        { done: false }
    ];

    const teamMembers = [
        { name: "김철수", role: "프론트엔드 개발자" },
        { name: "박영희", role: "백엔드 개발자" },
        { name: "이민호", role: "디자이너" },
        { role: "시스템 개발자" }
    ];

    const cartItems = [
        { item: "노트북", quantity: 1 },
        { item: "무선 마우스", quantity: 2 },
        { item: "키보드", quantity: 1 }
    ];

    const events = [
        { name: "React 컨퍼런스", date: "2025-03-10" },
        { name: "개발자 밋업", date: "2025-04-22" },
        { name: "해커톤", date: "2025-05-15" }
    ];

    return(
        <div>
            <MusicPlay songs={songs}/>
            <Todo tasks={tasks}/>
            <TeamMembers teamMember={teamMembers}/>
            <ShoppingCart cartItems={cartItems}/>
            <EventSchedule events={events}/>
            <TodoList tasks={tasks}/>
        </div>
    )

}


export default PracticePropsArray2;
