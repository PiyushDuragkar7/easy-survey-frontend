import React from 'react';

const Toolbox = ({ addComponent }) => {
  return (
    <div className="toolbox">
      <button onClick={() => addComponent('label')}>Add Label</button>
      <button onClick={() => addComponent('input')}>Add Input</button>
    </div>
  );
};

export default Toolbox;
