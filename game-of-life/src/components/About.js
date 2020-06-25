import React from "react";

export default function About() {
  return (
    <section className="App">
      <div className="rules">
        <div className="Title">
          <h1> John Conway's Game of Life</h1>
          <h4> by Keyeric Bristol</h4>
        </div>
        <div>
          In the Game of Life, these rules examine each cell of the grid.{" "}
        </div>
        <div>
          For each cell, it counts that cell's eight neighbors (up, down, left,
          right, and diagonals), and then act on that result.
        </div>
        <ul>
          <li>
            If the cell is alive and has 2 or 3 neighbors, then it remains
            alive. Else it dies.
          </li>
          <li>
            If the cell is dead and has exactly 3 neighbors, then it comes to
            life. Else if remains dead.
          </li>
        </ul>
        <div>
          From those two rules, many types of "creatures" can be created that
          move around the "landscape".
        </div>
      </div>
    </section>
  );
}
