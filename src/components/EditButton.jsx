const style = {
    width: "100px",
    padding: "6px",
    backgroundColor: "8px",
};

export const EditButton = props => {

    console.log("EditButtonレンダリング");
    const { isAdmin } = props;

    return (
        <button style={style} disabled={!isAdmin}>
            編集
        </button>
    );
};