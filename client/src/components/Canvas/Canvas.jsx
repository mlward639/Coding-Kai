/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react'
import "./canvas.css"
import Player from "../player"  
const Canvas = props => {


  const canvasRef = useRef(null)
  const tileW = 32;
    const tileH = 32;
    const mapW = 20;
    const mapH = 20;
    // let img = new Image();
    // img.src= '../../../public/sprites/skins/f2.png';

    const gameMap = [
        1, 4, 4, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 4, 4, 4, 4, 2, 2,
        1, 4, 4, 2, 2, 2, 2, 2, 3, 3, 2, 2, 3, 2, 4, 0, 0, 4, 2, 2,
        5, 5, 5, 5, 2, 2, 4, 4, 5, 5, 4, 5, 5, 2, 2, 5, 5, 2, 2, 2,
        2, 2, 5, 5, 2, 2, 4, 0, 5, 5, 4, 5, 5, 2, 2, 5, 5, 4, 4, 2,
        2, 2, 5, 5, 4, 4, 4, 4, 5, 5, 0, 5, 5, 4, 4, 5, 5, 0, 4, 2,
        2, 2, 5, 5, 0, 4, 2, 2, 5, 5, 4, 5, 5, 4, 0, 5, 5, 4, 4, 3,
        2, 2, 5, 5, 4, 4, 2, 2, 5, 5, 4, 5, 5, 4, 4, 5, 5, 2, 2, 3,
        2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 3,
        2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 5, 5, 2, 3,
        3, 2, 4, 0, 4, 2, 5, 5, 2, 2, 2, 2, 5, 5, 0, 4, 5, 5, 2, 2,
        3, 2, 4, 4, 4, 2, 5, 5, 4, 4, 2, 2, 5, 5, 4, 4, 5, 5, 2, 2,
        3, 2, 2, 2, 2, 2, 5, 5, 0, 4, 2, 2, 5, 5, 0, 4, 5, 5, 2, 2,
        2, 2, 2, 2, 2, 2, 5, 5, 4, 4, 2, 2, 5, 5, 4, 4, 5, 5, 2, 3,
        2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 2, 5, 5, 4, 0, 5, 5, 2, 3,
        3, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 2, 5, 5, 4, 0, 5, 5, 2, 3,
        3, 3, 2, 2, 4, 4, 5, 5, 4, 4, 2, 2, 5, 5, 4, 4, 5, 5, 2, 2,
        3, 3, 2, 2, 4, 0, 5, 5, 0, 4, 2, 2, 5, 5, 2, 2, 3, 3, 2, 2,
        3, 3, 3, 2, 4, 4, 5, 5, 4, 4, 2, 2, 5, 5, 2, 2, 3, 3, 2, 2,
        2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3,
        2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3,

    ]
  const draw = ctx => {
    for(var y = 0; y < mapH; ++y)
	{
		for(var x = 0; x < mapW; ++x)
		{
            switch(gameMap[((y*mapW)+x)])
			{
				case 1:
					ctx.fillStyle = "#992b4f"
					break;
                case 2:
                    ctx.fillStyle = "#076821";
                    break;
                case 6:
					ctx.fillStyle = "#000000";
					break;
                case 3:
                    ctx.fillStyle = "#1549d7";
                    break;    
                case 4:
                    ctx.fillStyle = "#683407";
                    break;
                case 5:
					ctx.fillStyle = "#77797d";
					break;
                default:
					ctx.fillStyle = "#ed7e1e";
			}

			ctx.fillRect( x*tileW, y*tileH, tileW, tileH);
		}
	}
	ctx.fillStyle = "#ff0000";
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    //Our draw come here
    draw(context)
  }, [draw])
  
  return (
      <>
  <div className="gameMap">
      <canvas width='640' height='640' ref={canvasRef} {...props}/>
      <Player skin="m2"/>
  </div>
  
  </>
  )}


export default Canvas