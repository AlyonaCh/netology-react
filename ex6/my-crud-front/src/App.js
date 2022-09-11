
import React from 'react';
import Form from './components/Form'
import List from './components/List'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      items: [],
      error: ''
    };
  }

  loadItems() {
    fetch("http://localhost:7778/notes")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error: error
        });
      }
    )
  }

  componentDidMount() {
    this.loadItems()
  }
  
  addNote (note) {
    fetch("http://localhost:7778/notes", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    })
      .then(res => res.json())
      .then(
        (result) => {
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )

  }

  delNote (evt) {
    fetch(`http://localhost:7778/notes/${evt.target.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(
        (result) => {
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <>
          <input type="button" onClick={this.loadItems.bind(this)} value="Обновить"/>
          <List items={items} delNote={this.delNote}/>
          <Form addNote={this.addNote}/>
        </>
        
      );
    }
  }

}

export default App;
