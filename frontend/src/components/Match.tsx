import { Profile } from "./Profile.tsx";
import { ProfileType } from "@/DoggrTypes.ts";
import { useAuth } from "../services/Auth.tsx";
import { getNextProfileFromServer } from "../services/HttpClient.tsx";
import { MatchService } from "../services/MatchService.tsx";
import { PassService } from "../services/PassService.tsx";
import { useContext, useEffect, useState } from "react";

export const Match = () => {
	const [currentProfile, setCurrentProfile] = useState<ProfileType>();

	const auth = useAuth();

	const fetchProfile = () => {
		getNextProfileFromServer()
			.then((response) => setCurrentProfile(response))
			.catch((err) => console.log("Error in fetch profile", err));
	};

	useEffect(() => {
		fetchProfile();
	}, []);

	const onLikeButtonClick = () => {
		MatchService.send(auth.userId, currentProfile.id)
			.then(fetchProfile)
			.catch((err) => {
				console.error(err);
				fetchProfile();
			});
	};

	const onPassButtonClick = () => {
		PassService.send(auth.userId, currentProfile.id)
			.then(fetchProfile)
			.catch((err) => {
				console.error(err);
				fetchProfile();
			});
	};

	const profile = (
		<Profile
			{...currentProfile}
			onLikeButtonClick={onLikeButtonClick}
			onPassButtonClick={onPassButtonClick}
		/>
	);

	return (
		<>
			<div>"MATCH PAGE"</div>
			<p> User logged in as {auth.token}</p>
			{profile}
		</>
	);
};

export default Match;
