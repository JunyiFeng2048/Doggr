import { useEffect } from "react";
import { useAuth } from "../services/Auth.tsx";
import { useNavigate } from "react-router-dom";

export function Logout() {
	const auth = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		async function processLogout() {
			if (auth) {
				auth.handleLogout();
				navigate("/");
			} else {
				//should never happens
				console.error("Authorization context is null!");
				navigate("/");
			}
		}
		processLogout().then(() => console.log("Logged out"));
	});

	return <div>Logging out...</div>;
}

export default Logout;
