import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.scss';
import Logo from '../assets/img/logo/logo1.png'; // Adaptation du chemin d’import

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            {/* Partie supérieure : Logo & sections */}
            <div className="footer-top">
                <div className="footer-logo">
                    <Link to="/">
                        <img src={Logo} alt="MonSite Logo" />
                    </Link>
                </div>

                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Gagnez de l'argent</h4>
                        <ul>
                            <li><Link to="/service1">Vendez sur Velocia</Link></li>
                            <li><Link to="/service2">Devenez Partenaire</Link></li>
                            <li><Link to="/service3">Protégez et développez votre marque</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Moyen de paiement</h4>
                        <ul>
                            <li><Link to="/service1">Carte de paiement</Link></li>
                            <li><Link to="/service2">Cartes cadeaux</Link></li>
                            <li><Link to="/service3">Recharge en point de vente</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Besoin d'aide ?</h4>
                        <ul>
                            <li><Link to="/service1">Voir ou suivre votre commande</Link></li>
                            <li><Link to="/service2">Garantie légale</Link></li>
                            <li><Link to="/service3">Accessibilité</Link></li>
                            <li><Link to="/service3">Application Velocia Mobile</Link></li>
                            <li><Link to="/service3">Service Client</Link></li>
                            <li><Link to="/service3">Conditions générale</Link></li>
                            <li><Link to="/service3">Signalez un contenu illégal</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bas de page : droits d’auteur */}
            <div className="footer-bottom">
                <p>&copy; 2025 Velocia. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
