import React from 'react'

export default function Enemy(props) {
    
    // const [enemyPosition, setenemyPosition] = useState({x: -602, y: -304});
    const possible = [{x:-448, y:-208}, {x:-576, y:-144}, {x:-640, y:-16}, {x:-512, y:48}, {x:-544, y:208}, {x:-672, y:208}, {x:-320, y:-176}, {x:-448, y:-144}, {x:-448, y:-272}, {x:-448, y:-272}, {x:-672, y:-176}, {x:-576, y:-16}, {x:-608, y:48}, {x:-608, y:112}, {x:-640, y:144}]
    const location = props.index
    const enemyPosition = possible[location]

    

    return (
        
        <div style={{
            position: "relative",
            // display: "inline-block",
            top: enemyPosition.y,
            left: enemyPosition.x,
            height: '32px',
            width: '32px',
            backgroundImage: `url(/sprites/skins/e1.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px 0px`,
            zIndex: 1,
        }} />
    )
}
