import axios from "axios";
import { ProfileType } from "../DoggrTypes";

const serverIP = import.meta.env.VITE_API_HOST;
const serverPort = import.meta.env.VITE_PORT;

const serverUrl = `http://${serverIP}:${serverPort}`;

// This is why I use Axios over Fetch
export const httpClient = axios.create({
	baseURL: serverUrl,
	headers: {
		"Content-type": "application/json",
	},
});

export async function getNextProfileFromServer() {
	const profile = await httpClient.get<ProfileType>("/profile");
	return profile.data;
}
