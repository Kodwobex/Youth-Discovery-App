import React, { useState } from 'react';
import './App.css';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import Results from './components/Results';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState({
    strengths: [],
    values: [],
    interests: [],
    dreams: []
  });
  const [showResults, setShowResults] = useState(false);

  const handleSelectionChange = (stepName, selectedItems) => {
    setSelections(prev => ({
      ...prev,
      [stepName]: selectedItems
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setSelections({
      strengths: [],
      values: [],
      interests: [],
      dreams: []
    });
    setShowResults(false);
  };

  if (showResults) {
    return <Results selections={selections} onRestart={handleRestart} />;
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>🌟 Youth Purpose Discovery App</h1>
          <p>Discover Your Path, Unlock Your Potential</p>
        </header>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(currentStep / 4) * 100}%` }}></div>
        </div>
        <p className="step-indicator">Step {currentStep} of 4</p>

        <main className="main-content">
          {currentStep === 1 && (
            <StepOne
              selected={selections.strengths}
              onChange={(items) => handleSelectionChange('strengths', items)}
            />
          )}
          {currentStep === 2 && (
            <StepTwo
              selected={selections.values}
              onChange={(items) => handleSelectionChange('values', items)}
            />
          )}
          {currentStep === 3 && (
            <StepThree
              selected={selections.interests}
              onChange={(items) => handleSelectionChange('interests', items)}
            />
          )}
          {currentStep === 4 && (
            <StepFour
              selected={selections.dreams}
              onChange={(items) => handleSelectionChange('dreams', items)}
            />
          )}
        </main>

        <div className="button-group">
          <button
            className="btn btn-secondary"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            ← Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNext}
          >
            {currentStep === 4 ? '🚀 Discover My Purpose' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
