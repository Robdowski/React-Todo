import React from "react";

const Todo = props => {
    console.log("props for Todo.js", props)
    return (
        <div className={`item${props.item.completed ? "completed" : ""}`} onClick={props.toggleItem}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;