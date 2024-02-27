import settingsData from '../../../config.json';
import inventorySettingsData from '../../../static/fixed_responses/new_inventory.json';
import postTutorialInventorySettingsData from '../../../static/fixed_responses/postTutorialInventory.json';
import { useState } from "react";
import $ from "jquery";

export default function Settings() {
    const [changeSettings, setChangeSettings] = useState(false);

    const handleChangeSetting = () => {
        setChangeSettings((prevState) => !prevState);
    };

    if (!changeSettings) {
        return (
            <>
                <h1>Settings</h1>
                <div className='sendMeLeft'>
                    <button onClick={handleChangeSetting}>
                        Change Inventory Settings
                    </button>
                    <Config />
                </div>
            </>
        )
    } else {
        return (
            <>
                <h1>Settings</h1>
                <div className='sendMeLeft'>
                    <button onClick={handleChangeSetting}>
                        Change Config Settings
                    </button>
                    <Inventory />
                </div>
            </>
        )
    }
}

function Config() {
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
            <form action="http://localhost:8000/server.php" method="post" onSubmit={(event) => handleSubmit(event)} className="settings-form">
                <input type="hidden" name="idFile" id="idFile" value="config.json" />
                <table>
                    <tbody>
                        <Option optionName={"skipStoryModeChoice"} check={settingsData.skipStoryModeChoice} text={"Skip the choice between Awakening and Duviri?"} />
                        <Option optionName={"skipTutorial"} check={settingsData.skipTutorial} text={"Skip the tutorial?"} />
                        <Option optionName={"unlockAllMissions"} check={settingsData.unlockAllMissions} text={"Unlock all Star Chart nodes?"} />
                        <Option optionName={"unlockAllQuests"} check={settingsData.unlockAllQuests} text={"Unlock all Quests?"} />
                        <Option optionName={"infiniteResources"} check={settingsData.infiniteResources} text={"Do you want infinite credits and platinum?"} />
                        <Option optionName={"unlockallShipFeatures"} check={settingsData.unlockallShipFeatures} text={"Do you want to unlock all Ship Segments?"} />
                        <Option optionName={"unlockAllShipDecorations"} check={settingsData.unlockAllShipDecorations} text={"Do you want to unlock all Ship Decorations?"} />
                    </tbody>
                </table>
                <input type="submit" value="Submit" />
            </form>
            <h1>{result}</h1>
        </>
    )          
}

function Inventory() {
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
    
    if (true==true) { 
        // if (settingsData.skipTutorial) is the correct version, but until the emulator itself is fixed, gotta disable this check
        return (
            <>
                <h1>POST TUTORIAL INVENTORY</h1>
                <form action="http://localhost:8000/server.php" method="post" onSubmit={(event) => handleSubmit(event)} className="settings-form">
                    <input type="hidden" name="idFile" id="idFile" value="postTutorialInventory.json" />
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Maximum Reputation Per Reset:
                                </td>
                                <td>
                                    <input type='number' name='reputationCaps' id="reputationCaps" defaultValue={postTutorialInventorySettingsData.DailyAffiliation}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Maximum Focus Per Reset:
                                </td>
                                <td>
                                <input type='number' name='focusCaps' id='focusCaps' defaultValue={postTutorialInventorySettingsData.DailyFocus}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="Submit" />
                </form>
                <h1>{result}</h1>
            </>
        )
    }else{
        return (
            <>
                <h1>INVENTORY</h1>
                <form action="http://localhost:8000/server.php" method="post" onSubmit={(event) => handleSubmit(event)} className="settings-form">
                    <input type="hidden" name="idFile" id="idFile" value="new_inventory.json" />
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Maximum Reputation Per Reset:
                                </td>
                                <td>
                                    <input type='number' name='reputationCaps' id="reputationCaps" defaultValue={inventorySettingsData.DailyAffiliation}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Maximum Focus Per Reset:
                                </td>
                                <td>
                                <input type='number' name='focusCaps' id='focusCaps' defaultValue={inventorySettingsData.DailyFocus}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="Submit" />
                </form>
                <h1>{result}</h1>
            </>
        )
    }
}

function Option(props) {
    return (
        <>
            <tr>
                <td>{props.text}</td>
                <td><input type="radio" id={props.optionName} name={props.optionName} defaultChecked={props.check} value="true"/> Yes</td>
                <td><input type="radio" id={props.optionName} name={props.optionName} defaultChecked={!props.check} value="false"/> No</td>
            </tr>
        </>
    )
}