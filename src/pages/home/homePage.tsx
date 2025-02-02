import React from "react";
import Navbar from "../../components/navbar.tsx";
import Footer from "../../components/footer.tsx";
import './css/home.scss';
import Categories from "../../components/categorie.tsx";
import Products from "../../components/products.tsx";

const HomePage: React.FC = () => {
    return (
        <>
            <div className="home-page">
                {/* 1. Navbar */}
                <Navbar />
                {/* 2. Conteneur principal */}
                <div className="home-content">
                    <div className={"container-new"}>
                        <Categories />
                    </div>
                    <div className={"container-new"}>
                        <Products />
                    </div>
                </div>

                {/* 3. Footer */}
                <Footer />
            </div>
        </>
    );
};

export default HomePage;
