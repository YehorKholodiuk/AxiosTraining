import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState} from "react";
function App() {
  const [cards, setCards] = useState([])
  const loadTasks = () => {
    console.log('load starts');
    axios ({
      method:'GET',
      url:'https://pasv-kanban.herokuapp.com/card'
    }).then(res => {console.log(res.data)
    setCards(res.data)
    })
  };
  return (
    <div>
      <button onClick={loadTasks}>Load Tasks</button>
      <ul>

        {cards.map(el => <li key={el.id}>{el.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
