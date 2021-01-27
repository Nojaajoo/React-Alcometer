import React, {useState} from "react";
import './App.css';

function Alcometer() {
  const [weight, setWeight] = useState("");
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(0.5);
  const [gender, setGender] = useState("female");
  const [drunk, setDrunk] = useState(0);

  function Calculate(e) {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let result = 0;
    if (gender === "female") {
      result = gramsLeft / (weight * 0.6);
    } else {
      result = gramsLeft / (weight * 0.7);
    }
    setDrunk(result);
  }
  
  return (
    <>
    <div className="container-fluid">
      <header className="row">
      <h2 className="col-12 text-center display-4">Blood Alcohol Level Calculator or Alcometer</h2>
      </header>

      <main className="row">
          <div className="col-12">
            <form onSubmit={Calculate}>

              <div className="input-group mt-4">
                <label className="input-group-text" htmlFor="wei">Weight</label>
                <input value={weight} onChange={e => setWeight(e.target.value)}
                 className="form-control" type="number" placeholder="Your weight (kg)" id="wei"/>
              </div>

              <div className="input-group mt-4">
                <label className="input-group-text" htmlFor="botl">Bottles</label>
                <select value={bottles} onChange={e => setBottles(e.target.value)}
                 className="custom-select" name="bottles" id="botl">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="9">Eight... I think</option>
                  <option value="24">I've lost count</option>
                </select>
              </div>
              
              <div className="form-group">
                <div className="input-group mt-4">
                  <label className="input-group-text" htmlFor="tim">Time</label>
                  <select value={time} onChange={e => setTime(e.target.value)}
                   className="custom-select" name="time" id="tim">
                    <option value="0.5">30 min</option>
                    <option value="1">1 hour</option>
                    <option value="1.5">1 hour 30 min</option>
                    <option value="2">2 hours</option>
                    <option value="2.5">2 hours 30 min</option>
                    <option value="3">3 hours</option>
                    <option value="3.5">3 hours 30 min</option>
                    <option value="4">4 hours</option>
                    <option value="4.5">5 hours 30 min</option>
                    <option value="5">5 hours</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Gender</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender"
                   value="female" onChange={e => setGender(e.target.value)} id="gf" defaultChecked/>
                  <label className="form-check-label" htmlFor="gf">Female</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender"
                   value="male" onChange={e => setGender(e.target.value)} id="gm"/>
                  <label className="form-check-label" htmlFor="gm">Male</label>
                </div>
              </div>

              <div className="form-group text-center mb-3">
                <label className="p-4">There is this much drunk in you:</label>
                <output><p><strong>{drunk.toFixed(2)}‰</strong></p></output>
              </div>
              
              <div className="col-12 mb-4 text-center">
                <button className="btn">Calculate</button>
              </div>
            </form>
          </div>
      </main>

      <footer className="row">
        <p className="col-12 col-md-6">Joona Oja</p>
        <p className="col-12 col-md-6">TIK20SP</p>
      </footer>
    </div>
    </>
  )
}

export default Alcometer;