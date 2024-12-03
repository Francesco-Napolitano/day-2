import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import { useState, useEffect } from 'react'

const CommentArea = (props) => {
  const [comments, setComment] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getComments = () => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/' + props.asin, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRlNDEyYTc0Yjc3ZDAwMTVkM2YwODEiLCJpYXQiOjE3MzMxODE3MzgsImV4cCI6MTczNDM5MTMzOH0.7MK7iOtEc63x4jepVGxGtV5m-wv0tvqBLN8dOol7_OM',
      },
    })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Failed to fetch comments')
        }
      })
      .then((comments) => {
        setComment(comments)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (props.asin) {
      getComments()
    } else {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin])

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
