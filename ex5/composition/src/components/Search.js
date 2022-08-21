// для отрисовки котировок
function Search(props) {
  return (
    <div className="item-list">
      {props.items.map((item) =>
        <a key={item.id} href={item.link}>{item.title}</a>
      )}
      <img src={props.logo} />
      <input type="text" />
      <p>{props.example}</p>
    </div>
    
          
  )
}

export default Search;