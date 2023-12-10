import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-message">
      <h1>Oops!</h1>
      <p>Error: Page Does Not Exist, Click Title to Navigate Back to Home Page.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
