import "../App.css";

export default function Tracker() {
  return (
    <>
      <h1 className="tracker-header">COVID-19 Tracker</h1>
      <div className="tracker-box">
        <div className="box">
          <div className="box-text">
            <h1 style={{ fontSize: "15px", fontWeight: "450px", paddingBottom: "15px" }}>Total Cases</h1>
            <div style={{ fontFamily: "Rubik", fontFtyle: "normal", fontWeight: "500", fontSize: "36px", color: "#2B6FF3", paddingBottom: "10px" }}>296,20000</div>
            <div style={{ fontFamily: "Rubik", fontStyle: "normal", fontWeight: "500", fontSize: "14px", color: "#777F8D" }}>+23444</div>
          </div>
          <div className="circle"></div>
        </div>
        <div className="box2">
          <div className="box-text">
            <h1 style={{ fontSize: "15px", fontWeight: "450px", paddingBottom: "15px" }}>Active Cases</h1>
            <div style={{ fontFamily: "Rubik", fontFtyle: "normal", fontWeight: "500", fontSize: "36px", color: "rgba(243, 153, 17, 1)", paddingBottom: "10px" }}>962,0000</div>
            <div style={{ fontFamily: "Rubik", fontStyle: "normal", fontWeight: "500", fontSize: "14px", color: "#777F8D" }}>+23444</div>
          </div>
          <div className="circle2"></div>
        </div>
        <div className="box3">
          <div className="box-text">
            <h1 style={{ fontSize: "15px", fontWeight: "450px", paddingBottom: "15px" }}>Recovered</h1>
            <div style={{ fontFamily: "Rubik", fontFtyle: "normal", fontWeight: "500", fontSize: "36px", color: "rgba(22, 180, 66, 1)", paddingBottom: "10px" }}>562,0000</div>
            <div style={{ fontFamily: "Rubik", fontStyle: "normal", fontWeight: "500", fontSize: "14px", color: "#777F8D" }}>+23444</div>
          </div>
          <div className="circle3"></div>
        </div>
        <div className="box4">
          <div className="box-text">
            <h1 style={{ fontSize: "15px", fontWeight: "450px", paddingBottom: "15px" }}>Total Deaths</h1>
            <div style={{ fontFamily: "Rubik", fontFtyle: "normal", fontWeight: "500", fontSize: "36px", color: " rgba(214, 50, 50, 1)", paddingBottom: "10px" }}>862,0000</div>
            <div style={{ fontFamily: "Rubik", fontStyle: "normal", fontWeight: "500", fontSize: "14px", color: "#777F8D" }}>+23444</div>
          </div>
          <div className="circle4"></div>
        </div>
      </div>
    </>
  );
}
