import React, {useReducer} from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import reducer, {initialState} from './reducers';
import {addV6, racingPackage, premiumSystem, addRearSpoiler} from './actions';


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const applyV6Click = (click) => {
    dispatch(addV6(click));
  }
  const racingPackageClick = (click) => {
    dispatch(racingPackage(click));
  }
  const premiumSystemClick = (click) => {
    dispatch(premiumSystem(click));
  }
  const addRearSpolierClick = (click) => {
    dispatch(addRearSpoiler(click));
  }
  


  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures applyV6Click={applyV6Click}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
