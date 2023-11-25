import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Question = ({ question, option, correctAnswer, handleAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [answered, setAnswered] = useState(false);

    const handleOptionClick = (clickedOption) => {
        if(!answered){
            const isCorrect = clickedOption.trim() === correctAnswer.trim();
            setSelectedOption(clickedOption);
            setIsAnswerCorrect(isCorrect);
            handleAnswer(isCorrect);
            setAnswered(true)
        }
    };

    return(
        <div className={`card mt-4 ${selectedOption === null ? 'text-black' : isAnswerCorrect ? 'bg-success' : 'bg-danger'}`}>
            <div className="card-body">
                <h3>{question}</h3>
                <div className="card-title">
                    {option.map((option, index) => (
                        <button
                            key = {index}
                            onClick = {() => handleOptionClick(option)}
                            className={`btn btn-light m-1 ${selectedOption === option ? 'btn-secondary': ''}`}
                            disabled={answered}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Question;