// Для отрисовки основных блоков с заголовком и картинкой или основным телом по условию (блок новостей, работа над ошибками,
//  погоды, карта германии, Эфир, посещаемое, телепрограмма)
import Body from './Body'
function Block(props) {
    return  (
      <>
        {'image' in props &&
          <img src={props.image} alt={props.alt} />  
        }
        <h5 className="title">{props.title}</h5>
        {'text' in props &&
          <p className="text">{props.text}</p>
        }
        {'body' in props &&
          <Body {...props.body}/>
        }
      </>
    )
}


export default Block;