import logo from '../assets/logo.jpeg'
import './header.css';

export const Header = () => {
    return(
    <div>
        <img className='logo' src={logo} alt="" />
    </div>
        
    );
}