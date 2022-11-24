// TODO: add functionality to switch spaces by clicking
export const SpaceCard = ({ space }) => {
    return (
        <div style={{
            backgroundColor: space["has-focus"] ? "red" :"gray",
            display: "inline-block",
            padding: 7,
            marginRight: 10,
            cursor: "pointer"
        }}>
            <span>{space.label || space.index}</span>
        </div>
    )
}

