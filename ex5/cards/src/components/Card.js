function Card(props) {
    const {title, text, link} = props

    const divStyle = {
      width: '18rem',
    };

    return  (
      <div className="card" style={divStyle}>
        {props.children}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={link} className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    )
}

export default Card;