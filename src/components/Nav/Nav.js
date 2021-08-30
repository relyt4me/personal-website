import './Nav.css';

const Nav = () => {
  const printNavButtons = () => {
    let navSections = ['Home', 'About', 'Projects', 'Experience', 'Contact']
    return navSections.map(section => {
      return <button tabIndex='0' aria-label={`${section} section`} key={section} onClick={() => {console.log(`${section} clicked`)}} >{section}</button>
    })
  }

  return (
    <nav>
      <h1 className='site-title'>My Website</h1>
      <div className='navigation-buttons'>
        {printNavButtons()}
      </div>
    </nav>
   );
}
 
export default Nav;