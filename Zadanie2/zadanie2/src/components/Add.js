import React from 'react'
import { useLocation } from 'react-router-dom';

function Add() {
    const query = new URLSearchParams(useLocation().search);
    const x = parseFloat(query.get('x'));
    const y = parseFloat(query.get('y'));
    const result = x + y;

  return (
    <div>
      <h1>Result: {isNaN(result) ? 'Invalid input' : result}</h1>;
    </div>
  )
}



export default Add
