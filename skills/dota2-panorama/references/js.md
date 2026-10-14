# Dota 2 Panorama Javascript API Reference

Panorama JS uses standard ES5/ES6 but provides a set of global objects to interact with the game engine and UI tree.

## Global Objects

- `$`: The primary interface.
  - `$.GetContextPanel()`: Returns the root panel of the current XML.
  - `$.CreatePanel(type, parent, id)`: Spawns a new panel.
  - `$.Msg(arg1, arg2, ...)`: Prints to the console (developer tool).
  - `$.Localize("#key")`: Returns the translated string.
  - `$.Schedule(seconds, callback)`: Delays execution.
  - `$.DispatchEvent(event_name, ...)`: Fires a Panorama event.
- `GameEvents`: Communication with Lua.
  - `Subscribe(event_name, callback)`: Listen for server events.
  - `SendCustomGameEventToServer(event_name, data)`: Send data to server.
- `CustomNetTables`: Data synchronization.
  - `GetTableValue(table, key)`: Read data from NetTable.
  - `SubscribeNetTableListener(table, callback)`: Listen for changes.
- `Players`: Player info.
  - `GetLocalPlayer()`: Returns the local user's player ID.
- `Game`: Game state info.
- `Entities`: Entity info (units, heroes).

## Panel API

Each panel object (returned by `$` or `FindChildTraverse`) has these common methods:

- `AddClass(className)` / `RemoveClass(className)` / `ToggleClass(className)`.
- `SetHasClass(className, condition)`: Convenient way to conditional style.
- `FindChildTraverse(id)`: Recursive search for a child by ID.
- `FindChildrenWithClassTraverse(className)`: Returns an array of children.
- `SetDialogVariable(varName, value)`: Inject data into XML labels (e.g., `{s:varName}`).
- `SetDialogVariableInt(varName, value)`.
- `SetPanelEvent(eventName, callback)`: Register event handlers in code.
- `DeleteAsync(seconds)`: Safely delete a panel.
- `RemoveAndDeleteChildren()`: Clear a container.

## Communication with Server (Lua)

### JS to Lua
```javascript
GameEvents.SendCustomGameEventToServer("my_ui_event", { 
    player_id: Players.GetLocalPlayer(), 
    action: "buy_item" 
});
```

### Lua to JS
```lua
-- In Lua
CustomGameEventManager:Send_ServerToAllClients("my_server_event", { message = "Hello" })

-- In JS
GameEvents.Subscribe("my_server_event", function(data) {
    $.Msg(data.message);
});
```

## Data Binding

Use dialog variables for efficient text updates:

**XML**: `<Label text="Player Name: {s:p_name}" />`
**JS**: `panel.SetDialogVariable("p_name", "Antigravity");`
