import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./services/Auth";
import { DoggrRoutes } from "./DoggrRoutes";
import "@css/DoggrStyles.css";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<div className="App Doggr">
					<DoggrRoutes />
				</div>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
