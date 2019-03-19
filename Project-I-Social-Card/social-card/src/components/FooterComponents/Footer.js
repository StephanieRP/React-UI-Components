import React from "react";
import "./Footer.css";

// const toggleNum = e => {
//   let num = document.querySelectorAll(".number");
//   num.forEach(number => {
//     return (number.innerHTML = this.state++);
//   });
// };

class Footer extends React.Component {
  state = {
    count: 0,
    count1: 0
  };
  render() {
    return (
      <footer className="icon-content">
        <div>
          <i
            className="far fa-comment"
            onClick={() =>
              this.setState(prevState => ({
                count: prevState.count + 1
              }))
            }
          />
          <span className="number">{this.state.count}</span>
        </div>
        <i className="fas fa-sync-alt" />
        <div>
          <i
            className="far fa-heart"
            onClick={() =>
              this.setState(prevState => ({ count1: prevState.count1 + 1 }))
            }
          />
          <span className="number"> {this.state.count1}</span>
        </div>

        <i className="far fa-envelope" />
      </footer>
    );
  }
}

export default Footer;
