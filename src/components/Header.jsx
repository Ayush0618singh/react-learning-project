import { useContext } from "react";
import UserContext from "../context/UserContext";
import Navbar from "./Navbar"; 

function Header() {
  const user = useContext(UserContext);
  return (
    <>
    <div className="bg-primary text-white text-center p-2">
      <h5>
        Welcome {user.name} | {user.course} | {user.tech}
      </h5>
    </div>
    
    <Navbar/>
    </>
  );
}

export default Header;