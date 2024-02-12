function condense(commands) {
    /**
     * Generates a command sequence using falling sand entities to execute a list of commands.
     *
     * @param {Array} commands - List of commands to be executed sequentially.
     * @returns {string} A formatted string representing the command sequence.
     */
    let base = '/summon falling_block ~1 ~5 ~1 {BlockState:{Name:"minecraft:command_block"},TileEntityData:{Command:"%%%%"},Time:1';
    let passenger = ',Passengers:[{id:"minecraft:falling_block",BlockState:{Name:"minecraft:command_block"},TileEntityData:{Command:"&&&&"},Time:1';
    let end_command = ',Passengers:[{id:"minecraft:falling_block",BlockState:{Name:"minecraft:command_block"},TileEntityData:{Command:"fill ~1 ~-^ ~ ~1 ~-1 ~ redstone_block"},Time:1,Passengers:[{id:"minecraft:falling_block",BlockState:{Name:"minecraft:redstone_block"},Time:1}]';
    let end = '}';

    for (let i = commands.length - 1; i >= 0; i--) {
        end = "}]" + end;
        if (i === commands.length - 1) {
            base = base.replace("%%%%", commands[i]);
        } else {
            base += passenger.replace("&&&&", commands[i]);
        }
    }

    base = base + end_command.replace("^", commands.length + 1) + end;

    return base;
}

function processCommands() {
    const textarea = document.getElementById('input-commands');
    const text = textarea.value.trim(); // Trim whitespace from both ends
    const commandsArray = text.split('\n');
    const filteredCommandsArray = commandsArray.filter(command => command.trim().length >  0);

    // Check if the trimmed text is empty after splitting
    if (text === '') {
        alert('Warning: The input field is empty. Please enter some commands.');
        return; // Exit the function early if there's no input
    } else {
        document.getElementById("output-command").value = condense(filteredCommandsArray);
    }
}
