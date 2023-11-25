import {useState} from 'react';

const Question = ({ question, options, correctAnswer, handleAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        handleAnswer(option === correctAnswer);
    };

    return(
        <div>
            <h3>{question}</h3>
            <ul>
                {options.map((option, index => (
                    <li
                    key = {index}
                    onClick = {() => handleOptionsClick(options)}
                    style ={{
                        backgroundColor:
                            selectedOption === options ? options === correctAnswer ? 'green' : 'red' : '',
                    }}
                    >
                        {option}
                    </li>
                )))}
            </ul>
        </div>
    );
};

export default Question;