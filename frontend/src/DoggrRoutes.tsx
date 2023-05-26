import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Match from "./components/Match";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { useAuth } from "./services/Auth";
import { ProtectedRoute } from "./components/ProtectedRoute";
import CreateProfile from "./components/CreateProfile";

export function DoggrRoutes() {
	const auth = useAuth();

	return (
		<div className={"doggrfancy"}>
			<nav className="bg-blue-800 rounded-b shadow-lg mb-4">
				<div className="navbar justify-center">
					<div className={"navbar-center lg:flex"}>
						<ul className={"menu menu-horizontal"}>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/match"> Match</Link>
							</li>
							{auth?.token != null ? (
								<li>
									<Link to="/logout">Logout</Link>
								</li>
							) : (
								<>
									<li>
										<Link to="/login"> Login</Link>
									</li>
									<li>
										<Link to="/create"> Create Account</Link>{" "}
									</li>
								</>
							)}
						</ul>
					</div>
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
				<Route path="/create" element={<CreateProfile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>
		</div>
	);
}
