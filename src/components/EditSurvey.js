import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Toolbox from './Toolbox';
import SurveyComponent from './SurveyComponent';

const EditSurvey = () => {
  const { id } = useParams();
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/surveys/${id}`);
        setComponents(response.data.components || []);
      } catch (error) {
        console.error('There was an error fetching the survey!', error);
      }
    };

    fetchSurvey();
  }, [id]);

  const addComponent = (type) => {
    setComponents([
      ...components,
      { id: Date.now(), type, x: 0, y: 0, content: '' },
    ]);
  };

  const updateComponent = (id, updates) => {
    setComponents(components.map((component) =>
      component.id === id ? { ...component, ...updates } : component
    ));
  };

  const removeComponent = (id) => {
    setComponents(components.filter((component) => component.id !== id));
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3001/surveys/${id}`, { components });
      alert('Survey saved successfully!');
    } catch (error) {
      console.error('There was an error saving the survey!', error);
    }
  };

  return (
    <div className="edit-survey">
      <Toolbox addComponent={addComponent} />
      <div className="survey-container">
        {components.map((component) => (
          <SurveyComponent
            key={component.id}
            component={component}
            updateComponent={updateComponent}
            removeComponent={removeComponent}
          />
        ))}
      </div>
      <button onClick={handleSave}>Save Survey</button>
    </div>
  );
};

export default EditSurvey;
