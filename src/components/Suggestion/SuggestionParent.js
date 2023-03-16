import React from "react";
import Suggestion from "../Suggestion";
import "./suggestionparent.css";
const SuggestionParent = () => {
	return (
		<div className="suggestion-parent">
			<Suggestion />
			<Suggestion />
		</div>
	);
};

export default SuggestionParent;
