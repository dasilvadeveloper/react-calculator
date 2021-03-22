import React, { useState } from "react";
import Button from "./button/Button";
import "./Calculator.css";
const { evaluate } = require("mathjs");

function Calculator() {
	const [display, setDisplay] = useState("");

	/**
	 * Func to add data to the console
	 * @param {ButtonText} btn
	 */
	const onButtonClick = (btn) => {
		// Verify if display has less than 9 chars
		if (display.length < 9) {
			setDisplay(display + btn);
		}
	};

	/**
	 * Method to clear last input from display
	 */
	const clear = () => {
		setDisplay(display.substr(0, display.length - 1));
	};

	/**
	 * Method to clear last input from display
	 */
	const equals = () => {
		try {
			setDisplay(evaluate(display).toString());
		} catch (ignored) {
			setDisplay("");
		}
	};

	return (
		<div className="calculator">
			<div className="display">
				<span>{display}</span>
			</div>
			<div className="buttons-container">
				<Button
					text="7"
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="8"
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="9"
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="⌫"
					isOperator
					handleButtonClick={clear}
				/>
				<Button
					text="4"
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="5"
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="6"
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="+"
					isOperator
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="1"
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="2"
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="3"
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="*"
					isOperator
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="."
					isOperator
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="0"
					handleButtonClick={onButtonClick}
				/>
				<Button
					text="="
					isEquals
					handleButtonClick={equals}
				/>
				<Button
					text="-"
					isOperator
					handleButtonClick={onButtonClick}
				/>
			</div>
			<h5>
				Developed by{" "}
				<a href="http://t04-hendrick.vigion.pt">
					Hendrik Lelis
				</a>
			</h5>
		</div>
	);
}

export default Calculator;
