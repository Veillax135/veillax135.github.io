function convert(realm, x, z, y = null) {
    if (realm === 0 || realm === 1) {
        if (x !== undefined && z !== undefined) {
            if (realm === 0) {  // Overworld -> Nether
                const nether_x = (x / 8) || 0;
                const nether_z = (z / 8) || 0;
                return ["1", nether_x, y !== null ? y : null, nether_z];
            }
            if (realm === 1) {  // Nether -> Overworld
                const overworld_x = x * 8 || 0;
                const overworld_z = z * 8 || 0;
                return ["0", overworld_x, y !== null ? y : null, overworld_z];
            }
        } else {
            if (!x) {
                throw new Error("Missing `x` coordinate value");
            } else if (!z) {
                throw new Error("Missing `z` coordinate value");
            } else if (!x && !y) {
                throw new Error("Missing `x` and `z` coordinate values");
            }
        }
    } else {
        throw new Error("Missing `realm` value");
    }
}

function distance(point1, point2) {
    const [x1, y1, z1] = point1;
    const [x2, y2, z2] = point2;

    const walking_speed = 4.3;
    const running_speed = 5.6;
    const flying_speed = 7.2;

    const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);

    const walking_time = dist/walking_speed/60
    const running_time = dist/running_speed/60
    const flying_time = dist/flying_speed/60

    output = [dist, walking_time, running_time, flying_time]
    console.log(output)

    return output;
}

// Attach event listeners to the distance calculation inputs
const inputs_calcDistance = document.querySelectorAll('.calculateDistance');
inputs_calcDistance.forEach(input => {
    input.addEventListener('input', handleDistChange);
});

// Attach event listeners to the Overworld to Nether conversion inputs
const inputs_convertOvtoNe = document.querySelectorAll('.convertOvtoNe');
inputs_convertOvtoNe.forEach(input => {
    input.addEventListener('input', handleOvNeChange);
});

// Attach event listeners to the Nether to Overworld conversion inputs
const inputs_convertNetoOv = document.querySelectorAll('.convertNetoOv');
inputs_convertNetoOv.forEach(input => {
    input.addEventListener('input', handleNeOvChange);
});

// Event handler for distance calculation
function handleDistChange() {
    const X1 = parseInt(document.getElementById('X1').value);
    const Y1 = parseInt(document.getElementById('Y1').value);
    const Z1 = parseInt(document.getElementById('Z1').value);
    const X2 = parseInt(document.getElementById('X2').value);
    const Y2 = parseInt(document.getElementById('Y2').value);
    const Z2 = parseInt(document.getElementById('Z2').value);
    const point1 = [X1, Y1, Z1];
    const point2 = [X2, Y2, Z2];
    const dist = distance(point1, point2);
    document.getElementById('D').value = dist[0].toFixed(2);
    document.getElementById('dist_speed').value = `It will take ${dist[1]} minutes while walking, ${dist[2]} minutes while running, and ${dist[3]} minutes while flying to reach your destination`;
}

// Event handler for Overworld to Nether conversion
function handleOvNeChange() {
    const oX = parseInt(document.getElementById('oX').value);
    const oY = parseInt(document.getElementById('oY').value);
    const oZ = parseInt(document.getElementById('oZ').value);
    const result = convert(0, oX, oZ, oY);
    document.getElementById('nX').value = result[1];
    document.getElementById('nY').value = result[2];
    document.getElementById('nZ').value = result[3];
}

// Event handler for Nether to Overworld conversion
function handleNeOvChange() {
    const nX = parseInt(document.getElementById('nX').value);
    const nY = parseInt(document.getElementById('nY').value);
    const nZ = parseInt(document.getElementById('nZ').value);
    const result = convert(1, nX, nZ, nY);
    document.getElementById('oX').value = result[1];
    document.getElementById('oY').value = result[2];
    document.getElementById('oZ').value = result[3];
}

// Reset handler for Coordinates
function resetCoords() {
    document.getElementById('oX').value = "0";
    document.getElementById('oY').value = "64";
    document.getElementById('oZ').value = "0";
    document.getElementById('nX').value = "0";
    document.getElementById('nY').value = "64";
    document.getElementById('nZ').value = "0";
}

// Reset handler for Distance
function resetDist() {
    document.getElementById('X1').value = "0";
    document.getElementById('Y1').value = "0";
    document.getElementById('Z1').value = "0";
    document.getElementById('X2').value = "0";
    document.getElementById('Y2').value = "0";
    document.getElementById('Z2').value = "0";
    document.getElementById('speed').value = "It will take 0 minutes while walking, 0 minutes while running, and 0 minutes while flying to reach your destination";
}