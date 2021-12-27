import React,{ useState } from "react";
import { useDispatch } from 'react-redux'
import { restaurantAdded } from './restaurantsSlice'

function RestaurantInput() {
  const [name, setName] = useState('')

  function handleChange(e){
    setName(e.target.value)
  }

  const dispatch = useDispatch()

  function handleSubmit(e){
    e.preventDefault()
    dispatch(restaurantAdded(name))
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input type='text' name='name' value={name} onChange={handleChange} />
      <input type='submit' value='add resturant' />
    </form>
  )
}

export default RestaurantInput;
