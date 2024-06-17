import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="bg-slate-900">
            <Navbar />
            <section id="home">
                <Header />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="about">
                <About />
            </section>
            <Footer />

        </div>
    );
};

export default App;
