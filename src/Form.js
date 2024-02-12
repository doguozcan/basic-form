import { useState, useRef } from 'react'

export default function Form() {
  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
  })

  const firstNameRef = useRef(null)

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setInputValue({ ...inputValue, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)

    if (inputValue.firstName && inputValue.lastName) {
      alert(
        `Form successfully submitted with the following values: ${inputValue.firstName} ${inputValue.lastName}`
      )
      setInputValue({ firstName: '', lastName: '' })
      setSubmitted(false)
      firstNameRef.current.focus()
    }
  }

  const inputStyle = 'border border-2 rounded-md p-2 shadow-sm text-center'

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <input
        className={inputStyle}
        name="firstName"
        value={inputValue.firstName}
        placeholder="First Name"
        onChange={handleChange}
        ref={firstNameRef}
      ></input>
      {submitted && !inputValue.firstName ? (
        <p className="text-red-500">Please enter your first name</p>
      ) : (
        ''
      )}
      <input
        className={inputStyle}
        name="lastName"
        value={inputValue.lastName}
        placeholder="Last Name"
        onChange={handleChange}
      ></input>
      {submitted && !inputValue.lastName ? (
        <p className="text-red-500">Please enter your last name</p>
      ) : (
        ''
      )}
      <button className="bg-slate-200 rounded-md p-2 shadow-sm" type="submit">
        Submit
      </button>
    </form>
  )
}
