import React, { useState, useEffect } from 'react'

function Loader() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });
    
    return (
        <>
            <div className='loader-wrapper'>
                <span className='loader'><span className='loader-inner'></span></span>
            </div>
        </>
    )
}

export default Loader