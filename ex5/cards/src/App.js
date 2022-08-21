import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card'

function App() {
  
  return (
    <div className="App">
      <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." link="#">
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
      </Card>
      <Card title="Special title treatment" text="With supporting text below as a natural lead-in to additional content" link="#"></Card>
    </div>
  );
}

export default App;
