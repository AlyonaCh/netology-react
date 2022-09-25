import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  change,
  select,
  selectPhoto
} from '../reducers/photoSlice';

export function Photo() {
  const photo = useSelector(selectPhoto);
  const dispatch = useDispatch();

  return (
    <div>
        <input
          type="file"
          aria-label="Set number"
          value={photo.name}
          onChange={(e) => dispatch(select(e.target.files[0]))}
        />
        <button onClick={(e) => dispatch(change(photo))}>Сохранить</button>
    </div>
  );
}
