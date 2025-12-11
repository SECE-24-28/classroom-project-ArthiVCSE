import React, { useContext } from 'react';
import { DataContext } from './context/DataContext';

const Three = () => {
  const { dec } = useContext(DataContext);

  return (
    <div>
      <button onClick={dec}>-</button>
    </div>
  );
};

export default Three;