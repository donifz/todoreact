import React from "react";
import "./App.css";
import Header from "../header/header";
import InputTask from "../input-task/inputTask";
import ListItem from "../list-item/listItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { text: "my name is Loan", id: 1, done: false },
        { text: "Today i shoul be Raon", id: 2, done: true },
      ],
    };
    this.maxId = 3;
    this.addItem = this.addItem.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.status = this.status.bind(this);
  }
  addItem(body) {
    if (!body) return;
    const newTask = {
      text: body,
      id: this.maxId++,
      done: false,
    };

    this.setState(({ data }) => {
      let newArray = [...data, newTask];
      return {
        data: newArray,
      };
    });
    console.log(this.state.data);
  }

  deleteTask(id) {
    const { data } = this.state;
    const founId = data.findIndex((item) => {
      return item.id == id;
    });
    const deletedData = [...data.slice(0, founId), ...data.slice(founId + 1)];
    console.log(founId);
    this.setState(({ data }) => {
      return {
        data: deletedData,
      };
    });
  }

  status(id) {
    // debugger;
    const { data } = this.state;
    const founId = data.find((item) => {
      return item.id == id;
    });
    const indexId = data.findIndex((item) => {
      return item.id == id;
    });

    founId.done = !founId.done;

    this.setState(({ data }) => (data[indexId].done = !founId.done));
    console.log(data[indexId]);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <InputTask task={this.state.data} onAdd={this.addItem} />
          <ListItem
            data={this.state.data}
            del={this.deleteTask}
            done={this.status}
          />
        </div>
      </div>
    );
  }
}

export default App;
