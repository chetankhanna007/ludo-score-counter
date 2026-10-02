//Tutorial of Object and Array as State Variable

import {useState} from "react";
import "./LudoBoard.css"

export default function LudoBoard() {
    let btnStyle = {border:"none", width:"60px", height:"35px", borderRadius:"5px", color:"#b9abab", fontSize:"18px", fontWeight:"bold", margin:"20px 0", cursor:"pointer"}


    const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    const [arr, setArr] = useState(["No moves"]);

    // let updateBlue = (event) => {
    //     console.log(moves.blue);
    //         setMoves((moves) => {
    //         return {...moves, blue: moves.blue + 1};
    //     });
    //     console.dir(event.target.classList[0]);
    // }

    let updateMoves = (event) => {
        let color = event.target.classList[0];
        setMoves((moves) => {
        return {...moves, [color]: moves[color] + 1};
        });
        console.log(moves[color]+1, color);
        setArr((arr) => {
            return [...arr.splice(0, 1, `${color} moves`)];
        });
    }
    return(
        <div>
            <p>Game Begins!</p>
            <br />
            <div className="board">
                <p>{arr}</p>
                <p>Blue moves = {moves.blue}</p>
                <button style={btnStyle} className=" blue blueBtn" onClick={updateMoves}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={btnStyle} className="yellow yellowBtn" onClick={updateMoves}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={btnStyle} className="green greenBtn" onClick={updateMoves}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={btnStyle} className="red redBtn" onClick={updateMoves}>+1</button>
            </div>
        </div>
    )
}

