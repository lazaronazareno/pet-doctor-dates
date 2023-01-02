import React from 'react'
import PropTypes from 'prop-types'
import { FaTrash } from 'react-icons/fa'

const Date = ({ date, deleteDate }) => {
  return (
    <div className='d-flex gap-4 fake-table py-2 my-2'>
      <p className='card-title'>{date.pet}</p>
      <p className='card-subtitle text-muted'>{date.name}</p>
      <p className='card-text mb-0'>{date.date}</p>
      <p className='card-text mb-0'>{date.time}</p>
      <p className='card-text'>{date.syntoms}</p>
      <button
        className='btn btn-danger'
        onClick={() => deleteDate(date.id)}
      ><FaTrash />
      </button>
    </div>
  )
}

Date.propTypes = {
  date: PropTypes.object.isRequired,
  deleteDate: PropTypes.func.isRequired
}

export default Date
