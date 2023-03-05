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
				var ans = JSON.stringify(res.data.choices[0].message.content);
				ans = ans.replaceAll('"', "");
				ans = ans.replaceAll("\n", "");
				setResult(ans);
			})
			.catch((err) => {
				alert(err);
			});
	}

	return (
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
			<div id={"resultingDiv"}>{result}</div>
		</div>
	);
}

export default Caller;
