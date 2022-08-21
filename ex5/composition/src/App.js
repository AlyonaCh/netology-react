import Block from './components/Block'
import Prices from './components/Prices'
import Search from './components/Search'
function App() {
  const news = {id:0,title:'title', body:{items:[{id:0,src:'',alt:'',text:''}]}}
  const mistake = {id:1,title:'title',image:'',alt:'', text:'text'}
  const weather = {id:2,title:'title', body:{image:'',alt:'',items:[{id:0,text:''}]}}
  const mapG = {id:3,title:'title', text:'text'}
  const ephir = {id:4,title:'title', body:{items:[{id:0,src:'',alt:'',text:''}]}}
  const haunted = {id:5,title:'title', body:{items:[{id:0,text:''}]}}
  const tv = {id:6,title:'title', body:{items:[{id:0,text:''}]}}
  const search = {logo:'logo',example:'example', items:[{id:0,link:'',title:''}]}
  const items = [news,mistake,weather,mapG,ephir,haunted,tv]
  const prices = [{id:0,title:'',price:0,dif:0}]
  return (
    <div className="App">
      <Prices items={prices}/>
      <Search {...search}/>
      <img src="" alt="promo"/>
      {items.map((item) =>
        <Block key={item.id} {...item}/>
      )}
    </div>
  );
}

export default App;
