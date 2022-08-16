
function ItemTitle(props) {
    const { title } = props
    return  (
      <p className="item-title">{title.length <= 50 ? title : title.slice(0, 49) + '...'}</p>
    )
}

ItemTitle.defaultProps = {
  title: ''
}

export default ItemTitle;