import banda1 from "../../../assets/img/banda1.jpg";
import banda2 from "../../../assets/img/banda2.jpg";
import banda3 from "../../../assets/img/banda3.jpg";

export const Inicio = () => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={banda1} alt="Inicio" />
                <div className="card-body">
                    <h5 className="card-title">Banda #1</h5>
                    <p className="card-text">ONE DIRECTION</p>
                </div>
            </div>


            <div className="card" style={{ width: "18rem" }}>
              <img src={banda2} alt="Inicio" />
              <div className="card-body">
                  <h5 className="card-title">Banda #2</h5>
                  <p className="card-text">MORAT</p>
              </div>
            </div>


            <div className="card" style={{ width: "18rem" }}>
              <img src={banda3} alt="Inicio" />
              <div className="card-body">
                  <h5 className="card-title">Banda #3</h5>
                  <p className="card-text">LITTLE MIX</p>
              </div>
            </div>
        </>
    );
}
