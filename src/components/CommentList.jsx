import { Component } from "react";
import {ListGroup} from "react-bootstrap"




class CommentsList extends Component {


    render() {
        return (
            <div>
                <h6 style={{color: "purple"}}>These are the comments:</h6>
                <ListGroup>
                        {this.props.commentsToShow.map((c) => {
                            return ( 
                        <ListGroup.Item key={c._id} style={{color: "black", fontSize: "0.5em"}}>{c.comment}</ListGroup.Item>
                        )})}

                    
                </ListGroup>


            </div>
        )
    }
}

export default CommentsList