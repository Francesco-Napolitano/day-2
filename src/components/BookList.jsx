import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'
import { useState } from 'react'

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [asin, setAsin] = useState('')

  const changeBookListState = (newAsin) => {
    setAsin(newAsin)
  }

  return (
    <>
      <Row className="mt-5">
        <Col xs={8}>
          <h3 className="text-center">Libri</h3>
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
          <Row className="g-2 mt-3">
            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={7} md={4} key={b.asin}>
                  <SingleBook
                    book={b}
                    changeBookListState={changeBookListState}
                    selectedBook={asin}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={4}>
          <h3 className="text-center">Commenti</h3>
          <CommentArea asin={asin} />
        </Col>
      </Row>
    </>
  )
}

export default BookList
