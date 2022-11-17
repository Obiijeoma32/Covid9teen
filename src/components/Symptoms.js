import DoctorImage from "./doctor-woman.svg";
import "../App.css";

export default function Symptoms() {
  return (
    <>
      <div className="symptoms">
        <div className="symptoms-content">
          <h4 className="symptoms-header">Covid Virus Symptoms</h4>
          <h2 style={{ fontWeight: "600", fontSize: "36px", color: "#000000", fontFamily: "Rubik", paddingTop: "30px" }}>What are the symptoms?</h2>
          <p className="symptoms-details">
            People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Less common symptoms are aches and pains, sore throat,
            diarrhoea, conjuctivitis, headache, loss of taste or smell, a rash on skin or discolouration of fingers or toes. Serious symptoms are difficulty in brething or shortness of breath, ches pain or pressure, loss of speech movement. Most
            people (about 80%) recover from the disease without needing special treatment. More rarely, the disease can be serious and even fatal. Older people, and people with other medical conditions (such as asthma, diabetes, or heart disease),may
            be more vulnerable to becoming severely ill.
          </p>
        </div>
        <img className="symptoms-img" src={DoctorImage} alt="Doctor-Image" title="doctor" />
      </div>
    </>
  );
}
