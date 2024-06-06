
 import { createContext } from "react";
export const Context = createContext(); import React, { useContext } from 'react';
import Button from ".counter";
import {Context} from "context.jsx"

function Counter() {
  const{counter}=useContext(Context);
  return (
    <div>
      <h1 className='text-4xl'>{counter}</h1>
      <Button/>
    </div>
  )
}

export default Counter;


