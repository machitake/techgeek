import { useState } from 'react';

export default function TextInput() {
  const [text, setText] = useState(' ');
  const [focus, setFocus] = useState(false);

  return (
    <>
      <p>{text}</p>
      <input type="text" value={text} 
      onChange={(e) => setText(e.target.value)} 
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}/>
      <p>{focus ? 'フォーカスされました' : ''}</p>
    </>
  );
}