import React, { useState } from 'react';

import Form from './components/Form'
import List from './components/List'
import { nanoid } from 'nanoid';
import WatchModel from './models/WatchModel'
function App() {
  const [watches, setWatches] = useState([])

  const addWatch = (watch) => {
    setWatches(prevWatches => [...prevWatches, new WatchModel(nanoid(), watch.name, watch.zone)])

  }

  const delWatch = (id) => {
    setWatches(prevWatches => prevWatches.filter((item) => item.id != id))  
  }

  return (
    <div className="App">
      <Form addWatch={addWatch} />
      <List watches={watches} delWatch={delWatch} />
    </div>
  );
}

export default App;
