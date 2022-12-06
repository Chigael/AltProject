import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import AuthProvider from './context/AuthContext.js';
// import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "./ErrorBoundary";
import { ErrorPage } from "./error-boundary/ErrorPage";
import { PageNotFound } from "./pages/404/PageNotFound";

function App() {
  return (
   <ErrorBoundary fallback={<ErrorPage />}>
    <AuthProvider>
    <div className="App">
      <header className="header">
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Link to="/Login">Move to Login</Link>
            </Route> */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
      </header>
    </div>
    </AuthProvider>
 </ErrorBoundary>
  );
}

export default App;
