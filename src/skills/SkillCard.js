import React from 'react';

const SkillCard = ({ title, children }) => {
    return (
      <div className="bg-gray-800 rounded-3xl shadow-lg p-6 flex flex-col items-center h-60">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <div className="grid grid-cols-3 gap-5 w-full h-full">
          {children}
        </div>
      </div>
    );
  };

export default SkillCard;
