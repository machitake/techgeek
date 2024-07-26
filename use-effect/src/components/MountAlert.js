import { useState, useEffect } from "react";

function InnerComponent() {
  useEffect(() => {
    alert('マウントされました');
    return () => {
      alert('アンマウントされました');
    };
  }, []);

  return <p>コンポーネントが表示されています</p>;
}

export default function MountAlert() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h1>MountAlert</h1>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'アンマウント' : 'マウント'}
      </button>
      {isVisible && <InnerComponent />}
    </div>
  );
}
