import React from 'react';
import { FaSpinner } from 'react-icons/fa'; // Importando um ícone de spinner da biblioteca react-icons

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <FaSpinner size={50} className="animate-spin text-primary" />
    </div>
  );
};

export default Loading;