import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary";
import { ErrorPage } from "./error-boundary/ErrorPage";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppLoader } from "./component/loader/Apploader";

const App = React.lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ErrorBoundary fallback={<ErrorPage />}> */}
    <Suspense fallback={<AppLoader />}>
      <App />
    </Suspense>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);

reportWebVitals();
