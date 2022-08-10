import ShopCard from './ShopCard'

function CardsView(props) {
    const { cards } = props
    return  (
        <div className="cards">
            {cards.map((item, index) =>
                <ShopCard key={index} item={item}/>
            )}
        </div>
    )
}

export default CardsView;