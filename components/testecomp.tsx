import React from 'react';


const TesteComp = ( {children, ...props}:any ) => {
   console.log(props)
    return (
      <div>
       <h1>teste</h1>
      </div>
    );
  };
  
  export default TesteComp;
  