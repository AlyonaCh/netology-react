// для отрисовки котировок
function Prices(props) {
  const { items } = props
  return  (
    <div className="item-list">
      {items.map((item) =>
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.dif}</p>
        </div>
      )}
    </div>
    
          
  )
}

export default Prices;