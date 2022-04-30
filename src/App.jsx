import { useState } from 'react';
import axios from "axios";


export const App = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  const onClicFetchUser = () => {
    setIsLoading(true);
    setIsError(false);

    axios.get("https://example.com/users")
      .then(result => {
        const users = result.data.map(user => ({
          id: user.id,
          name: `${user.lastname} ${user.firstname}`,
          age: user.age
        }));

        setUserList(users);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <button onClick={onClicFetchUser}>ユーザ取得</button>
      {isError && <p style={{ color: "red" }}>エラー発生しました。</p>}
      {isLoading ? (<p>データ取得中です</p>
      ) : (userList.map(user => (
        <p key={user.id}>{`${user.id}(${user.age}歳)`}</p>
      ))
      )}
    </div>
  );
};