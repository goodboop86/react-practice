import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
    width: "100px",
    padding: "6px",
    backgroundColor: "8px",
};

export const EditButton = props => {


    const { isAdmin } = useContext(AdminFlagContext);


    return (
        <button style={style} disabled={!isAdmin}>
            編集
        </button>
    );
};