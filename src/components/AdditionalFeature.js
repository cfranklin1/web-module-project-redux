import React from 'react';
import {connect} from 'react-redux';
import {addV6} from '../actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}

      <button className="button" onClick={props.applyV6Click}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {})(AdditionalFeature);
