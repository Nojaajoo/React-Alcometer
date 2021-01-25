import React, {useState} from "react";
import './App.css';

export default function Alcometer() {
  
  return (
    <>
    <div class="container-fluid">
      <header class="row">
      <h2 class="col-12 text-center display-4">Blood Alcohol Level Calculator or Alcometer</h2>
      </header>

      <main class="row">
          <div class="col-12">
            <form>

              <div class="input-group mt-4">
                <label class="input-group-text" for="wei">Weight</label>
                <input class="form-control" type="number" placeholder="Your weight (kg)" id="wei"/>
              </div>

              <div class="input-group mt-4">
                <label class="input-group-text" for="botl">Bottles</label>
                <select class="custom-select" name="bottles" id="botl">
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
              
              <div class="form-group">
                <div class="input-group mt-4">
                  <label class="input-group-text" for="tim">Time</label>
                  <select class="custom-select" name="time" id="tim">
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

              <div class="form-group">
                <label>Gender</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gender" value="female" id="gf" defaultChecked/>
                  <label class="form-check-label" for="gf">Female</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gender" value="male" id="gm"/>
                  <label class="form-check-label" for="gm">Male</label>
                </div>
              </div>

              <div class="form-group text-center mb-3">
                <label class="p-4">There is this much drunk in you:</label>
                <output>1234</output>
              </div>
              <div class="col-12 mb-4 text-center">
                <button class="btn">Calculate</button>
              </div>
            </form>
          </div>
      </main>

      <footer class="row">
        <p class="col-12 col-md-6">Joona Oja</p>
        <p class="col-12 col-md-6">TIK20SP</p>
      </footer>
    </div>
    
    
    </>
  )
}