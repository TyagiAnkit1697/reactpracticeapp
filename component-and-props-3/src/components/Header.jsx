import logo from '../assets/logo.png'

export const Header = () => {
    return(
    <header>
        <img className='logo' src={logo} alt=""></img>
        <a href='/'>Home</a>
    </header>
        
    );
}