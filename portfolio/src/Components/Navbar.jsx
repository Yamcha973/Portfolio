import React from 'react';
import { elastic as Menu } from 'react-burger-menu'

class Navbar extends React.Component {
    render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Accueil</a>
        <a id="about" className="menu-item" href="/about">A propos de moi</a>
        <a id="works" className="menu-item" href="/contact">Projets</a>
        <a id="contact" className="menu-item" href="/contact">Me contacter</a>
      </Menu>
    );
  }
}




export default Navbar;