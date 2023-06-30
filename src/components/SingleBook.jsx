import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false)

    return (
      <Card>
        <Card.Img onClick={() => setSelected(!selected)}
        style={{ border: selected ? '3px solid red' : 'none' }} variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {props.book.title}
          </Card.Title>
          {selected&&<CommentArea idBook={props.book.asin}/>}
        </Card.Body>
      </Card>
    )
}

export default SingleBook
