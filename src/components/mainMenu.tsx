import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/mainMenu.scss';
import { FaGlobeEurope, FaStar, FaHandSparkles, FaUser, FaUserPlus } from 'react-icons/fa';
import { FaRightToBracket } from "react-icons/fa6";
import { FaCircleInfo } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa'; // Import de la flèche

interface MainMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ isOpen, onClose }) => {
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [showMoreCategories, setShowMoreCategories] = useState(false);

    // Définition des sous-catégories de la section "Catégorie"
    const categoryItems = [
        { label: "Maison", link: "/accueil/general" },
        { label: "Jardin", link: "/accueil/actualites" },
        { label: "Hi-Tech", link: "/accueil/actualites" },
        { label: "Entretien", link: "/accueil/actualites" },
        { label: "Divers", link: "/accueil/actualites" },
        { label: "Soin & Beauté", link: "/accueil/actualites" },
        { label: "Outils", link: "/accueil/actualites" },
    ];

    // Selon l'état showMoreCategories, on affiche soit les 3 premiers, soit tous les éléments.
    const displayedCategories = showMoreCategories
        ? categoryItems
        : categoryItems.slice(0, 3);

    return (
        <div className={`sliding-menu ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose}>×</button>
            <ul>
                <li className="category">Tendances</li>
                <li className="sub-category">
                    <Link to="/a-propos/histoire" onClick={onClose}>
                        <FaStar /> Meilleures vente
                    </Link>
                </li>
                <li className="sub-category">
                    <Link to="/a-propos/equipe" onClick={onClose}>
                        <FaHandSparkles /> Dernières Nouveautés
                    </Link>
                </li>
                {/* Section Catégorie */}
                <li className="category">Catégorie</li>
                {displayedCategories.map((item, index) => (
                    <li key={index} className="sub-category">
                        <Link to={item.link} onClick={onClose}>{item.label}</Link>
                    </li>
                ))}
                {categoryItems.length > 3 && (
                    <li
                        className="sub-category more-categories"
                        onClick={() => setShowMoreCategories(!showMoreCategories)}
                    >
            <span className="more-categories-text">
              {showMoreCategories ? "Afficher moins" : "Afficher plus"}
                <FaChevronDown className={`chevron ${showMoreCategories ? "rotated" : ""}`} />
            </span>
                    </li>
                )}

                <li className="category">Services</li>
                <li className="sub-category">
                    <Link to="/services/consulting" onClick={onClose}>Fabriqué en Algérie 🇩🇿</Link>
                </li>
                <li className="sub-category">
                    <Link to="/services/developpement" onClick={onClose}>Vendre sur Velocia</Link>
                </li>

                <li className="category">Aide et paramètres</li>
                <li className="sub-category">
                    <Link to="/contact/support" onClick={onClose}><FaUser /> Votre compte</Link>
                </li>
                <li className="sub-category">
                    <Link to="/contact/support" onClick={onClose}>
                        <FaCircleInfo /> Service Client
                    </Link>
                </li>
                {/* Sous-menu langue */}
                <li
                    className="sub-category language-menu"
                    onMouseEnter={() => setIsLanguageMenuOpen(true)}
                    onMouseLeave={() => setIsLanguageMenuOpen(false)}
                >
                    <div className="language-toggle">
                        <FaGlobeEurope /> Langue
                    </div>
                    <ul className={`language-submenu ${isLanguageMenuOpen ? 'open' : ''}`}>
                        <li className="language-item">
                            <Link to="/lang/fr" onClick={onClose}>🇫🇷 Français</Link>
                        </li>
                        <li className="language-item">
                            <Link to="/lang/ar" onClick={onClose}>🇸🇦 Arabe</Link>
                        </li>
                        <li className="language-item">
                            <Link to="/lang/en" onClick={onClose}>🇬🇧 Anglais</Link>
                        </li>
                    </ul>
                </li>
                <li className="sub-category">
                    <Link to="/login" onClick={onClose}>
                        <FaRightToBracket /> Se connecter
                    </Link>
                </li>
                <li className="sub-category">
                    <Link to="/register" onClick={onClose}>
                        <FaUserPlus /> S'inscrire
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default MainMenu;
