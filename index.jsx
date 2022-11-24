import * as Uebersicht from "uebersicht";

import { Clock } from "./lib/components/clock.jsx";
import { SpaceCard } from "./lib/components/space.jsx";

// TODO: Better variant of styling
export const className = `
    background-color: black;
    width: 100vw;
    color: white;
    font-family: Monaco;
    user-select: none;
`

// TODO: signals?
export const refreshFrequency = 1000 * 60;

export const command = "bash ./mvmenu/lib/scripts/init.sh"

const parseOutput = (output)  => {
    if (!output)
        return [undefined, "no output given"];
    
    try {
        const obj = JSON.parse(output);
        return [obj, undefined];
    } catch (err) {
        return [undefined, "couldn't parse json"];
    }
}

export const render = ({ output, error }) => {
    const [data, parseError] = parseOutput(output);

    if (parseError || error)
        return <span>{parseError || error}</span>

    return (
        <div>
            { data.spaces.map(space => (
                <SpaceCard space={space} />
            )) }
            <Clock />
        </div>
    )
}

