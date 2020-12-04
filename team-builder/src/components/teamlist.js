import React, { useState } from "react";

export default function TeamList(props) {
	const [memberName, setMemberName] = useState({ name: "" });

	const handleChange = (event) => {
		setMemberName({
			...memberName,
			name: event.target.value,
		});
	};

	const submitForm = (event) => {
		event.preventDefault();
		props.addNewMember(memberName);
		setMemberName({ name: "" });
	};

	return (
		<form onSubmit={submitForm}>
			<label htmlFor="name">Name</label>
			<input
				id="name"
				type="text"
				placeholder="Enter Name"
				onChange={handleChange}
				value={memberName.name}
			/>
			<button type="submit">Add Team Member</button>
		</form>
	);
}
