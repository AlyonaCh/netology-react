// для отрисовки списков с картинкой и без (блок новостей, погоды, Эфир, посещаемое, телепрограмма)
function List(props) {
  const { items } = props
  return  (

    <div className="item-list">
      <ul>
        {items.map((item) =>
          <li key={item.id}>
            {'src' in item &&
              <img src={item.src} alt={item.alt}/>
            }
            {item.text}
          </li>
        )}
      </ul>
    </div>
    
          
  )
}

export default List;