export const Clock = () => {
    return (
        <div style={{ display: "inline-block" }}>
            <h1>{ new Date().toLocaleTimeString() }</h1>
        </div>
    )
}
