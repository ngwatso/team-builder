import React from "react";

const Team = (props) => {
	return (
		<div className="team-list">
			{props.teamMembers.map((teamMate) => (
				<div className="team-member" key={teamMate.id}>
					<h2>{teamMate.name}</h2>
				</div>
			))}
		</div>
	);
};

export default Team;
