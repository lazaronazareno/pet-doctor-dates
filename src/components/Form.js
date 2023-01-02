import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const Form = ({ addDate, handleShowForm }) => {
  const [values, setValues] = useState({
    pet: '',
    name: '',
    date: '',
    time: '',
    syntoms: ''
  })
  const [error, setError] = useState(false)

  const { pet, name, date, time, syntoms } = values

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pet.trim() === '' || name.trim() === '' || date.trim() === '' ||
        time.trim() === '' || syntoms.trim() === '') {
      console.log('error')
      console.log(error)
      setError(true)
      return
    }

    setError(false)

    // can change for native uuid -> console.log(crypto.randomUUID())
    values.id = uuidv4()
    addDate(values)

    setValues({
      pet: '',
      name: '',
      date: '',
      time: '',
      syntoms: ''
    })
    handleShowForm()
  }

  return (
    <>
      {error ? <p className='text-danger'>Todos los campos son obligatorios</p> : null}

      <form
        className='d-flex flex-column gap-2 px-1'
        onSubmit={handleSubmit}
      >
        <label className='form-label'>Nombre Mascota</label>
        <input
          type='text'
          name='pet'
          className='w-100 form-control'
          placeholder='Nombre mascota'
          onChange={handleChange}
          value={pet}
        />
        <label className='form-label'>Nombre Dueño</label>
        <input
          type='text'
          name='name'
          className='w-100 form-control'
          placeholder='Nombre Dueño de la mascota'
          onChange={handleChange}
          value={name}
        />
        <label className='form-label'>Fecha</label>
        <input
          type='date'
          name='date'
          className='w-100 form-control'
          onChange={handleChange}
          value={date}
        />
        <label className='form-label'>Hora</label>
        <input
          type='time'
          name='time'
          className='w-100 form-control'
          onChange={handleChange}
          value={time}
        />
        <label className='form-label'>Sintomas</label>
        <textarea
          className='w-100 form-control'
          name='syntoms'
          onChange={handleChange}
          value={syntoms}
        />
        <button
          type='submit'
          className='btn sidebar-button'
        >Agregar Cita
        </button>
      </form>
    </>
  )
}

Form.propTypes = {
  addDate: PropTypes.func.isRequired
}

export default Form
