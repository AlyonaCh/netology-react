import React, { useState } from 'react';
function Form(props) {
    const { addNote } = props
    const [form, setForm] = useState({
      id: null,
      body: ''
    })

    const submitNote = evt => {
      evt.preventDefault()
      addNote(form)
      setForm(() => ({
        id: null,
        body: '',
      }))
    }

    const handleChenge = evt => {
      setForm((prevForm) => ({
        ...prevForm, [evt.target.name]: evt.target.value
      }))
    }

    return  (
      <>
        <form onSubmit={submitNote} method="POST">
          <label>New Note
            <textarea name="body" value={form.body} onChange={handleChenge}></textarea>  
          </label>
          <input type="submit" value="ОК" />
        </form>
      </>
    )
}


export default Form;