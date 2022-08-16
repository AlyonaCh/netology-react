import ItemImage from './ItemImage'
import ItemTitle from './ItemTitle'
function Item(props) {
    const { item } = props
    const getPrice = function () {
      if (item.currency_code == 'USD') {
        return '$' + item.price
      } else if (item.currency_code == 'EUR') {
        return '€' + item.price
      } else {
        return item.price + item.currency_code
      }
    }
    const getClass = function () {
      if (item.quantity <= 10) {
        return 'item-quantity level-low'
      } else if (item.quantity <= 20) {
        return 'item-quantity level-medium'
      } else {
        return 'level-high'
      }
    }
    return  (
        <div className="item">
          <div className="item-image">
            <a href={item.url}>
                <ItemImage img={item.MainImage} />
            </a>
          </div>
          <div className="item-details">
            <ItemTitle title={item.title} />
            <p className="item-price">{getPrice()}</p>
            <p className={getClass()}>
              {item.quantity} left
            </p>
          </div>
        </div>
    )
}


export default Item;