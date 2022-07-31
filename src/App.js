import React, { useEffect } from 'react'; 
import About from "./components/About/About";
import Customers from "./components/Customers/Customers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Rooms from "./components/Rooms/Rooms";

function App() {

  useEffect(() => {
    const allLinks = document.querySelectorAll("a:link");
    const checkbox = document.querySelector(".checkbox");

    allLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");
        if(!href.startsWith("http")) {
          e.preventDefault();
        }
    
        // Scroll back to top
        if (href === "#top")
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    
        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({ behavior: "smooth" });
        };

        if(checkbox.checked) {
          checkbox.checked = false;
        };
      });
    });
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Rooms />
      <Customers />
      <Footer />
    </div>
  );
}

export default App;
