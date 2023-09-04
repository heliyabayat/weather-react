import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="bg-white p-4 rounded app ">
      <div className="container">
        <SearchBar />
        <p className="mt-5 d-flex justify-content-center gap-2">
          <a
            className="badge bg-light link-dark"
            href="https://github.com/heliyabayat/weather-react"
          >
            <i className="bi bi-github"></i>
            <span className="ms-1">Github</span>
          </a>
          <span>by</span>
          <a
            className="badge badge-lg bg-light link-dark"
            href="https://heliyabayat.github.io/"
          >
            Heliya Bayat Makoo
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
