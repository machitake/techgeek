import { useState, useEffect } from "react";

export default function WindowResize() {
  const [windowWidth, setWindowWidth] = useState({width: window.innerWidth, height: window.innerHeight});

  
  useEffect(() => {
    function handleResize() {
      setWindowWidth({width: window.innerWidth, height: window.innerHeight});
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <h2>Window Resize</h2>
      <p>Width: {windowWidth.width}</p>
      <p>Height: {windowWidth.height}</p>
    </div>
  );
}