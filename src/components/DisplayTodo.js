import React from "react";

export const DisplayTodo = ({ todo, onDelete, onEdit, onChangeCheck }) => {
  return (
    <div>
      {todo.map((item) => (
        <div
          className="container my-3"
          style={{ marginLeft: "15%" }}
          key={item.id}
        >
          <div className="row">
            <div className="col-md-1">
              <input
                type="checkbox"
                checked={item.iscompleted}
                onChange={(e) => onChangeCheck(e, item.id)}
              />
            </div>
            <div className="col-md-6">
              <span
                style={
                  item.iscompleted ? { textDecorationLine: "line-through" } : {}
                }
              >
                {item.text}
              </span>
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-info mx-3"
                onClick={() => {
                  const newText = prompt("Enter new text:", item.text);
                  if (newText !== null && newText.trim() !== "") {
                    onEdit(item.id, newText);
                  }
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={(e) => onDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
   
      ))}
    </div>
  );
};
