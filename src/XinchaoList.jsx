import Xinchaoitem from "./Xinchaoitem";

function Xinchao({ letters }) {
    return (
        <div style={{ marginTop: "20px" }}>
        {letters.length === 0 && <p> Chưa có letter nào</p>}
        {letters.map((letter) => (
          <Xinchaoitem key={letter.id} letter={letter} />
        ))}
        </div>
    );
}
export default Xinchaoitem;