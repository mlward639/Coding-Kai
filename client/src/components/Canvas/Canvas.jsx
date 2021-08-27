/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react'
import "./canvas.css"
import Player from "../player"  
import Enemy from '../enemy/enemy'



const Canvas = props => {

  const canvasRef = useRef(null)
  const tileW = 32;
    const tileH = 32;
    const mapW = 20;
    const mapH = 20;
   

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
        case 3:
          ctx.fillStyle = "#1549d7";
          break;    
        case 4:
          ctx.fillStyle = "#683407";
          break;
        case 5:
					ctx.fillStyle = "#77797d";
					break;
        case 6:
					ctx.fillStyle = "#000000";
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
  


const indexes =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const enemiesList = indexes.map(function(index){
   return(<Enemy index={index} key={index} />)
})

  return (
      <>
  <div style={{display:'flex', flexDirection:'row', alignItems: 'center' }}>
  <div className="gameMap">
            <canvas width='640' height='640' ref={canvasRef} {...props}/>
      <Player skin="m2"/>
      {enemiesList}
     
  </div>
  <div>null
    {/* this is where the stats $ directions container will go */}<p style={{color:'white'}}>This is stuff</p>
  </div>
  </div>
  <div>null
    {/* This is where the quiz section can go */}<p style={{color:'white'}}>This is stuff</p>
  </div>
  
  </>
  )}


export default Canvas