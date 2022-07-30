import About from "./components/About/About";
import Customers from "./components/Customers/Customers";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Rooms from "./components/Rooms/Rooms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Rooms />
      <Customers />
    </div>
  );
}

export default App;
