<?php
    header('Access-Control-Allow-Origin: http://localhost:5173');
    $settings = file_get_contents("../../../config.json");
    $settingsData = json_decode($settings, true);
    foreach ($settingsData as $key => $val) {
        if ($key=='skipStoryModeChoice'){
            if (isset($_POST['skipStoryModeChoice'])){
                $settingsData[$key]=$_POST['skipStoryModeChoice']=="true" ? true : false;
                $val=$_POST['skipStoryModeChoice']=="true" ? 'true' : 'false';
            }
        }
        if ($key=='skipTutorial'){
            if (isset($_POST['skipTutorial'])){
                $settingsData[$key]=$_POST['skipTutorial']=="true" ? true : false;
                $val=$_POST['skipTutorial']=="true" ? 'true' : 'false';
            }
        }
        if ($key=='unlockAllMissions'){
            if (isset($_POST['unlockAllMissions'])){
                $settingsData[$key]=$_POST['unlockAllMissions']=="true" ? true : false;
                $val=$_POST['unlockAllMissions']=="true" ? 'true' : 'false';
            }
        }
        if ($key=='unlockAllQuests'){
            if (isset($_POST['unlockAllQuests'])){
                $settingsData[$key]=$_POST['unlockAllQuests']=="true" ? true : false;
                $val=$_POST['unlockAllQuests']=="true" ? 'true' : 'false';
            }
        }
        if ($key=='infiniteResources'){
            if (isset($_POST['infiniteResources'])){
                $settingsData[$key]=$_POST['infiniteResources']=="true" ? true : false;
                $val=$_POST['infiniteResources']=="true" ? 'true' : 'false';
            }
        }
        if ($key=='unlockallShipFeatures'){
            if (isset($_POST['unlockallShipFeatures'])){
                $settingsData[$key]=$_POST['unlockallShipFeatures']=="true" ? true : false;
                $val=$_POST['unlockallShipFeatures']=="true" ? 'true' : 'false';
            }
        }
        if ($key=='unlockAllShipDecorations'){
            if (isset($_POST['unlockAllShipDecorations'])){
                $settingsData[$key]=$_POST['unlockAllShipDecorations']=="true" ? true : false;
                $val=$_POST['unlockAllShipDecorations']=="true" ? 'true' : 'false';
            }
        }
    }
    $updatedSettingsData = json_encode($settingsData, JSON_PRETTY_PRINT);
    file_put_contents('../../../config.json', $updatedSettingsData);
    echo ("Changes have been saved!");
?>