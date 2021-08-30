import { useState, useEffect } from "react";

// const coord = React.createContext(null)
// {x: -640, y: -304}


const getX = JSON.parse(localStorage.getItem('coordX'));
const getY = JSON.parse(localStorage.getItem('coordY'));
let coord = {
  x: 0,
  y: 0
};
coord.x = getX;
coord.y = getY;

export default function useWalk(maxSteps) {
  let [position, setPosition] = useState();
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const [fresh, setFresh] = useState(true);

 

  useEffect(() => {
    if (fresh){
      setPosition(coord);
      setFresh(false)
    }
  }, [])

  



  

  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
    w: 3,
    a: 1,
    s: 0,
    d: 2,
  };

  const stepSize = 32;

  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
    s: { x: 0, y: stepSize },
    a: { x: -stepSize, y: 0 },
    d: { x: stepSize, y: 0 },
    w: { x: 0, y: -stepSize },
  };
  // This function will become the enemy encounter function
  function checkTouching() {
    localStorage.setItem('coordX', position.x,);
    localStorage.setItem('coordY', position.y);
    window.location.href = "/fight";
  }

  function pausePageGame() {
    localStorage.setItem('coordX', position.x,);
    localStorage.setItem('coordY', position.y);
    window.location.href = "/pause";
  }

  function walk(dir) {
    setDir((prev) => {
      if (directions[dir] === prev) move(dir);
      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  }

  function move(dir) {
    // map boundaries
    if (
      (position.y <= -304 && dir === "up") ||
      (position.y <= -304 && dir === "w")
    ) {
      return;
    } else if (
      (position.y >= 304 && dir === "down") ||
      (position.y >= 304 && dir === "s")
    ) {
      return;
    } else if (
      (position.x <= -640 && dir === "left") ||
      (position.x <= -640 && dir === "a")
    ) {
      return;
    } else if (
      (position.x >= -32 && dir === "right") ||
      (position.x >= -32 && dir === "d")
    ) {
      return;
    }
    // brown boundaries
    else if (position.x === -640 && position.y === -304 && dir === "right") {
      return;
    } else if (position.x === -640 && position.y === -272 && dir === "right") {
      return;
    } else if (position.x === -608 && position.y === -240 && dir === "up") {
      return;
    } else if (position.x === -576 && position.y === -240 && dir === "up") {
      return;
    } else if (position.x === -544 && position.y === -304 && dir === "left") {
      return;
    } else if (position.x === -544 && position.y === -272 && dir === "left") {
      return;
    } else if (position.x === -544 && position.y === -176 && dir === "right") {
      return;
    } else if (position.x === -544 && position.y === -144 && dir === "right") {
      return;
    } else if (position.x === -544 && position.y === -112 && dir === "right") {
      return;
    } else if (position.x === -576 && position.y === -48 && dir === "down") {
      return;
    } else if (position.x === -544 && position.y === -48 && dir === "down") {
      return;
    } else if (position.x === -512 && position.y === -48 && dir === "down") {
      return;
    } else if (position.x === -512 && position.y === -208 && dir === "down") {
      return;
    } else if (
      (position.x === -480 && position.y === -208 && dir === "down") ||
      (position.x === -480 && position.y === -208 && dir === "right")
    ) {
      return;
    } else if (position.x === -512 && position.y === -208 && dir === "down") {
      return;
    } else if (position.x === -480 && position.y === -240 && dir === "right") {
      return;
    } else if (position.x === -448 && position.y === -272 && dir === "down") {
      return;
    } else if (position.x === -416 && position.y === -272 && dir === "down") {
      return;
    } else if (position.x === -384 && position.y === -240 && dir === "left") {
      return;
    } else if (position.x === -384 && position.y === -208 && dir === "left") {
      return;
    } else if (position.x === -384 && position.y === -176 && dir === "left") {
      return;
    } else if (position.x === -448 && position.y === -112 && dir === "left") {
      return;
    } else if (
      (position.x === -448 && position.y === -144 && dir === "left") ||
      (position.x === -448 && position.y === -144 && dir === "up")
    ) {
      return;
    } else if (position.x === -416 && position.y === -144 && dir === "up") {
      return;
    } else if (position.x === -480 && position.y === -80 && dir === "up") {
      return;
    } else if (position.x === -512 && position.y === -80 && dir === "up") {
      return;
    } else if (position.x === -608 && position.y === -16 && dir === "right") {
      return;
    } else if (position.x === -608 && position.y === 16 && dir === "right") {
      return;
    } else if (position.x === -576 && position.y === 48 && dir === "up") {
      return;
    } else if (position.x === -544 && position.y === 48 && dir === "up") {
      return;
    } else if (position.x === -512 && position.y === 48 && dir === "up") {
      return;
    } else if (position.x === -480 && position.y === -16 && dir === "left") {
      return;
    } else if (position.x === -480 && position.y === 16 && dir === "left") {
      return;
    } else if (position.x === -352 && position.y === -240 && dir === "right") {
      return;
    } else if (position.x === -352 && position.y === -208 && dir === "right") {
      return;
    } else if (position.x === -352 && position.y === -176 && dir === "right") {
      return;
    } else if (position.x === -352 && position.y === -144 && dir === "right") {
      return;
    } else if (position.x === -352 && position.y === -112 && dir === "right") {
      return;
    } else if (position.x === -320 && position.y === -80 && dir === "up") {
      return;
    } else if (position.x === -288 && position.y === -240 && dir === "left") {
      return;
    } else if (position.x === -288 && position.y === -208 && dir === "left") {
      return;
    } else if (position.x === -288 && position.y === -176 && dir === "left") {
      return;
    } else if (position.x === -288 && position.y === -144 && dir === "left") {
      return;
    } else if (position.x === -288 && position.y === -112 && dir === "left") {
      return;
    } else if (position.x === -320 && position.y === -272 && dir === "down") {
      return;
    } else if (position.x === -256 && position.y === -176 && dir === "right") {
      return;
    } else if (position.x === -256 && position.y === -144 && dir === "right") {
      return;
    } else if (position.x === -256 && position.y === -112 && dir === "right") {
      return;
    } else if (position.x === -224 && position.y === -80 && dir === "up") {
      return;
    } else if (position.x === -192 && position.y === -80 && dir === "up") {
      return;
    } else if (position.x === -160 && position.y === -176 && dir === "left") {
      return;
    } else if (position.x === -160 && position.y === -144 && dir === "left") {
      return;
    } else if (position.x === -160 && position.y === -112 && dir === "left") {
      return;
    } else if (position.x === -224 && position.y === -208 && dir === "down") {
      return;
    } else if (position.x === -192 && position.y === -208 && dir === "down") {
      return;
    } else if (position.x === -224 && position.y === -304 && dir === "right") {
      return;
    } else if (position.x === -224 && position.y === -272 && dir === "right") {
      return;
    } else if (position.x === -64 && position.y === -304 && dir === "left") {
      return;
    } else if (position.x === -64 && position.y === -272 && dir === "left") {
      return;
    } else if (position.x === -192 && position.y === -240 && dir === "up") {
      return;
    } else if (position.x === -160 && position.y === -240 && dir === "up") {
      return;
    } else if (position.x === -128 && position.y === -240 && dir === "up") {
      return;
    } else if (
      (position.x === -96 && position.y === -240 && dir === "up") ||
      (position.x === -96 && position.y === -240 && dir === "down")
    ) {
      return;
    } else if (position.x === -64 && position.y === -240 && dir === "down") {
      return;
    } else if (position.x === -32 && position.y === -208 && dir === "left") {
      return;
    } else if (position.x === -32 && position.y === -176 && dir === "left") {
      return;
    } else if (position.x === -32 && position.y === -144 && dir === "left") {
      return;
    } else if (position.x === -64 && position.y === -112 && dir === "up") {
      return;
    } else if (position.x === -96 && position.y === -112 && dir === "up") {
      return;
    } else if (position.x === -128 && position.y === -208 && dir === "right") {
      return;
    } else if (position.x === -128 && position.y === -176 && dir === "right") {
      return;
    } else if (position.x === -128 && position.y === -144 && dir === "right") {
      return;
    } else if (position.x === -160 && position.y === -80 && dir === "down") {
      return;
    } else if (position.x === -192 && position.y === -80 && dir === "down") {
      return;
    } else if (position.x === -128 && position.y === -48 && dir === "left") {
      return;
    } else if (position.x === -128 && position.y === -16 && dir === "left") {
      return;
    } else if (position.x === -128 && position.y === 16 && dir === "left") {
      return;
    } else if (position.x === -128 && position.y === 48 && dir === "left") {
      return;
    } else if (position.x === -128 && position.y === 80 && dir === "left") {
      return;
    } else if (position.x === -128 && position.y === 112 && dir === "left") {
      return;
    } else if (position.x === -128 && position.y === 144 && dir === "left") {
      return;
    } else if (position.x === -128 && position.y === 176 && dir === "left") {
      return;
    } else if (position.x === -192 && position.y === 208 && dir === "up") {
      return;
    } else if (position.x === -160 && position.y === 208 && dir === "up") {
      return;
    } else if (position.x === -224 && position.y === -48 && dir === "right") {
      return;
    } else if (position.x === -224 && position.y === -16 && dir === "right") {
      return;
    } else if (position.x === -224 && position.y === 16 && dir === "right") {
      return;
    } else if (position.x === -224 && position.y === 48 && dir === "right") {
      return;
    } else if (position.x === -224 && position.y === 80 && dir === "right") {
      return;
    } else if (position.x === -224 && position.y === 112 && dir === "right") {
      return;
    } else if (position.x === -224 && position.y === 144 && dir === "right") {
      return;
    } else if (position.x === -224 && position.y === 176 && dir === "right") {
      return;
    } else if (position.x === -416 && position.y === 16 && dir === "right") {
      return;
    } else if (position.x === -416 && position.y === 48 && dir === "right") {
      return;
    } else if (position.x === -416 && position.y === 80 && dir === "right") {
      return;
    } else if (position.x === -320 && position.y === 16 && dir === "left") {
      return;
    } else if (position.x === -320 && position.y === 48 && dir === "left") {
      return;
    } else if (position.x === -320 && position.y === 80 && dir === "left") {
      return;
    } else if (position.x === -384 && position.y === 112 && dir === "up") {
      return;
    } else if (position.x === -352 && position.y === 112 && dir === "up") {
      return;
    } else if (position.x === -384 && position.y === -16 && dir === "down") {
      return;
    } else if (position.x === -352 && position.y === -16 && dir === "down") {
      return;
    } else if (position.x === -416 && position.y === 176 && dir === "right") {
      return;
    } else if (position.x === -416 && position.y === 208 && dir === "right") {
      return;
    } else if (position.x === -416 && position.y === 240 && dir === "right") {
      return;
    } else if (position.x === -320 && position.y === 176 && dir === "left") {
      return;
    } else if (position.x === -320 && position.y === 208 && dir === "left") {
      return;
    } else if (position.x === -320 && position.y === 240 && dir === "left") {
      return;
    } else if (position.x === -384 && position.y === 272 && dir === "up") {
      return;
    } else if (position.x === -352 && position.y === 272 && dir === "up") {
      return;
    } else if (position.x === -384 && position.y === 144 && dir === "down") {
      return;
    } else if (position.x === -352 && position.y === 144 && dir === "down") {
      return;
    } else if (position.x === -544 && position.y === 176 && dir === "right") {
      return;
    } else if (position.x === -544 && position.y === 208 && dir === "right") {
      return;
    } else if (position.x === -544 && position.y === 240 && dir === "right") {
      return;
    } else if (position.x === -448 && position.y === 176 && dir === "left") {
      return;
    } else if (position.x === -448 && position.y === 208 && dir === "left") {
      return;
    } else if (position.x === -448 && position.y === 240 && dir === "left") {
      return;
    } else if (position.x === -512 && position.y === 272 && dir === "up") {
      return;
    } else if (position.x === -480 && position.y === 272 && dir === "up") {
      return;
    } else if (position.x === -512 && position.y === 144 && dir === "down") {
      return;
    } else if (position.x === -480 && position.y === 144 && dir === "down") {
      return;
    }
    // enemy interaction locations with enter key
    else if (position.x === -544 && position.y === -144 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -544 && position.y === -48 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -544 && position.y === -144 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -384 && position.y === -208 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -352 && position.y === -176 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -416 && position.y === 48 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -448 && position.y === 208 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -416 && position.y === 208 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -128 && position.y === 144 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -128 && position.y === 112 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -224 && position.y === 48 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -224 && position.y === -16 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -160 && position.y === -144 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -128 && position.y === -176 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -128 && position.y === -240 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -160 && position.y === -240 && dir === "enter") {
      checkTouching();
      return;
    } else if (position.x === -288 && position.y === -176 && dir === "enter") {
      checkTouching();
      return;
    }
    // pauses
      else if (dir==="spacebar"){
        pausePageGame();
        return
      }
  
    // updates the position of whatever is using useWalk (in our case player)
    else {
      console.log(position);
      setPosition((prev) => ({
        x: prev.x + modifier[dir].x,
        y: prev.y + modifier[dir].y,
      }));
    }
  }

  return {
    walk,
    dir,
    step,
    position,
  };
}
