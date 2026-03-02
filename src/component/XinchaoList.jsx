import Xinchaoitem from "./Xinchaoitem.jsx";

function XinchaoList({ letters }) {
    return (
        <div style={{ marginTop: "20px" }}>
        {letters && letters.length === 0 && <p> Chưa có letter nào</p>}
        {letters && letters.map((letter) => (
          <Xinchaoitem key={letter.id} letter={letter} />
        ))}
        </div>
    );
}
export default XinchaoList;