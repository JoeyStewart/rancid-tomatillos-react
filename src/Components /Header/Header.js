import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to={"/"}>
        <h1 className="rancid">Rancid Tomatillos</h1>
      </Link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Limelight&display=swap"
        rel="stylesheet"
      />
    </header>
  );
}

export default Header;