import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';

// react v17까지는 아래와 같이 코드 작성
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root') // root라는 id에 App component를 연결한다. (index.html에 root id 선언)
// );


// react v18에서는 이렇게 코드 작성
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);