import React, { useState } from 'react';

function Lesson({ lesson }) {
    const [showTranslation, setShowTranslation] = useState(false);

    const toggleTranslation = () => setShowTranslation(!showTranslation);

    return (
        <div>
            <h2>{lesson.word}</h2>
            {showTranslation && <p>{lesson.translation}</p>}
            <button onClick={toggleTranslation}>
                {showTranslation ? 'Hide Translation' : 'Show Translation'}
            </button>
        </div>
    );
}

export default Lesson;
