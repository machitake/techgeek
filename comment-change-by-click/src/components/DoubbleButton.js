import './DoubbleButton.css';

export default function DoubbleButton() {
  function changeText(comment) {
    const changeText = document.getElementById('changeText');
    changeText.innerText = `${comment} Clicked!`;
  }
  
  return (
    <>
      <div className="dinamic-comment">
        <h2 id="changeText">この部分のテキストが変更されます</h2>
      </div>

      <div className="double-button-area">
        <div className="button-wrap">
          <button onClick={() => changeText('first button')}>first button</button>
        </div>
        <div className="button-wrap">
          <button onClick={() => changeText('second button')}>second button</button>
        </div>
      </div>
    </>
  )
}