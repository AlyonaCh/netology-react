import ShopItem from './ShopItem'
function ListView(props) {
    const { items } = props
    return  (
        <div className="list">
            {items.map((item, index) =>
                <ShopItem key={index} item={item}/>
            )}
        </div>
    )
}

export default ListView;