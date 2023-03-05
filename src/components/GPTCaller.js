import React, { useState } from "react";
import axios from "axios";
import "./theme.css";

function Caller() {
	const [txt, setTxt] = useState("");
	const [result, setResult] = useState("");

	function sendRequest() {
		if (txt === "" || txt.trim() === "") {
			alert("Provide more info!");
			return;
		}
		setResult("Loading...");
		axios
			.post(
				"https://api.openai.com/v1/chat/completions",
				{
					model: "gpt-3.5-turbo",
					messages: [{ role: "user", content: txt }],
				},
				{
					headers: {
						Authorization:
							"Bearer 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",
					},
				}
			)
			.then((res) => {
				var ans = res.data.choices[0].message.content;
				ans = ans.trim(4);
				setResult(ans);
			})
			.catch((err) => {
				alert(err);
			});
	}

	return (
		<div
			className="wrapper"
			style={{
				height: window.innerWidth < 500 ? "70vh" : "85vh",
			}}
		>
			<h3 className="heading">AskGPT</h3>
			<div id="mainDiv">
				<div id={"upperDiv"}>
					<input
						type={"text"}
						id={"myInput"}
						placeholder={"Who is Narendra Modi?"}
						value={txt}
						onChange={(e) => {
							setTxt(e.target.value);
						}}
					/>
					<button
						id={"btn"}
						className="btn btn-success"
						onClick={() => sendRequest()}
					>
						AskGPT
					</button>
				</div>
				<hr className="horRow" />
				<div id={"resultingDiv"}>
					<pre
						id={"textHolder"}
						style={{
							maxHeight: window.innerWidth < 500 ? "45vh" : "55vh",
						}}
					>
						{result}
					</pre>
				</div>
			</div>
		</div>
	);
}

export default Caller;
