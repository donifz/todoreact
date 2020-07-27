import React from "react";

class ListItems extends React.Component {
  render() {
    let doneTask = "toDo__text";

    return (
      <ul className="to-do">
        {this.props.data.map((item, id) => (
          <li key={item.id} className="toDo__list">
            <h3 className="title">Задача {id + 1}</h3>
            <p className={item.done ? (doneTask += " status") : doneTask}>
              {item.text}
            </p>
            <button
              onClick={() => this.props.del(item.id)}
              className="btn btn-delete"
            >
              X
            </button>
            <button className="btn btn-edit">Edit</button>
            <button
              onClick={() => this.props.done(item.id)}
              className="btn btn-done"
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ListItems;
