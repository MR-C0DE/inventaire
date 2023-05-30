import './../style/Header.css';
import france from './../images/icon/france.png';
import horloge from './../images/icon/horloge.png';
import parametre from './../images/icon/parametre.png';
import utilisateur from './../images/icon/utilisateur.png';

const Header = () => {

    return (
        <div className='Header'>
            <div className='content wrapper'>
                <h1> <span className='span01'>Inventaire</span><span className='span02'>stock</span></h1>
                <ul className="liste">
                    <li><img src={france} alt='f' className='lmj-logo'/></li>
                    <li><img src={horloge}  alt='h' className='lmj-logo' /></li>
                    <li><img src={parametre}  alt='p' className='lmj-logo' /></li>
                    <li><img src={utilisateur}  alt='u' className='lmj-logo' /></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;