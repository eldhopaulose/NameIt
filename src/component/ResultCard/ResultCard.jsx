import React from 'react';
import './ResultCard.scss';

const ResultCard = ({ SuggestName }) => {
    return (
        <div className="result-name-card">
            <p className="result-card">{SuggestName}</p>
        </div>
    );
};

export default ResultCard;
