import React, { useState, useContext } from 'react';
import { useNavigate, Link } from "react-router-dom";
import ItemsContext from '../contextes/Item'
function Form(props) {
    const context = useContext(ItemsContext);
    const [form, setForm] = useState({
      id: 0,
      content: ''
    })
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


    const handleChenge = evt => {
      setForm((prevForm) => ({
        ...prevForm, [evt.target.name]: evt.target.value
      }))
    }

    return  (
      <>
        <Link to="/posts">x</Link>
        <form onSubmit={submitNote} method="POST">
          <label>New Note
            <textarea name="content" value={form.content} onChange={handleChenge}></textarea>  
          </label>
          <input type="submit" value="Опубликовать" />
        </form>
      </>
    )
}


export default Form;