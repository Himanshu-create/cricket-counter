import React, { useState } from "react";

function CricketCounter() {

    const [score, setScore] = useState(0);
    const [wide, setWide] = useState(0);
    const [nb, setNB] = useState(0);
    const [vb, setVB] = useState(0);
    const [wkt, setWkt] = useState(0);

    function Out() {
        setWkt(wkt + 1);
        countBall();
    }

    function countBall() {
        setVB(vb + 1);
        
    }


    function plus1() {
        setScore(score + 1);
        countBall();
    }

    function plus2() {
        setScore(score + 2);
        countBall();
    }
    function plus3() {
        setScore(score + 3);
        countBall();
    }

    function plus4() {
        setScore(score + 4);
        countBall();
    }

    function plus5() {
        setScore(score + 5);
        countBall();
    }

    function plus6() {
        setScore(score + 6);
        countBall();
    }

    function wideBall() {
        setScore(score + 1);
        setWide(wide + 1);
    }

    function NoBall() {
        setScore(score + 1);
        setNB(nb + 1);
    }



    return (
        <div class='Container'>
        <h1>Cricket Score</h1>
            <br />
            <h2>{score} / {wkt}</h2>
            <button onClick={plus1}>1 Run</button>
            <button onClick={plus2}>2 Run</button>
            <button onClick={plus3}>3 Run</button>
            <button onClick={plus4}>4 Run</button>
            <button onClick={plus5}>5 Run</button>
            <button onClick={plus6}>6 Run</button>
            <button onClick={wideBall}>Wide</button>
            <button onClick={NoBall}>No Ball</button>
            <button onClick={countBall}>Zero Run</button>
            <button onClick={Out}>OUT</button>

            <br></br>
            <h4>Wide Ball: {wide}</h4>
            <h4>No Ball: {nb}</h4>
            <h4>Valide Ball: {vb}</h4>

        </div>
    )
}

export default CricketCounter