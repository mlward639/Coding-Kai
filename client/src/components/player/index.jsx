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

      

      useKeyPress((e) => {
           console.log(e.key)
          if (e.key=== "w" || e.key==="a" || e.key==="s" || e.key==="d" || e.key==="ArrowUp" || e.key==="ArrowDown" || e.key==="ArrowLeft" || e.key==="ArrowRight" || e.key==="Enter"){
          walk(e.key.replace("Arrow", "").toLowerCase());
          }
          // else if (e.key= 'Enter' && (position.x=== -544 && position.y===-144)){
          //   console.log("This will be the encounter enemy function")
          // }
          else {
            console.log(position)

            return
          }

          e.preventDefault();

      })
    return <Actor sprite={`/sprites/skins/${skin}.png`} data={data} step={step} dir={dir} position={position} />
}