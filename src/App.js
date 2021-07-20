import './App.css';
import React,{useState} from 'react'
function App() {
  const [ko,setko] = useState('')
  const [en,setEn] = useState('')
  return (
    <div className="App">
        <header className="header">
          <div className="container">
            <h1 className="ko">{ko}</h1>
            <h1 className="en">{en}</h1>
          </div>
        </header>
        <div className="output">
          <input onChange={(e)=>{setko(e.target.value)}} type="text" placeholder='글작성' />
          <input type="text" placeholder="en" onChange={(e)=>{setEn(e.target.value)}}/>
         </div>
    </div>
  );
}

export default App;
