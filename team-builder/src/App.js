import React, { useState } from "react";
import "./App.css";
import TeamList from "./components/teamlist";
import Team from "./components/team";

function App() {
	const [teamMembers, setTeamMembers] = useState([]);

	const addNewMember = (member) => {
		const newMember = {
			id: Date.now(),
			name: member.name,
		};
		setTeamMembers([...teamMembers, newMember]);
	};

	return (
		<div className="App">
			<h1>Team Members</h1>
			<TeamList addNewMember={addNewMember} />
			<Team teamMembers={teamMembers} />
		</div>
	);
}

export default App;
