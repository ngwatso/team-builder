import React, { useState } from "react";

export default function TeamList(props) {
	const [memberName, setMemberName] = useState({
		name: "",
		email: "",
		role: "",
	});

	const handleChange = (event) => {
		setMemberName({
			...memberName,
			[event.target.name]: event.target.value,
		});
	};

	const submitForm = (event) => {
		event.preventDefault();
		props.addNewMember(memberName);
		setMemberName({ name: "", email: "", role: "" });
	};

	return (
		<form onSubmit={submitForm}>
			<label htmlFor="name">Name</label>
			<input
				id="name"
				name="name"
				type="text"
				placeholder="Enter Name"
				onChange={handleChange}
				value={memberName.name}
			/>
			<label htmlFor="email">Email</label>
			<input
				id="email"
				name="email"
				type="text"
				placeholder="Email Address"
				onChange={handleChange}
				value={memberName.email}
			/>
			<label htmlFor="role">Role</label>
			<input
				id="role"
				name="role"
				type="text"
				placeholder="Team Role"
				onChange={handleChange}
				value={memberName.role}
			/>
			<button type="submit">Add Team Member</button>
		</form>
	);
}
