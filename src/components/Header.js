import SelectTest from "../test"
const Header = () => {
    return (
        <>
            <h1>React Header</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Profile</li>
            </ul>
            <SelectTest num={20}></SelectTest>
        </>
    )
}

export default Header
