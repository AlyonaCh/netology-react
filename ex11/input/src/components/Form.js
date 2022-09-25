import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  change,
  selectNumber
} from '../reducers/formSlice';

export function Form() {
  const number = useSelector(selectNumber);
  const dispatch = useDispatch();

  return (
    <div>
        <input
          type="number"
          max="5"
          min="0"
          aria-label="Set number"
          value={number}
          onChange={(e) => dispatch(change(e.target.value))}
        />
        
    </div>
  );
}
