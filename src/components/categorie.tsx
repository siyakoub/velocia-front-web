import React from "react";
import "./css/categories.scss";

const categories = [
    "Recommandé",
    "Jardin",
    "Entretien",
    "Hi-Tech",
    "Textile",
    "Divers",
    "Soin & Beauté",
    "Outils",
    "Etc...",
    "Etc...",
    "Etc...",
    "Etc...",
    "Etc...",
    "Etc...",
    "Etc...",
    "Etc..."
];

const Categories: React.FC = () => {
    return (
        <div className="categories-container">
            {categories.map((cat) => (
                <div className="category-pill" key={cat}>
                    {cat}
                </div>
            ))}
        </div>
    );
};

export default Categories;
