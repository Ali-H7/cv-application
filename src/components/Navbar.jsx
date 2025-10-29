import '../styles/Navbar.css'

function Navbar({ handleEdit }) {

    return (
        <nav className='nav-bar'>
            <h1 className='logo'>CV Creator</h1>
            <ul className='nav-bar-items'>
                <li className='edit-btn' onClick={handleEdit}><a>Edit CV</a></li>
                <li><a>View CV</a></li>
            </ul>
        </nav>
    )
}

export default Navbar