import settingsData from '../../../config.json';
import { useState } from "react";
import $ from "jquery";

export default function Settings() {
    const [result, setResult] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = $(e.target);
		$.ajax({
			type: "POST",
			url: form.attr("action"),
			data: form.serialize(),
			success(data) {
				setResult(data);
			},
		});
	};

    return (
        <>
            <h1>Settings</h1>
            <form action="http://localhost:8000/server.php" method="post" onSubmit={(event) => handleSubmit(event)} className="settings-form">
                <Option optionName={"skipStoryModeChoice"} check={settingsData.skipStoryModeChoice} text={"Skip the choice between Awakening and Duviri?"} />
                <Option optionName={"skipTutorial"} check={settingsData.skipTutorial} text={"Skip the tutorial?"} />
                <Option optionName={"unlockAllMissions"} check={settingsData.unlockAllMissions} text={"Unlock all Star Chart nodes?"} />
                <Option optionName={"unlockAllQuests"} check={settingsData.unlockAllQuests} text={"Unlock all Quests?"} />
                <Option optionName={"infiniteResources"} check={settingsData.infiniteResources} text={"Do you want infinite credits and platinum?"} />
                <Option optionName={"unlockallShipFeatures"} check={settingsData.unlockallShipFeatures} text={"Do you want to unlock all Ship Segments?"} />
                <Option optionName={"unlockAllShipDecorations"} check={settingsData.unlockAllShipDecorations} text={"Do you want to unlock all Ship Decorations?"} />
                <input type="submit" value="Submit" />
            </form>
            <h1>{result}</h1>
        </>
    )
}

function Option(props) {
    return (
        <>
            <label>
            {props.text}
            <input type="radio" id={props.optionName} name={props.optionName} defaultChecked={props.check} value="true"/> Yes
            <input type="radio" id={props.optionName} name={props.optionName} defaultChecked={!props.check} value="false"/> No
            </label><br/>
        </>
    )
}