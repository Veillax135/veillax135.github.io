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
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
}
