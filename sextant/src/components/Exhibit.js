import React from 'react'
import '../componentStyling/Exhibit.css';
export default function Exhibit({  children }) {
    return (
        <div className="exhibit">
          
          <div className="exhibit-content">
            {children}
          </div>
        </div>
      );
};
