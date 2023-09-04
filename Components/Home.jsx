import QuoteBtn from "./Quote-btn"
import KanyePic from "./KanyePic"

import React, { useState } from 'react';
function HomePage(props){

  return (
   
    <div>
      
    <h1 className="mt-5 mb-5 display-1 text-center Quotes">Kanye Quote Generator</h1>
    <KanyePic url={"https://akns-images.eonline.com/eol_images/Entire_Site/20211120/rs_1200x1200-211220134727-1200-kanye-west-happy.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top"}/>
    
    <QuoteBtn onClick={props.func} />
  </div>);
  
}
export default HomePage