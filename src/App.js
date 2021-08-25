import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Luna" animal="dog" breed="javanese" />
      <Pet name="Pepper" animal="bird" breed="cockatiel" />
      <Pet name="Doink" animal="cat" breed="mix" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
