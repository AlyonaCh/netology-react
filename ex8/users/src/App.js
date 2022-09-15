
import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List'
import Details from './components/Details'

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
      fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        .then(response => response.json())
        .then(data => setUsers(() => data))
  },[]);

  const chooseUser = (id) => {
    setUser(() => users.find((item) => item.id == id))
  }
  
  return (
    <div className="App">
      <List users={users} chooseUser={chooseUser} id={user.id}/>
      <Details info={user}/>
    </div>
  );
}

export default App;
