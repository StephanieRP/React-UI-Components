import React from "react";
import "./index.scss";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="display-container">
          <CalculatorDisplay />
        </div>
        <div className="button-container">
          <div className="numbers-container">
            <NumberButton calNumbers={numbers} />
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
