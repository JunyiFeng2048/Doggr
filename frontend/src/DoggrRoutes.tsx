import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Match from "./components/Match";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { useAuth } from "./services/Auth";
import { ProtectedRoute } from "./components/ProtectedRoute";

export function DoggrRoutes() {
	const auth = useAuth();

	return (
		<>
			<nav>
				<div className="menu">
					<Link to="/">Home</Link> ||
					<Link to="/match">Match</Link> ||
					{auth?.token != null ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
				</div>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/match"
					element={
						<ProtectedRoute>
							<Match />
						</ProtectedRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>
		</>
	);
}
