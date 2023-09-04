
import React, { useState } from 'react';

function QuoteBtn(props) {

  
  return (
    <button onClick={props.onClick} className="btn btn-dark btn-lg mx-auto d-block">
      Get Quote
    </button>
  );
}

export default QuoteBtn;
