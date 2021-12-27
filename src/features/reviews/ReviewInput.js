import React,{ useState } from "react";
import { useDispatch } from 'react-redux'
import { reviewAdded } from './reviewsSlice'

function ReviewInput({restaurant}) {
  const [comment, setComment] = useState('')

  function handleChange(e) {
    setComment(e.target.value)
  }

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(reviewAdded({
      restaurantId: restaurant.id,
      comment: comment
    }))
    setComment('')
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor='comment'>comment</label>
      <input type='textarea' name="comment" value={comment} onChange={handleChange} />
      <input type='submit' value='Add Review' />
    </form>
  )
}

export default ReviewInput;
