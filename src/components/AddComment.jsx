import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = (props) => {
  const [contenutoCommento, setContenutoCommento] = useState({
    comment: "",
    rate: "",
    elementId: `${props.idLibro}`,
  });

  const eseguifetchPost = () => {
    return fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhZDczYjY4MzQzMTAwMTRkZWE3YWQiLCJpYXQiOjE2ODA1MjkyMTIsImV4cCI6MTY4MTczODgxMn0.Dn7Myc8A4Cv8oDsLX7z_NAxuiWcc_qX-jBQT23rUAbs",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contenutoCommento),
    })
      .then((response) => {
        if (response.ok) {
          alert("Your comment has been posted.");
        } else {
          alert("ERROR! Your comment has not been posted.");
        }
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  return (
    <div className="AreaCommentoPosta mt-2">
      <Form.Label htmlFor="inputPassword5">Comment:</Form.Label>
      <Form.Control
        type="text"
        value={contenutoCommento.comment}
        onChange={(e) => {
          setContenutoCommento({
            ...contenutoCommento,
            comment: e.target.value,
          });
        }}
      />
      <Form.Text id="passwordHelpBlock" muted>
        Insert your comment here
      </Form.Text>
      <br />
      <Form.Label htmlFor="inputPassword5">Rating:</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        value={contenutoCommento.rate}
        onChange={(e) => {
          setContenutoCommento({
            ...contenutoCommento,
            rate: e.target.value,
          });
        }}
      />
      <Form.Text muted>Insert a rating between 1 to 5 included.</Form.Text>
      <Button className="mt-1" variant="primary" onClick={eseguifetchPost}>
        Submit comment
      </Button>
    </div>
  );
};

export default AddComment;
