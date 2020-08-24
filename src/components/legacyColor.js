import React, {Component} from 'react';
import './legacyColor.css';
export default function LegacyColor(props) {
  return (
    <div className="legacy-color-container">
      <div className="legacy-color-sammich" />
      <div className="legacy-color">
        <p>
          A tribute to the legacy font color #a9e3fd{' '}
          <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
            ✊😔
          </span>
        </p>
      </div>
      <div className="legacy-color-sammich" />
    </div>
  );
}
