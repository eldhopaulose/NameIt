import React from 'react';
import './ResulContainer.scss';
import ResultCard from '../ResultCard/ResultCard';

const ResulContainer = ({ SuggestNames }) => {
    const SuggestNamesjsx = SuggestNames.map((SuggestName) => {
        return <ResultCard key={SuggestName} SuggestName={SuggestName} />;
    });
    return <div className="result-container">{SuggestNamesjsx}</div>;
};

export default ResulContainer;
