import { useFetchUsers } from './hooks/useFetchUsers';


export const App = () => {
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザ取得</button>
      {isError && <p style={{ color: "red" }}>エラー発生しました。</p>}
      {isLoading ? (<p>データ取得中です</p>
      ) : (userList.map(user => (
        <p key={user.id}>{`${user.id}:${user.name}(${user.age}歳)`}</p>
      ))
      )}
    </div>
  );
};