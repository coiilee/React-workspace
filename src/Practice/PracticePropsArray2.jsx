const PracticePropsArray2 = () => {
    return(
        <div>
            <Parent/>
        </div>
    )
}

const MusicPlay = ({ songs }) => {
    return (
        <div>
            <h2>🎵 음악 재생 목록</h2>
            <ul>
                {
                    songs.map((songs,index)=> (
                        <div key={index}>
                            제목: {songs.title}, 가수 : {songs.artist}
                        </div>
                    ))
                }
            </ul>
        </div>
    );
};

MusicPlay.defaultProps= {
   songs: "재생 목록이 없습니다."
}

const Tod = ({ tasks }) => {
    return (
        <div>
            <h2>✅ 할 일 목록</h2>
            <ul>
                {
                    tasks.map((tasks,index)=> {
                        return(
                            <li key={index}>
                            <input type="checkbox" checked={tasks.done}/>
                                할일: {tasks.task}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

Tod.defaultProps = {
    task: "할 일이 없습니다."
}

const TeamMembers = ({ teamMember }) => {
    return (
        <div>
            <h2>👥 팀원 목록</h2>
            <ul>
                {
                    teamMember.map((teamMember,index)=>(
                        <div key={index}>
                           이름: {teamMember.name}, 담당 직무 : {teamMember.role}
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
                    (<div key={index}>
                        품명: {cartItems.item} , 수량: {cartItems.quantity}
                    </div>
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
                    <div key={index}>
                        행사명: {events.name}, 날짜: {events.date}
                    </div>
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
            <Tod tasks={tasks}/>
            <TeamMembers teamMember={teamMembers}/>
            <ShoppingCart cartItems={cartItems}/>
            <EventSchedule events={events}/>
        </div>
    )

}


export default PracticePropsArray2;
