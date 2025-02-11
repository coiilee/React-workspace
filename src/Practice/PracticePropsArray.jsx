const PracticePropsArray = () => {

    return (
        <div>
            <Parent/>
        </div>
    )
}


const User = ({users}) => {
    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/*    map () 형태로 데이터 불러오기 "ㅇㅇㅇ" 님은 ㅁㅁ세입니다*/}
                {users.map((user, index) => (
                    <li key={index}>{user.name} 님은 {user.age}세입니다.</li>))}
            </ul>
        </div>
    )
}

const Product = ({products}) => {
    return (
        <div>
            <h2>제품 목록</h2>
            <ul>
                {
                    products.map((product, index) => {
                        return (
                            <li key={index}>제품명: {product.name} 제품가격: {product.price}</li>
                        )
                    })}
                {/*    map {} 형태로 데이터 불러오기  제품명 - ㅇㅇㅇ, 제품가격 - ㅁㅁㅁ */}
            </ul>
        </div>
    )
}

const Score = ({scores}) => {
    return (
        <div>
            <h2>학생 점수 목록</h2>
            <ul>
                {
                    scores.map((scores, index) => (
                        <li key={index}>{scores.name}의 점수는 {scores.score}점 입니다.</li>
                    ))
                }
            </ul>
        </div>
    );
};

const Order = ({orders}) => {
    return (
        <div>
            <h2>주문 내역</h2>
            <ul>
                {
                    orders.map((orders, index) => {
                            return (
                                <li key={index}>주문한 메뉴 : {orders.item} , 수량 : {orders.quantity}</li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    );
};

const Book = ({books}) => {
    return (
        <div>
            <h2>도서 목록</h2>
            <ul>
                {
                    books.map((books, index) => (
                        <li key={index}>도서제목 : "{books.title}", 작가 : {books.author}</li>
                    ))
                }
            </ul>
        </div>
    );
};


const Parent = () => {

    //부모 컴포넌트에서 전달할 데이터 작성하기


    const userList = [
        {name: "가나다", age: 5},
        {name: "마바사", age: 15},
        {name: "아자차", age: 25},
    ]

    const productList = [
        {name: "노트북", price: 1200000},
        {name: "스마트폰", price: 800000},
        {name: "태블릿", price: 600000},
    ];

    const scoresList = [
        {name: "김영희", score: 95},
        {name: "이철수", score: 88},
        {name: "박민준", score: 76}
    ];

    const ordersList = [
        {item: "커피", quantity: 2},
        {item: "샌드위치", quantity: 1},
        {item: "케이크", quantity: 3}
    ];

    const booksList = [
        {title: "자바스크립트 완벽 가이드", author: "David Flanagan"},
        {title: "리액트 프로그래밍", author: "김민수"},
        {title: "모던 프론트엔드 개발", author: "이정환"}
    ];


    return (
        <div>
            {/*각 데이터 자식 컴포넌트에 각각 전달*/}
            <User users={userList}/>
            <Product products={productList}/>
            <Score scores={scoresList}/>
            <Order orders={ordersList}/>
            <Book books={booksList}/>
        </div>
    )
}


export default PracticePropsArray;