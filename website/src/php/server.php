<?php
    header('Access-Control-Allow-Origin: http://localhost:5173');
    if ($_POST['idFile']=="config.json") {
        $settings = file_get_contents("../../../config.json");
        $settingsData = json_decode($settings, true);
        foreach ($settingsData as $key => $val) {
            if ($key=='skipStoryModeChoice'){
                if (isset($_POST['skipStoryModeChoice'])){
                    $settingsData[$key]=$_POST['skipStoryModeChoice']=="true" ? true : false;
                }
            }
            if ($key=='skipTutorial'){
                if (isset($_POST['skipTutorial'])){
                    $settingsData[$key]=$_POST['skipTutorial']=="true" ? true : false;
                }
            }
            if ($key=='unlockAllMissions'){
                if (isset($_POST['unlockAllMissions'])){
                    $settingsData[$key]=$_POST['unlockAllMissions']=="true" ? true : false;
                }
            }
            if ($key=='unlockAllQuests'){
                if (isset($_POST['unlockAllQuests'])){
                    $settingsData[$key]=$_POST['unlockAllQuests']=="true" ? true : false;
                }
            }
            if ($key=='infiniteResources'){
                if (isset($_POST['infiniteResources'])){
                    $settingsData[$key]=$_POST['infiniteResources']=="true" ? true : false;
                }
            }
            if ($key=='unlockallShipFeatures'){
                if (isset($_POST['unlockallShipFeatures'])){
                    $settingsData[$key]=$_POST['unlockallShipFeatures']=="true" ? true : false;
                }
            }
            if ($key=='unlockAllShipDecorations'){
                if (isset($_POST['unlockAllShipDecorations'])){
                    $settingsData[$key]=$_POST['unlockAllShipDecorations']=="true" ? true : false;
                }
            }
        }
        $updatedSettingsData = json_encode($settingsData, JSON_PRETTY_PRINT);
        file_put_contents('../../../config.json', $updatedSettingsData);
        echo ("Changes have been saved!");
    }
    if ($_POST['idFile']=="postTutorialInventory.json") {
        $postTutorialInventory = file_get_contents('../../../static/fixed_responses/postTutorialInventory.json');
        $postTutorialInventoryData = json_decode($postTutorialInventory, true);
        foreach ($postTutorialInventoryData as $key => $val) {
            if ($key=='DailyAffiliation'){
                $postTutorialInventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationPvp'){
                $postTutorialInventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationLibrary'){
                $postTutorialInventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationCetus'){
                $postTutorialInventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationQuills'){
                $postTutorialInventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationSolaris'){
                $postTutorialInventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationVentkids'){
                $postTutorialInventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationVox'){
                $postTutorialInventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationEntrati'){
                $postTutorialInventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationNecraloid'){
                $postTutorialInventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationZariman'){
                $postTutorialInventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationKahl'){
                $postTutorialInventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyFocus'){
                $postTutorialInventoryData[$key]=$_POST['focusCaps'];
            }
            if ($key=='RegularCredits'){
                $postTutorialInventoryData[$key]=$_POST['RegularCredits'];
            }
            if ($key=='FusionPoints'){
                $postTutorialInventoryData[$key]=$_POST['FusionPoints'];
            }
            if ($key=='PremiumCredits'){
                $postTutorialInventoryData[$key]=$_POST['PremiumCredits'];
            }
            if ($key=='SuitBin'){
                $postTutorialInventoryData[$key]['Slots']=$_POST['SuitBin'];
            }
            if ($key=='WeaponBin'){
                $postTutorialInventoryData[$key]['Slots']=$_POST['WeaponBin'];
            }
            if ($key=='SentinelBin'){
                $postTutorialInventoryData[$key]['Slots']=$_POST['SentinelBin'];
            }
            if ($key=='MechBin'){
                $postTutorialInventoryData[$key]['Slots']=$_POST['MechBin'];
            }
            if ($key=='SpaceSuitBin'){
                $postTutorialInventoryData[$key]['Slots']=$_POST['SpaceSuitBin'];
            }
            if ($key=='SpaceWeaponBin'){
                $postTutorialInventoryData[$key]['Slots']=$_POST['SpaceWeaponBin'];
            }
            if ($key=='OperatorAmpBin'){
                $postTutorialInventoryData[$key]['Slots']=$_POST['OperatorAmpBin'];
            }
            if ($key=='RandomModBin'){
                $postTutorialInventoryData[$key]['Slots']=$_POST['RandomModBin'];
            }
            if ($key=='CrewMemberBin'){
                $postTutorialInventoryData[$key]['Slots']=$_POST['CrewMemberBin'];
            }
            if ($key=='CrewShipSalvageBin'){
                $postTutorialInventoryData[$key]['Slots']=$_POST['CrewShipSalvageBin'];
            }
            if ($key=='PveBonusLoadoutBin'){
                $postTutorialInventoryData[$key]['Slots']=$_POST['PveBonusLoadoutBin'];
            }
            if ($key=='PvpBonusLoadoutBin'){
                $postTutorialInventoryData[$key]['Slots']=$_POST['PvpBonusLoadoutBin'];
            }
        }
        $updatedPostTutorialInventoryData = json_encode($postTutorialInventoryData, JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK);
        file_put_contents('../../../static/fixed_responses/postTutorialInventory.json', $updatedPostTutorialInventoryData);
        echo ("Changes have been saved!");
    }
    if ($_POST['idFile']=="inventory.json") {
        $inventory = file_get_contents('../../../static/fixed_responses/new_inventory.json');
        $inventoryData = json_decode($inventory, true);
        foreach ($inventoryData as $key => $val) {
            if ($key=='DailyAffiliation'){
                $inventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationPvp'){
                $inventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationLibrary'){
                $inventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationCetus'){
                $inventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationQuills'){
                $inventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationSolaris'){
                $inventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationVentkids'){
                $inventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationVox'){
                $inventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationEntrati'){
                $inventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationNecraloid'){
                $inventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationZariman'){
                $inventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyAffiliationKahl'){
                $inventoryData[$key]=$_POST['reputationCaps'];
            }
            if ($key=='DailyFocus'){
                $inventoryData[$key]=$_POST['focusCaps'];
            }
            if ($key=='RegularCredits'){
                $inventoryData[$key]=$_POST['RegularCredits'];
            }
            if ($key=='FusionPoints'){
                $inventoryData[$key]=$_POST['FusionPoints'];
            }
            if ($key=='PremiumCredits'){
                $inventoryData[$key]=$_POST['PremiumCredits'];
            }
            if ($key=='SuitBin'){
                $inventoryData[$key]['Slots']=$_POST['SuitBin'];
            }
            if ($key=='WeaponBin'){
                $inventoryData[$key]['Slots']=$_POST['WeaponBin'];
            }
            if ($key=='SentinelBin'){
                $inventoryData[$key]['Slots']=$_POST['SentinelBin'];
            }
            if ($key=='MechBin'){
                $inventoryData[$key]['Slots']=$_POST['MechBin'];
            }
            if ($key=='SpaceSuitBin'){
                $inventoryData[$key]['Slots']=$_POST['SpaceSuitBin'];
            }
            if ($key=='SpaceWeaponBin'){
                $inventoryData[$key]['Slots']=$_POST['SpaceWeaponBin'];
            }
            if ($key=='OperatorAmpBin'){
                $inventoryData[$key]['Slots']=$_POST['OperatorAmpBin'];
            }
            if ($key=='RandomModBin'){
                $inventoryData[$key]['Slots']=$_POST['RandomModBin'];
            }
            if ($key=='CrewMemberBin'){
                $inventoryData[$key]['Slots']=$_POST['CrewMemberBin'];
            }
            if ($key=='CrewShipSalvageBin'){
                $inventoryData[$key]['Slots']=$_POST['CrewShipSalvageBin'];
            }
            if ($key=='PveBonusLoadoutBin'){
                $inventoryData[$key]['Slots']=$_POST['PveBonusLoadoutBin'];
            }
            if ($key=='PvpBonusLoadoutBin'){
                $inventoryData[$key]['Slots']=$_POST['PvpBonusLoadoutBin'];
            }
        }
        $updatedInventoryData = json_encode($inventoryData, JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK);
        file_put_contents('../../../static/fixed_responses/new_inventory.json', $updatedInventoryData);
        echo ("Changes have been saved!");
    }
?>