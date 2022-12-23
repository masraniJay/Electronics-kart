import './invalidpage.css';
import invalidPage from '../../Assets/404-error-error-404-transparent-11563210406bsmsusbbzi.png';

export default function InvalidPage() {
    
    return(
        <div className="invalid-page">
            <img src={invalidPage} className="invalid-page-img" alt="page not found"/>
        </div>
    );
}