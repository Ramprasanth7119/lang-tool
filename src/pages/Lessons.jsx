import React from 'react';
import Lesson from '../components/Lesson';

const lessonsData = [
    { id: 1, word: "cat", translation: "chat" },
    { id: 2, word: "dog", translation: "chien" },
    { id: 3, word: "apple", translation: "pomme" },
];

function Lessons() {
    return (
        <div className="lessons">
            <h2>Lessons</h2>
            {lessonsData.map((lesson) => (
                <Lesson key={lesson.id} lesson={lesson} />
            ))}
        </div>
    );
}

export default Lessons;

