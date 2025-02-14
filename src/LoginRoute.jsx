import {useState} from "react";
import UserHome from "./user/UserHome";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./user/Login";
import Mypage from "./user/Mypage";


function LoginRoute(){

    const [user,setUser]= useState(null);

    return(
        <Router>
            <Routes>
                <Route path ="/" element={<UserHome/>} />
                <Route path ="/login" element={<Login setUser={setUser}/>} />
                <Route path="/mypage" element={<ProtectedRoute>
                                                <Mypage user={user}/>
                                                 </ProtectedRoute>}/>
            </Routes>
        </Router>
    )
}

export default LoginRoute;