import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ChapUseState from "./Chapter/ChapUseState";
import PracticeUseState from "./Practice/PracticeUseState";
import ChapProps from "./Chapter/ChapProps/ChapProps";
import PracticeProps from "./Practice/PracticeProps"
import ChapArrowFunction from "./Chapter/ChapArrowFunction";
import ChapPropsFunction from "./Chapter/ChapProps/ChapPropsFunction";
import PracticePropsFunction from "./Practice/PracticePropsFunction";
import ChapPropsDefault from "./Chapter/ChapProps/ChapPropsDefault";
import PracticePropsDefault from "./Practice/PracticePropsDefault";
import ChapPropsArray from "./Chapter/ChapProps/ChapPropsArray";
import PracticePropsArray from "./Practice/PracticePropsArray";
import PracticePropsArray2 from "./Practice/PracticePropsArray2"
import ChapUseEffect from "./Chapter/ChapProps/ChapUseEffect";
import PracticeUseEffectAxios from "./Practice/PracticeUseEffectAxios";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* return 내에 사용할 수 있는 주석

        App.js 는 필수로 사용해야하는 자바스크립트 파일이 아님
        만일 App.js 가 아니라 다른 파일을 사용하길 원한다면
        파일명.js 를 import 해서 사용할 수 있음
        */}
        <App/>
            {/*<ChapPropsFunction/>*/}
        {/*<ChapUseState/>*/}
        {/*<PracticeUseState />*/}
        {/*<ChapProps />*/}
        {/*<PracticeProps/>*/}
        {/*    <PracticePropsFunction/>*/}
        {/*<ChapPropsDefault/>*/}
        {/*<PracticePropsDefault/>*/}
        {/*<ChapPropsArray/>*/}
        {/*<PracticePropsArray/>*/}
        {/*<PracticePropsArray2/>*/}
        {/*<ChapUseEffect/>*/}
        <PracticeUseEffectAxios/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();