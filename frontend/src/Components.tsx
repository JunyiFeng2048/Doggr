import { useState, useEffect } from "react";
import axios from "axios";

export const Header = () => {
	return (
		<div>
			<h1>Doggr</h1>
			<h3>Where your pets finds love(tm)</h3>
			<br />{" "}
		</div>
	);
};

export const Button = () => {
	let [clicks, setClicks] = useState(0);

	return (
		<button
			onClick={() => {
				setClicks(clicks + 1);
			}}
		>
			Clicks: {clicks}
		</button>
	);
};

export const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const users = await axios.get("http://localhost:8080/users");
			setUsers(users.data);
		};
		void getUsers();
	}, []);

	return (
		<div>
			<h2>Users:</h2>
			{users ? (
				<ul>
					{users.map((user: { email: string; name: string }) => (
						<li key={user.email.toString()}>
							{user.name} - {user.email}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export const Match = () => {
	return <div>"MATCH PAGE"</div>;
};

export const Home = () => {
	return (
		<div>
			<Title />
			<Subtitle />
		</div>
	);
};

export function Title() {
	return <h1>Doggr</h1>;
}

export function Subtitle() {
	return <h3>Where your pets find love(tm)</h3>;
}
