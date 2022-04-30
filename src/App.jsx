import { useContext, useState } from 'react';
import { AdminFlagContext } from './components/providers/AdminFlagProvider';
import { Card } from "./components/Card"


export const App = () => {
  console.log("Appレンダリング");

  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);


  const onClickSwitch = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div>
      {/* ↓管理者フラグによって文字を出し分け*/}
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card />
    </div>
  )
};