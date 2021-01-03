import React from 'react';
import ReactDOM from 'react-dom';


const projectName = 'javascript-calculator';

const isOperator = /[x/+‑]/,
  endsWithOperator = /[x+‑/]$/,
  endsWithNegativeSign = /\d[x/+‑]{1}‑$/,
  clearStyle = { background: '#ac3939' },
  operatorStyle = { background: '#666666' },
  equalsStyle = {
    background: '#004466',
    position: 'absolute',
    height: 130,
    bottom: 5
  };



ReactDOM.render(<Calculator />, document.getElementById('root'));