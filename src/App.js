import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState} from "react";
function App() {
  const [cards, setCards] = useState([])
  const [formTaskName, setFormTaskName]=useState([])
  const loadTasks = () => {
    console.log('load starts');
    axios ({
      method:'GET',
      url:'https://pasv-kanban.herokuapp.com/card'
    }).then(res => {console.log(res.data)
    setCards(res.data)
    })
  };


  const createTask = () => {
      axios ({
          url:'https://pasv-kanban.herokuapp.com/card',
          method:'POST',
          data: {
              name: formTaskName,
              'status':'todo',
              'priority': 1
          }
      }).then (()=> {loadTasks()
      setFormTaskName('')
      })
  }
  return (
    <div>
      <button onClick={loadTasks}>Load Tasks</button>
      <ul>

        {cards.map(el => <li key={el.id}>{el.name}</li>)}
      </ul>
      <hr/>
      <input value={formTaskName} onChange={e => setFormTaskName(e.target.value)}/>
        <button onClick={createTask}>Create Task</button>
    </div>
  );
}

export default App;
