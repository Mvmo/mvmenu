import * as Uebersicht from "uebersicht";

export const className = `
    background-color: black;
    width: 100vw;
    height: 35px;
    color: white;
`

export const command = "bash /Users/mvmo/.dotfiles/.config.d/uebersicht/widgets/mvmenu/libs/scripts/init.sh"

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

    console.log(data);

    return (
        <div>
            { data.displays.map((display, idx) => (
                <div>
                    <span>[{idx}]</span>
                </div>
            )) }
        </div>
    )
}

