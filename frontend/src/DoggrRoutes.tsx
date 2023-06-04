import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Match from "./components/Match";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { NavBar } from "./components/Navigation.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute";
import CreateProfile from "./components/CreateProfile";

export function DoggrRoutes() {
	return (
		<div className={"doggrfancy"}>
			<NavBar />
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
