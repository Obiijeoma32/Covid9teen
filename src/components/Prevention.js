import MaskMan from "./mask-man.svg";
import FaceMask from "./face-mask.svg";
import Headache from "./headachea.svg";
import HandShake from "./handshake.svg";
import KeepDistance from "./keep_dist.svg";
import Home from "./home.svg";
import "../App.css";

export default function Prevention() {
  return (
    <>
      <div className="prevention">
        <img className="prevention-img" src={MaskMan} alt="Masked-man" title="Mask-Man" />
        <div className="prevention-details">
          <h1 className="prevention-h1">How can i protect myself from Covid-19?</h1>
          <p className="prevention-note">
            Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.
          </p>
          <h3 className="preventive-measures">
            Whats should <span style={{ color: "#16B442" }}>I do?</span>
          </h3>
          <div className="prevention-icons">
            <div className="img-icon">
              <img src={FaceMask} alt="Masked" title="Face-Mask" />
              <h3 className="text">Wear a face mask</h3>
            </div>
            <div className="img-icon">
              <img src={Headache} alt="headache" title="headache" />
              <h3 className="text">Don't touch your face</h3>
            </div>
            <div className="img-icon">
              <img src={HandShake} alt="Handshake" title="Handshake" />
              <h3 className="text">Avoid hand contact</h3>
            </div>
            <div className="img-icon">
              <img src={KeepDistance} alt="distance" title="distance" />
              <h3 className="text">Keep safe distance</h3>
            </div>
            <div className="img-icon">
              <img src={Home} alt="home" title="stay-home" />
              <h3 className="text">Stay at home if you can</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
