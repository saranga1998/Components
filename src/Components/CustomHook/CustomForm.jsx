import React from 'react'
import useForm from './useForm'

function CustomForm() {

    const [firstname , bindFirstname,resetFirstname] = useForm('')
    const [lastname , bindLastname,resetLastname] = useForm('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        resetFirstname()
        resetLastname()
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
        <label>First Name</label>
            <input type='text' {...bindFirstname}></input>
        </div>
        <div>
        <label>Last Name</label>
            <input type='text'{...bindLastname}></input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CustomForm
