import ItemImage from './ItemImage'
function Item(props) {
    const { item } = props
    return  (
        <div className="item">
          <div className="item-image">
            <a href={item.url}>
                <ItemImage img={item.MainImage} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">{item.currency_code + item.price}</p>
            <p className="item-quantity level-medium">{item.quantity} left</p>
          </div>
        </div>
    )
}

export default Item;