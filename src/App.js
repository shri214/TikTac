// import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Icon from "./Component/Icon/Icons";

let arr = new Array(9).fill("");
const App = () => {
  let [isCross, setCross] = useState(true);

  let [winner, setWinner] = useState("");

  const PlayAgain = () => {
    setCross(true);
    setWinner("");
    arr.fill("");
  };

  const findWinner = () => {
    // row 1
    if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] !== "") {
      setWinner(arr[0] + " has won");
      arr.fill(arr[0]);
    }
    // row 2:
    else if (arr[3] === arr[4] && arr[3] === arr[5] && arr[3] !== "") {
      setWinner(arr[3] + " has won");
      arr.fill(arr[3]);
    }
    // row 3:
    else if (arr[6] === arr[7] && arr[6] === arr[8] && arr[6] !== "") {
      setWinner(arr[6] + " has won");
      arr.fill(arr[6]);
    }
    // column 1:
    else if (arr[0] === arr[3] && arr[0] === arr[6] && arr[0] !== "") {
      setWinner(arr[0] + " has won");
      arr.fill(arr[0]);
    }
    // column 2:
    else if (arr[1] === arr[4] && arr[1] === arr[7] && arr[1] !== "") {
      setWinner(arr[1] + " has won");
      arr.fill(arr[1]);
    }
    // column 3:
    else if (arr[2] === arr[5] && arr[2] === arr[8] && arr[2] !== "") {
      setWinner(arr[2] + " has won");
      arr.fill(arr[2]);
    }
    // diagonal 1:
    else if (arr[0] === arr[4] && arr[0] === arr[8] && arr[0] !== "") {
      setWinner(arr[0] + " has won");
      arr.fill(arr[0]);
    }
    // diagonal 2:
    else if (arr[2] === arr[4] && arr[2] === arr[6] && arr[2] !== "") {
      setWinner(arr[2] + " has won");
      arr.fill(arr[2]);
    } else if (arr.indexOf("") === -1) {
      setWinner("Draw");
    }
  };

  const changeItem = (index) => {
    if (winner !== "") {
      return toast.error("game over please start again");
    }
    if (arr[index] !== "") {
      return toast("Already filled !!");
    } else if (arr[index] === "") {
      arr[index] = isCross ? "cross" : "circle";
      setCross(!isCross);
      findWinner();
    }
  };
  return (
    <div>
      <ToastContainer />

      {winner ? (
        <>
          <h1 className="nav">{winner.toUpperCase()}</h1>
          <button onClick={PlayAgain} className="btn">
            PlayAgain
          </button>
        </>
      ) : (
        <h1 className="nav">
          Chance to Play is : {isCross ? "Cross" : "Circle"}
        </h1>
      )}
      <div className="grid">
        {arr.map((val, index) => {
          return (
            <div key={index} className="box" onClick={() => changeItem(index)}>
              <Icon ic={val} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

//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
