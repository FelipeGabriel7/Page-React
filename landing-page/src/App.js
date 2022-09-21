import React from "react";
import { Footer } from "./components/Footer";
import { Free } from "./components/Free";
import { Future } from "./components/Future";
import { Navbar } from "./components/Navbar";
import { Publish } from "./components/Publish";
import { State } from "./components/State";
import './App.css'

function App() {
  return (
    <div>
       <Navbar>
          <Publish/>
       </Navbar>
       <Future/>
       <State/>
       <Free/>
       <Footer/>
    </div>
  );
}

export default App;
