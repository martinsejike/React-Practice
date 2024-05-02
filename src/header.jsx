import logo from "../public/vite.svg";
import "./styles/header.css";
import Button from "./COMPONENT/button";
function header() {
  const buttonName = "get started";

  return (
    <header>
      <img src={logo} alt="image" />
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Gallery</a>

        <Button bg={"bg-blue-500"} name={buttonName} />
        <Button bg={"bg-blue-500"} name={"Loin"} />
      </nav>
    </header>
  );
}
export default header;
