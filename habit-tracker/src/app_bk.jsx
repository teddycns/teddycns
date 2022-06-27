import React from 'react'
import './app.css';

function App() {
  const name = 'elie';
  const age = undefined ;
  return (
    <>
    <h1>Hello :)</h1>
    {name && <h1> Hello! {name}</h1>} {/* name 값이 존재하다면 출력 */}
    {age && <h1> Hello! {age}</h1>} {/* age 값이 존재하다면 출력 */}

    {['❤', '🍎'].map(item => (
      <h1>{item}</h1>
    ))}
    </>
  );
}

export default App;
