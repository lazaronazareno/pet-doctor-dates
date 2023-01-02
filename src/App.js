/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import Dates from './components/Dates'
import Form from './components/Form'
import './App.css'
import Sidebar from './components/Sidebar'

function App () {
  let initialDates = JSON.parse(localStorage.getItem('dates'))
  if (!initialDates) {
    initialDates = []
  }

  const [dates, setDates] = useState(initialDates)
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  const addDate = (date) => {
    setDates([...dates, date])
  }

  const deleteDate = (id) => {
    console.log(id)
    const newDates = dates.filter(date => date.id !== id)
    setDates(newDates)
  }

  useEffect(() => {
    if (initialDates) {
      localStorage.setItem('dates', JSON.stringify(dates))
    } else {
      localStorage.setItem('dates', JSON.stringify([]))
    }
  }, [dates])

  return (
    <div className='App bg-secondary'>
      <Sidebar showForm={showForm} handleShowForm={handleShowForm}>
        <Form showForm={showForm} handleShowForm={handleShowForm} addDate={addDate} />
      </Sidebar>
      <div className='container-fluid flex flex-column'>
        <h1 className='color-white text-center'>AdminMascotas</h1>
        <Dates dates={dates} deleteDate={deleteDate} />
      </div>
    </div>
  )
}

export default App
