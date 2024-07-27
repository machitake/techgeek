import './App.css';
import { createContext, useState } from 'react';
import UserList from './components/UserList';
export const languageContext = createContext();

function App() {
  const [language, setLanguage] = useState("ja_JP");
  return (
    <languageContext.Provider value={language}>
      <div className="App">
        {/* コンテキストを切り替えるセレクトボックス */}
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="ja_JP" selected={language === "ja_JP" ? true : false}>日本語</option>
          <option value="en_US" selected={language === "en_US" ? true : false}>英語</option>
        </select>
        <UserList />
      </div>
    </languageContext.Provider>
  );
}

export default App;