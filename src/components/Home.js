 
import React from "react"
function Home(props) {
    return (
      <div>
        <h1 className="container mt-4" style={{color: props.mode === 'dark'?'white': '#474b4e'}}> This is the home page</h1>
      </div>
    );
  }
  export default Home;
