import SingleComment from "./SingleComment"
const CommentsList=(props)=>{
    return(
        props.commenti.map(commento=>{
            return(
                <SingleComment key={commento._id} commentoLibro={commento}/>
            )
        })
    )
}

export default CommentsList