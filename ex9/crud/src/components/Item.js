import React, {useContext, useState} from 'react';
import ItemsContext from '../contextes/Item'
import {useParams, useNavigate} from 'react-router-dom'
function Item() {
  const context = useContext(ItemsContext);
    const {id} = useParams();
    const item = context.items.find(o => {
      return o.id == id
    });
    const [form, setForm] = useState({
      id: item ? item.id : 0,
      content: item ? item.content : ''
    })
    let [edit, setEdit] = useState(false)
    const navigate = useNavigate();

    const submitNote = evt => {
      evt.preventDefault()
      fetch('http://localhost:7777/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
        .then((res) => context.loadItems())
        .then((res) => navigate("/posts"))
        .catch((e) => console.log(e))
        setForm(() => ({
          id: 0,
          content: '',
        }))
    }

    const delNote = evt => {
      evt.preventDefault()
      fetch(`http://localhost:7777/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .then(
          (result) => {
            navigate("/posts")
          },
          (error) => {
          }
        )
    }

    const handleChenge = evt => {
      setForm((prevForm) => ({
        ...prevForm, [evt.target.name]: evt.target.value
      }))
    }

    const handleChengeEdit = () => {
      setEdit((prevForm) => (!prevForm))
    }

    
    return (
    <div>
      <h1>{`Note №${id}`}</h1>
      <p>
        {item ? item.content : 'Не найден'}
      </p>
      <div>
        <button onClick={handleChengeEdit}>edit</button>
        <form onSubmit={delNote} method="DELETE">
          <input type="submit" value="Delete" />
        </form>
      </div>
      {(item && edit) &&
        <form onSubmit={submitNote} method="POST">
              <label>Edit Note
                <textarea name="content" value={form.content} onChange={handleChenge}></textarea>  
              </label>
              <input type="submit" value="ОК" />
            </form>
      }
    </div>
    );
}


export default Item;