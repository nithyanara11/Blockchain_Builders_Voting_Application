import React from "react";

const Connected = (props) => {
    return (
        <div className="connected-container">
            <h1 className="connected-mainheader">Cast Your Vote for the Preferred Candidate</h1>
            <h4 className="connected-header">You are now Connected to Metamask</h4>
            <p className="connected-account">Metamask Account: {props.account}</p>
            <p className="connected-timeaccount">Time Remaining To Vote(Mins): {props.remainingTime}</p>
            { props.showButton ? (
                <p className="connected-warning">You have already voted!!</p>
            ) : (
                <div>
                    <input type="number" placeholder="Enter Candidate Index" value={props.number} onChange={props.handleNumberChange}></input>
            <br />
            <button className="connected-button" onClick={props.voteFunction}>Vote</button>

                </div>
            )}
            <p className="connected-candidates">Candidate Vote Status</p>
            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    <th>Candidate votes</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default Connected;