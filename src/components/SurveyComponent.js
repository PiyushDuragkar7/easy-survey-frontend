import React from 'react';

const SurveyComponent = ({ component, updateComponent, removeComponent }) => {
  const handleChange = (e) => {
    updateComponent(component.id, { content: e.target.value });
  };

  return (
    <div className="survey-component" style={{ position: 'absolute', top: component.y, left: component.x }}>
      {component.type === 'label' && (
        <input type="text" value={component.content} onChange={handleChange} />
      )}
      {component.type === 'input' && (
        <input type="text" placeholder="Input" readOnly />
      )}
      <button onClick={() => removeComponent(component.id)}>Remove</button>
    </div>
  );
};

export default SurveyComponent;
