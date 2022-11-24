import * as Uebersicht from "uebersicht";

// TODO: Better variant of styling
export const className = `
    background-color: black;
    width: 100vw;
    color: white;
    font-family: Monaco;
`

// TODO: signals?
export const refreshFrequency = 6000;

// TODO: relative path
export const command = "bash /Users/mvmo/.dotfiles/.config.d/uebersicht/widgets/mvmenu/libs/scripts/init.sh"

const SpaceCard = ({ space }) => {
    return (
        <div style={{
            backgroundColor: space["has-focus"] ? "red" :"gray",
            display: "inline-block",
            padding: 7,
            marginRight: 10,
        }}>
            <span>{space.label || space.index}</span>
        </div>
    )
}

// TODO: Better error handling
export const render = ({ output, error }) => {
    if (!output)
        return (
            <span>Error no output</span>
        )

    const data = JSON.parse(output);
    if (!data)
        return (
            <span>Error</span>
        )


    return (
        <div>
            { data.spaces.map(space => (
                <SpaceCard space={space} />
            )) }
        </div>
    )
}

