import Header from "./components/Header/Header.jsx";
import CoreConsepts from "./components/CoreConsepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConsepts />
        <Examples />
      </main>
    </>
  );
}
//* onSelect is our custom prop that gives info to TabButton, in fact it is onClick

export default App;
