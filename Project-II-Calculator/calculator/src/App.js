import React from "react";
import "./index.scss";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const numbers = [
  { num: 7, position: 1 },
  { num: 8, position: 2 },
  { num: 9, position: 3 },
  { num: 4, position: 4 },
  { num: 5, position: 5 },
  { num: 6, position: 6 },
  { num: 1, position: 7 },
  { num: 2, position: 8 },
  { num: 3, position: 9 }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };
    this.updateDisplay = this.updateDisplay.bind(this);
  }
  updateDisplay() {
    this.setState(prevSate => {
      return {
        total: (prevSate.total += { numbers })
      };
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="display-container">
          <CalculatorDisplay display={this.state.total} />
        </div>
        <div className="button-container">
          <div className="row">
            <div className="numbers-button special">clear</div>

            <div className="numbers-container">
              {numbers.map(num => (
                <NumberButton calNumbers={num} onClick={this.updateDisplay} />
              ))}
            </div>
            <div className="numbers-button special">0</div>
          </div>

          <div className="action-container">
            <ActionButton />
          </div>
        </div>
      </div>
    );
  }
}

// const App = props => {
//   console.log(props);
//   return (
//     <div className="main-container">
//       <div className="display-container">
//         <CalculatorDisplay />
//       </div>
//       <div className="button-container">
//         <div className="numbers-container">
//           <NumberButton calNumbers={numbers} />
//         </div>

//         <div className="action-container">
//           <ActionButton />
//         </div>
//       </div>
//     </div>
//   );
// };

export default App;
