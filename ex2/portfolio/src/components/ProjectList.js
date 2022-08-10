
function ProjectList(props) {
    const { items } = props

    return  (
        <div className="images">
            {items.map((item, index) =>
                <div key={index}>
                    <img src={item.img}></img>
                </div>
            )}
        </div>
    )
}

export default ProjectList;