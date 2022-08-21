// Основная часть карточки (блок новостей, погоды, Эфир, посещаемое, телепрограмма)
import List from './List'
function Body(props) {
      return  (
        <>
            {'image' in props &&
                <img src={props.image} alt={props.alt} />  
            }
            {'items' in props &&
                <List items={props.items}/>
            }
        </>
      )
  }
  
  
  export default Body;