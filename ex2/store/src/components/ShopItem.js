
function ShopItem(props) {
    const { item } = props
    return  (
        <div className="list__item">
            <img src={item.img}></img>
            <h3>{item.name}</h3>
            <p>{item.color}</p>
            <p>${item.price}</p>
            <button>ADD to cart</button>
        </div>
    )
}

export default ShopItem;