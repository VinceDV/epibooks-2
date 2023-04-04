import { useEffect, useState } from 'react'
import AddComment from "./AddComment"
import CommentsList from "./CommentsList"

const CommentArea = (props) => {
    const [commenti, setCommenti] = useState([])

   const eseguiFetchCommento = () => {
        return (
            fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.idBook}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2ODA1MjQ5NjMsImV4cCI6MTY4MTczNDU2M30.H1RTrJ1fRu495y_VYqsAHm2xWipWLTP6ZSl-UrPpoH0"
                },
            })
                .then(response => {
                    return response.json()
                })
                .then(dato => {
                    if (dato.length!==0)
                    {
                        setCommenti(dato)
                    }else{
                        setCommenti([])
                    }
                    
                })

        )
    }
    useEffect(() => {
        eseguiFetchCommento()
    }, [])

        return (

            <>
            {commenti && <>
                <CommentsList commenti={commenti}/>
                <AddComment idLibro={props.idBook}/>
             </> }
             </>
            
        )
    }


export default CommentArea