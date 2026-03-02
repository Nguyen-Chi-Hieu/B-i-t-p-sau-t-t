import { useState } from "react";

function Xinchao({ letter }) {
    useEffect (() => {
        console.log("LetterItem mounted:", letter.id);
        
        return () => {
            console.log("LetterItem unmounted:", letter.id);
        };
    }, []);
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding:  "10px",
                marginBottom: "10px",
            }}
        >
            {Letter.content}
        </div>
    );
}
export default Xinchao;