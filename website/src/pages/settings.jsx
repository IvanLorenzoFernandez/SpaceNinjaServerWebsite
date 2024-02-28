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
                        <OptionRadio optionName={"skipStoryModeChoice"} check={settingsData.skipStoryModeChoice} text={"Skip the choice between Awakening and Duviri?"} />
                        <OptionRadio optionName={"skipTutorial"} check={settingsData.skipTutorial} text={"Skip the tutorial?"} />
                        <OptionRadio optionName={"unlockAllMissions"} check={settingsData.unlockAllMissions} text={"Unlock all Star Chart nodes?"} />
                        <OptionRadio optionName={"unlockAllQuests"} check={settingsData.unlockAllQuests} text={"Unlock all Quests?"} />
                        <OptionRadio optionName={"infiniteResources"} check={settingsData.infiniteResources} text={"Do you want infinite credits and platinum?"} />
                        <OptionRadio optionName={"unlockallShipFeatures"} check={settingsData.unlockallShipFeatures} text={"Do you want to unlock all Ship Segments?"} />
                        <OptionRadio optionName={"unlockAllShipDecorations"} check={settingsData.unlockAllShipDecorations} text={"Do you want to unlock all Ship Decorations?"} />
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
                <h1>Inventory Options for New Accounts</h1>
                <form action="http://localhost:8000/server.php" method="post" onSubmit={(event) => handleSubmit(event)} className="settings-form">
                    <input type="hidden" name="idFile" id="idFile" value="postTutorialInventory.json" />
                    <table>
                        <tbody>
                            <OptionNumber optionName="reputationCaps" optionKey={postTutorialInventorySettingsData.DailyAffiliation} text="Maximum Reputation Per Reset:"/>
                            <OptionNumber optionName="focusCaps" optionKey={postTutorialInventorySettingsData.DailyFocus} text="Maximum Focus Per Reset:"/>
                            <OptionNumber optionName="RegularCredits" optionKey={postTutorialInventorySettingsData.RegularCredits} text="Starting Credits:"/>
                            <OptionNumber optionName="FusionPoints" optionKey={postTutorialInventorySettingsData.FusionPoints} text="Starting Endo:"/>
                            <OptionNumber optionName="PremiumCredits" optionKey={postTutorialInventorySettingsData.PremiumCredits} text="Starting Platinum:"/>
                            <OptionNumber optionName="SuitBin" optionKey={postTutorialInventorySettingsData.SuitBin.Slots} text="Warframe Slots:"/>
                            <OptionNumber optionName="WeaponBin" optionKey={postTutorialInventorySettingsData.WeaponBin.Slots} text="Weapon Slots:"/>
                            <OptionNumber optionName="SentinelBin" optionKey={postTutorialInventorySettingsData.SentinelBin.Slots} text="Companion Slots:"/>
                            <OptionNumber optionName="MechBin" optionKey={postTutorialInventorySettingsData.MechBin.Slots} text="Vehicle Slots:"/>
                            <OptionNumber optionName="SpaceSuitBin" optionKey={postTutorialInventorySettingsData.SpaceSuitBin.Slots} text="Archwing Slots:"/>
                            <OptionNumber optionName="SpaceWeaponBin" optionKey={postTutorialInventorySettingsData.SpaceWeaponBin.Slots} text="Archweapon Slots:"/>
                            <OptionNumber optionName="OperatorAmpBin" optionKey={postTutorialInventorySettingsData.OperatorAmpBin.Slots} text="Operator Amp Slots:"/>
                            <OptionNumber optionName="RandomModBin" optionKey={postTutorialInventorySettingsData.RandomModBin.Slots} text="Max amount of Rivens:"/>
                            <OptionNumber optionName="CrewMemberBin" optionKey={postTutorialInventorySettingsData.CrewMemberBin.Slots} text="Railjack Crew Member Slots:"/>
                            <OptionNumber optionName="CrewShipSalvageBin" optionKey={postTutorialInventorySettingsData.CrewShipSalvageBin.Slots} text="Railjack Component Slots:"/>
                            <OptionNumber optionName="PveBonusLoadoutBin" optionKey={postTutorialInventorySettingsData.PveBonusLoadoutBin.Slots} text="Extra Normal Loadout Slots:"/>
                            <OptionNumber optionName="PvpBonusLoadoutBin" optionKey={postTutorialInventorySettingsData.PvpBonusLoadoutBin.Slots} text="Extra Conclave Loadout Slots:"/>
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
                <h1>Inventory Options for New Accounts</h1>
                <form action="http://localhost:8000/server.php" method="post" onSubmit={(event) => handleSubmit(event)} className="settings-form">
                    <input type="hidden" name="idFile" id="idFile" value="new_inventory.json" />
                    <table>
                        <tbody>
                            <OptionNumber optionName="reputationCaps" optionKey={inventorySettingsData.DailyAffiliation} text="Maximum Reputation Per Reset:"/>
                            <OptionNumber optionName="focusCaps" optionKey={inventorySettingsData.DailyFocus} text="Maximum Focus Per Reset:"/>
                            <OptionNumber optionName="CrewMemberBin" optionKey={inventorySettingsData.CrewMemberBin.Slots} text="Railjack Crew Member Slots:"/>
                            <OptionNumber optionName="CrewShipSalvageBin" optionKey={inventorySettingsData.CrewShipSalvageBin.Slots} text="Railjack Component Slots:"/>
                            <OptionNumber optionName="FusionPoints" optionKey={inventorySettingsData.FusionPoints} text="Starting Endo:"/>
                            <OptionNumber optionName="MechBin" optionKey={inventorySettingsData.MechBin.Slots} text="Vehicle Slots:"/>
                            <OptionNumber optionName="OperatorAmpBin" optionKey={inventorySettingsData.OperatorAmpBin.Slots} text="Operator Amp Slots:"/>
                            <OptionNumber optionName="PveBonusLoadoutBin" optionKey={inventorySettingsData.PveBonusLoadoutBin.Slots} text="Normal Loadout Slots:"/>
                            <OptionNumber optionName="PvpBonusLoadoutBin" optionKey={inventorySettingsData.PvpBonusLoadoutBin.Slots} text="Conclave Loadout Slots:"/>
                            <OptionNumber optionName="RandomModBin" optionKey={inventorySettingsData.RandomModBin.Slots} text="Max amount of Rivens:"/>
                            <OptionNumber optionName="RegularCredits" optionKey={inventorySettingsData.RegularCredits} text="Starting Credits:"/>
                            <OptionNumber optionName="SentinelBin" optionKey={inventorySettingsData.SentinelBin.Slots} text="Companion Slots:"/>
                            <OptionNumber optionName="SpaceSuitBin" optionKey={inventorySettingsData.SpaceSuitBin.Slots} text="Archwing Slots:"/>
                            <OptionNumber optionName="SpaceWeaponBin" optionKey={inventorySettingsData.SpaceWeaponBin.Slots} text="Archweapon Slots:"/>
                            <OptionNumber optionName="SuitBin" optionKey={inventorySettingsData.SuitBin.Slots} text="Warframe Slots:"/>
                            <OptionNumber optionName="WeaponBin" optionKey={inventorySettingsData.WeaponBin.Slots} text="Weapon Slots:"/>
                        </tbody>
                    </table>
                    <input type="submit" value="Submit" />
                </form>
                <h1>{result}</h1>
            </>
        )
    }
}

function OptionRadio(props) {
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

function OptionNumber(props) {
    return (
        <>
            <tr>
                <td>{props.text}</td>
                <td><input type='number' name={props.optionName} id={props.optionName} defaultValue={props.optionKey}></input></td>
            </tr>
        </>
    )
}