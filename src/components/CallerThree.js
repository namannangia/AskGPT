import React from "react";

function CallerThree() {
	var data = {
		id: "chatcmpl-6qUjCogDHIHWrKKrYgmjDDaoFzfLC",
		object: "chat.completion",
		created: 1677969194,
		model: "gpt-3.5-turbo-0301",
		usage: {
			prompt_tokens: 10,
			completion_tokens: 14,
			total_tokens: 24,
		},
		choices: [
			{
				message: {
					role: "assistant",
					content: "\n\nI was created by a team of developers at OpenAI.",
				},
				finish_reason: "stop",
				index: 0,
			},
		],
	};

	return (
		<div>
			{JSON.stringify(
				data.choices[0].message.content.replaceAll("\n", "")
			).replaceAll('"', "")}
		</div>
	);
}

export default CallerThree;
