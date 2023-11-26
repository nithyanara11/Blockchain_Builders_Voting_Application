import React from "react";

const Connected = (props) => {
    const imageSrcList = [
        'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
        'https://i.pinimg.com/736x/3a/22/d6/3a22d64860fa3e3f766157082300ee83.jpg',
        'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
        'https://static.vecteezy.com/system/resources/thumbnails/002/002/332/small/ablack-man-avatar-character-isolated-icon-free-vector.jpg',
        'https://static.vecteezy.com/system/resources/thumbnails/002/002/253/small/beautiful-woman-wearing-sunglasses-avatar-character-icon-free-vector.jpg'
      ];
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
            <div className="candidates-container">
                {props.candidates.map((candidate, index) => (
    <div key={index} className="candidate-card">
        <img src={imageSrcList[index % imageSrcList.length]} alt={`Image of ${candidate.name}`} className="candidate-image" />
      <div className="card-details">
        <div className="card-header">Index: {candidate.index}</div>
        <div className="card-body">
          <p>Candidate name: {candidate.name}</p>
          <p>Candidate votes: {candidate.voteCount}</p>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>)
}

export default Connected;