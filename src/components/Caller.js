import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function Caller() {
	const [txt, setTxt] = useState("");
	const [radioVal, setRadioVal] = useState("Users");
	const [result, setResult] = useState("");

	return (
		<div>
			<input
				type={"text"}
				value={txt}
				onChange={(e) => {
					setTxt(e.target.value);
				}}
			/>
			<br />
			<div style={{ visibility: "hidden" }}>
				<input
					type="radio"
					id="Users"
					name="fav_language"
					value={"Users"}
					defaultChecked={true}
					onChange={(e) => {
						setRadioVal(e.target.value);
					}}
				/>
				<label htmlFor="Users">Users</label>
				<input
					type="radio"
					id="Employees"
					name="fav_language"
					value={"Employees"}
					onChange={(e) => {
						setRadioVal(e.target.value);
					}}
				/>
				<label htmlFor="Employees">Employees</label>
			</div>

			<br />
			<button
				onClick={() => {
					axios
						.post("http://192.168.0.105:5000/" + radioVal, { title: txt })
						.then((res) => {
							setResult(res.data);
						})
						.catch((err) => {
							console.log(err);
						});
				}}
			>
				Click Me
			</button>
			<h3>{result}</h3>
		</div>
	);
}

export default Caller;
