import '../styles/Navbar.css'

function Navbar({ status, handleEdit }) {

    return (
        <nav className='nav-bar'>
            <h1 className='logo'>CV Creator</h1>
            <ul className='nav-bar-items'>
                <li className='edit-btn' onClick={handleEdit}><a>{status ? "View CV" : "Edit CV"}</a></li>
            </ul>
        </nav>
    )
}

export default Navbar