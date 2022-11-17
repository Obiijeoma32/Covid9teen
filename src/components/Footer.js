import icon from "./iconlogo.svg";
import "../App.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-box1">
          <div className="footer-header-icon">
            <img className="footer-icon" src={icon} alt="covidlogo" />
            <h2 className="footer-header">Cov9teen</h2>
          </div>
          <h3 style={{ paddingTop: "10px" }} className="footer-title">
            Source
          </h3>
          <p className="footer-note">The infos on this this webpage were crawled from WHO, images were downloaded from Pixaybay and Pexels, Icons were downloaded from Iconfinder and Flaticons.</p>
        </div>
        <div className="footer-box2">
          <div className="box2-content">
            <h2 className="footer-title" style={{ paddingBottom: "15px" }}>
              Useful Links
            </h2>
            <a className="footer-link" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
              WHO Information
            </a>
            <br />
            <br />
            <a className="footer-link" href="https://en.wikipedia.org/wiki/COVID-19">
              Covid-19 Wikipedia
            </a>
            <br />
            <br />
            <a className="footer-link" href="https://www.worldometers.info/coronavirus/">
              World information on Covid-19
            </a>
            <br />
          </div>
        </div>
        <div className="footer-box3">
          <h2 className="footer-title">Emergency numbers to call</h2>
          <p className="box3-details"> Call: 0800 9700 0010 SMS: +234 809 955 5577</p>
        </div>
        <div className="footer-box4"></div>
        <div className="footer-box5">
          <h3 style={{ padding: "10px", fontSize: "16px" }}>Built by CandyGirl🍭</h3>
          <a className="footer-atag" href="https://twitter.com/mynameisyvonne_" title="Twitter">
            <svg style={{ width: "20px", height: "20px" }} viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
              <path
                d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
                style={{ fill: "#3BA9EE", width: "15px", height: "15px" }}
              />
            </svg>
          </a>
          <a className="footer-atag" href="https://github.com/Obiijeoma32" title="Github">
            <svg style={{ width: "20px", height: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a className="footer-atag" href="https://www.linkedin.com/in/obiijeoma32/" title="LinkedIn">
            <svg style={{ width: "20px", height: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" ariaLabelledby="title" ariaDescribedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
              <path
                dataName="layer1"
                fill="#0077b7"
                d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
