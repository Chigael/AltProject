import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
// import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "./ErrorBoundary";
import { ErrorPage } from "./error-boundary/ErrorPage";
import { PageNotFound } from "./pages/404/PageNotFound";

function App() {
  return (
    <div className="App">
      <header className="header">
        <ErrorBoundary fallback={<ErrorPage />}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Link to="/Login">Move to Login</Link>
            </Route> */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
