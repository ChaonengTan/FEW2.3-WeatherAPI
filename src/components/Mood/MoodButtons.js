function Moodbutton(props) {
    const {name, onclick} = props
    return (
        <button onClick={() => onclick(name)}>{name}</button>
    )
}
export default Moodbutton