
function ItemImage(props) {
    const { img } = props
    return  (
      <img src={img ? img.url_570xN : 'https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg'} />
    )
}


export default ItemImage;