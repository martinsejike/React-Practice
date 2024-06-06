 import Header from "./header"
import { useState } from 'react';
import { Context } from './context';
import Sidebar from "./sidebar";



function App() {
  const [togglebar,setTogglebar]= useState(false);
  return (
    <div>
   
        <Context.Provider value={{ togglebar, setTogglebar }}>
          <Header />

          <section className="flex">

          <Sidebar />
          <section className="p-4">
            <strong> Hey [Name]</strong>
            <h3>Welcome to your bashboard</h3>
          </section>
          </section>
        </Context.Provider>
    </div>
  );
}

export default App;     