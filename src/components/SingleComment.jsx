import Button from 'react-bootstrap/Button';
const SingleComment =(props)=>{
    const cancella=()=>{
        return(
            fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.commentoLibro._id}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhZDczYjY4MzQzMTAwMTRkZWE3YWQiLCJpYXQiOjE2ODA1MjkyMTIsImV4cCI6MTY4MTczODgxMn0.Dn7Myc8A4Cv8oDsLX7z_NAxuiWcc_qX-jBQT23rUAbs"
                },
                method:'DELETE'
            })
            .then(response=>{
                if (response.ok){
                    alert('The comment has been deleted!')
                }else{
                    alert('ERROR the comment hasn\'t been deleted')
                }
            })
            .catch(err=>{
                console.log('ERROR ',err)
            })
        )
    }
    return(
        <>
             <div className='areaCommento'>
                <p className="mb-0">{props.commentoLibro.comment} - {props.commentoLibro.rate} ⭐️ </p>
                <Button className='mt-1' variant="primary" onClick={cancella}>
                    Delete comment
                </Button>
            </div> 
        </>
   
    )
}

export default SingleComment