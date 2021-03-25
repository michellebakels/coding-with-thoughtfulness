import React, {useState} from 'react'
import './App.css';
import {recipes} from "./recipes";

const displayTime = (bakeTime) => {
    const hours = (bakeTime / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours < 1 ? `${rminutes} minutes` :
        rhours === 1 ? `${rhours} hour and ${rminutes} minutes`
            : `${rhours} hours and ${rminutes} minutes`
}

function App() {
    const [bakeTime, setBakeTime] = useState("1000")

  return (
    <div id="page-container" className="page-container">
      <h1>That's So Sweet!</h1>
      <h2>Let someone know you're thinking of them by sharing dessert</h2>
        <h3>Find a recipe that works with your schedule</h3>
        <div id="recipe-selector" className="recipe-selector">
            <label>Total Bake Time:&nbsp;
                <select name="bakeTimeSelector" id="bake-time-selector" value={bakeTime} onChange={(e) => setBakeTime(e.target.value)}>
                    <option value="15">15 minutes or less</option>
                    <option value="30">30 minutes or less</option>
                    <option value="60">1 hour or less</option>
                    <option value="1000">Time is a construct - Show All</option>
                </select>
            </label>
        </div>
        <div className="recipe-cards">
          {
            recipes.map(recipe => {
                return (
                (recipe.time <= bakeTime) &&
                    <a href={recipe.link} target="_blank" style={{textDecoration: 'none'}}>
                        <div className="card">
                            <div id="bake-time" className="bake-time">{displayTime(recipe.time)}</div><br/>
                            <div id="image-item" className="item">
                                <img src={recipe.image} alt={recipe.alt} className="card-img"/>
                            </div>
                            <h4>{recipe.title}</h4><br/>
                            <br/>
                            <br/>
                        </div>
                    </a>
                )
            })
          }
        </div>
      <footer>All recipes provided by the culinary visionary, Tieghan Gerard, of <a href="https://www.halfbakedharvest.com/" target="_blank">Half Baked Harvest</a></footer>
    </div>
  );
}

export default App;
