import { EditButton } from "./EditButton";

const style = {
    width: "300px",
    height: "200px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor: "#e9dbd0",
    display: "flex",
    flexDirecton: "column",
    justifyContent: "center",
    alignItems: "center",
};

export const Card = props => {
    console.log("Cardレンダリング");

    return (
        <div style={style}>
            <p>山田太郎</p>
            {/*↓渡された関数を実行するボタンを設置*/}
            <EditButton />
        </div>
    );
};