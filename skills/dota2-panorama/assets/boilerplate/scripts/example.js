(function () {
    $.Msg("Example UI Loaded");

    // Initial data setup
    $("#Title").text = "My Custom Panel";

    // Listening for server events
    GameEvents.Subscribe("toggle_example_ui", function (data) {
        $.GetContextPanel().ToggleClass("Show");
    });
})();

function OnClose() {
    $.GetContextPanel().AddClass("Hidden");
    // Or just Hide
    $.GetContextPanel().RemoveClass("Show");

    // Notify server if needed
    GameEvents.SendCustomGameEventToServer("example_ui_closed", {
        player_id: Players.GetLocalPlayer()
    });
}
