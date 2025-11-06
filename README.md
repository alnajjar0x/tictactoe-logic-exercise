# 🎮 Tic-Tac-Toe: A Logic Analysis Exercise

A simple Tic-Tac-Toe game built with React (Next.js) to practice and analyze application logic.

## 🎯 Primary Goal: From Code to Pentesting

As a Penetration Tester, this project is an exercise to:

* **Practice Logic:** Implement state management and event sequencing.
* **Deconstruct Logic:** Understand how an app *should* work to learn how it can be *broken*. This is foundational for finding **Business Logic Vulnerabilities**.

---

## 🧠 Logic Breakdown

### 1. State Management (`useState`)

* `cells`: 9-item array tracking each square's state ("" or "circle"/"cross").
* `go`: String tracking the current player's turn.
* `winningMessage`: String storing the end-game state (winner or "Draw!").

### 2. Gameplay Logic (in `Cell` component)

1.  **Validation:** `handleClick` halts if the game is over or the square is already taken.
2.  **State Update:** Updates a copy of the `cells` array with the current player's move.
3.  **Turn Switch:** Swaps the `go` state to the next player.

### 3. Win/Draw Logic (`useEffect`)

* **Win:** A `useEffect` hook monitors `cells` and checks all `winningCombos` for a 3-in-a-row match.
* **Draw:** A separate `useEffect` checks if all `cells` are full **AND** no `winningMessage` is set.

### 4. Reset Logic

* A "Reset Game" button calls `handleReset` to restore all state variables to their defaults.

---

## 🛠️ Tech Stack

* **React** & **Next.js**
* **TypeScript**
* **CSS** (Grid & Flexbox)

---

## 🚀 How to Run Locally

1.  `git clone [YOUR_REPOSITORY_LINK_HERE]`
2.  `cd [PROJECT_FOLDER_NAME]`
3.  `npm install`
4.  `npm run dev`