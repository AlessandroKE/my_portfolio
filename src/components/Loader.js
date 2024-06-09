// src/components/Loader.js
import React from 'react';
import '../styles/Loader.css'; // Ensure this path is correct

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
