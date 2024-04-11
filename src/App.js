import "./App.css";

function App() {
  let date = new Date("2024-04-11 00:00"); // Year, Month (0-based), Day, Hour
  let h = date.getHours(); // 0-23
  let greeting = "";
  let mystyle = {};

  if (h >= 0 && h < 12) {
    greeting = "Morning";
    mystyle.color = "white";
  } else if (h >= 12 && h < 16) {
    greeting = "Afternoon";
    mystyle.color = "yellow";
  } else if (h >= 16 && h < 20) {
    greeting = "Evening";
    mystyle.color = "orange";
  } else if (h >= 20) {
    greeting = "Night";
  }

  return (
    <div className="App">
      <h1>
        Hi sir, <span style={mystyle}>Good {greeting}</span>
      </h1>
    </div>
  );
}

export default App;
