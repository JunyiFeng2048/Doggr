import "@css/App.css";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Match from "./components/Match";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<nav>
					<div className="menu">
						<Link to="/">Home</Link> ||
						<Link to="/match">Match</Link>
					</div>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/match" element={<Match />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
