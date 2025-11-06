import '../styles/Navbar.css';

function Navbar({ status, handleEdit, handleDataClear }) {
  return (
    <div className='nav-bar-container'>
      <nav className='nav-bar-content'>
        <h1 className='logo'>CV Creator</h1>
        <ul className='nav-bar-items'>
          <li className='nav-bar-btn' onClick={handleDataClear}>
            <a>Clear CV</a>
          </li>
          <li className='nav-bar-btn' onClick={handleEdit}>
            <a>{status ? 'View CV' : 'Edit CV'}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
