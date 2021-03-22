import React from "react";
import "./Button.css";
import { evaluate } from "mathjs";

function Button(props) {
	return (
		<button
			className={
				"button " +
				(props.isOperator ? "operator" : "") +
				(props.isEquals ? "equals" : "")
			}
			onClick={() => props.handleButtonClick(props.text)}
		>
			{props.text}
		</button>
	);
}

export default Button;
