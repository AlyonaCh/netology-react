
function ShopCard(props) {
    const { item } = props
    return  (
        <div className="cards__item">
            <h3>{item.name}</h3>
            <p>{item.color}</p>
            <img src={item.img}></img>
            <div>
                <p>${item.price}</p>
                <button>ADD to cart</button>
            </div>
        </div>
    )
}

export default ShopCard;