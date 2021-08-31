/* eslint-disable react/prop-types */
import React from 'react';
import Actor from '../actor';
import useKeyPress from '../../hooks/use-key-press';
import useWalk from '../../hooks/use-walk';

export default function Player ({ skin }) {
    const {dir, step, walk, position } = useWalk(3)
    const data = {
        h: 32,
        w: 32
      };

      function pausePageGame() {
        localStorage.setItem('coordX', position.x,);
        localStorage.setItem('coordY', position.y);
        window.location.href = "/pause";
      }
    

      useKeyPress((e) => {
          if (e.key=== "w" || e.key==="a" || e.key==="s" || e.key==="d" || e.key==="ArrowUp" || e.key==="ArrowDown" || e.key==="ArrowLeft" || e.key==="ArrowRight" || e.key==="Enter"){
          walk(e.key.replace("Arrow", "").toLowerCase());
          }
          else if(e.code==="Space"){
            pausePageGame();
          }
          else {
            return
          }

          e.preventDefault();

      })
    return (
    <Actor sprite={`/sprites/skins/${skin}.png`} data={data} step={step} dir={dir} position={position} />
   
    )
}