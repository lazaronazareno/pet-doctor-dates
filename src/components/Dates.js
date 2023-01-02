import React from 'react'
import Date from './Date'
import PropTypes from 'prop-types'

const Dates = ({ dates, deleteDate }) => {
  const title = dates.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <div className='mx-2 bg-light rounded p-2 dates'>
      <h1>{title}</h1>
      <div className='fake-table fake-head d-flex gap-4 py-2 my-2'>
        <p className='card-title'>Mascota</p>
        <p className='card-subtitle text-muted'>Dueño</p>
        <p className='card-text mb-0'>Fecha</p>
        <p className='card-text mb-0'>Hora</p>
        <p className='card-text'>Anotaciones</p>
      </div>
      {dates.map(date => (
        <Date key={date.id} date={date} deleteDate={deleteDate} />
      ))}
    </div>
  )
}

Dates.propTypes = {
  dates: PropTypes.array.isRequired,
  deleteDate: PropTypes.func.isRequired
}

export default Dates
