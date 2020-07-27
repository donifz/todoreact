import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      real: "madrid",
    };
  }
  render() {
    return (
      <div className="Header">
        <h2>To Do List</h2>
      </div>
    );
  }
}
export default Header;
