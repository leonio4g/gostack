import React ,{ Component }from 'react';
import FaceLogo from '../assets/facebook-logo.png';
class Header extends Component{
  render(){
    return (
      <header>
      <nav>
        <img src={FaceLogo} alt="facebook"/>
        <div>

          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
      </header>
    )
  }
}

export default Header;