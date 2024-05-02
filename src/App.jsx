import viteLogo from "/vite.svg";
import "./App.css";
import pic from "./assets/woman.jpeg";
import Header from "./header.jsx";
import Button from "./COMPONENT/button.jsx";

function App() {
  const text = "Welcome to my First React App";

  return (
    // react frament
    <main className="bg-grey-700">
      <Header />
      <section className="h-[90vh] text-white flex justify-center gap-3 items-center flex-col">
        <h1 className="text-[5vw] font-mono font-bold">{text}</h1>
        <section className="flex gap-3">
          <Button bg={"bg-blue-500"} name="Get Started" />
          <Button bg={"bg-[whitesmoke] text-[black]"} 
          name="See Documentation" />
        </section>
      </section>
    </main>
  );
}
export default App;

