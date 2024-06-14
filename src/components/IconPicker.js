import React, { useState } from 'react';
import './IconPicker.css';
import * as FeatherIcons from 'react-icons/fi';

const IconPicker = ({ rowsInOnePage = 5, columnsInOnePage = 9, iconHeight = 50, iconWidth = 50, pickerHeight = '500px', pickerWidth = '500px' }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = Object.keys(FeatherIcons);
  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const totalPages = Math.ceil(icons.length / iconsPerPage);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderIcons = () => {
    const startIndex = currentPage * iconsPerPage;
    const endIndex = Math.min(startIndex + iconsPerPage, icons.length);
    return icons.slice(startIndex, endIndex).map((iconName, index) => {
      const IconComponent = FeatherIcons[iconName];
      return (
        <div
          key={index}
          className="icon-wrapper"
          style={{ width: iconWidth, height: iconHeight }}
          onClick={() => handleIconClick(iconName)}
        >
          <IconComponent size={Math.min(iconHeight, iconWidth)} />
        </div>
      );
    });
  };

  return (
    <div className="picker-container" style={{ width: pickerWidth, height: pickerHeight }}>
      <div className="icons-container">
        {renderIcons()}
      </div>
      <div className="pagination-buttons">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>Previous</button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>Next</button>
      </div>
      {selectedIcon && (
        <div className="selected-icon-container">
          {React.createElement(FeatherIcons[selectedIcon], { size: '80%' })}
        </div>
      )}
    </div>
  );
};

export default IconPicker;
