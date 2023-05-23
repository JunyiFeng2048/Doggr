import "@css/App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./services/Auth";
import { DoggrRoutes } from "./DoggrRoutes";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<div className="App">
					<DoggrRoutes />
				</div>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
