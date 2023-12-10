import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <Link to={"/"}>
          <h1>Rancid Tomatillos</h1>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;