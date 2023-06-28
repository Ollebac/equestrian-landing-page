import '../scss/Nav/nav.scss';

const openNav = () => {
  var menu = document.getElementById('popup_nav');
  var bubble = document.getElementById('nav_bubble');

  if (menu?.style.display === 'flex') {
    menu!.style.display = 'none';
    bubble!.style.opacity = '1';
  } else {
    menu!.style.display = 'flex';
    bubble!.style.opacity = '.5';
  }
};

const Nav = () => {
  return (
    <>
      <a className='nav_bubble' id='nav_bubble' onClick={openNav}>
        <img src='./icons/icon-hamburger.svg' width={30} height={20} />
      </a>
      <nav className='outer_nav_container'>
        <a className='site_logo_container' href='#home'>
          <img src='./site-logo/site-logo.svg' className='site_logo' alt='Site Logo' />
        </a>
        <ul className='inner_nav_container'>
          <li className='nav_item'>
            <a href='#programs'>Programs</a>
          </li>
          <li className='nav_item'>
            <a href='#about'>About Us</a>
          </li>
          <li className='nav_item'>
            <a href='#coaches'>Coaches</a>
          </li>
        </ul>
      </nav>
      <div className='popup_nav_container'>
        <ul className='popup_nav' id='popup_nav'>
          <li className='popup_nav_item'>
            <a href='#programs'>Programs</a>
          </li>
          <li className='popup_nav_item'>
            <a href='#about'>About Us</a>
          </li>
          <li className='popup_nav_item'>
            <a href='#coaches'>Coaches</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
