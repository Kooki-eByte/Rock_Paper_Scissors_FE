import React, { useState } from "react";

const GameScreen = () => {
  const [startGame, setStartGame] = useState(false);
  return (
    <div>
      {!startGame ? (
        // a button to start the game
        <button onClick={() => setStartGame(true)}>Start Game</button>
      ) : (
        <h1>Game started</h1>
      )}
    </div>
  );
};

// Have a listener on the startgame with a hook for a true or false value. If true start the game else wait until the user presses the button

export default GameScreen;
