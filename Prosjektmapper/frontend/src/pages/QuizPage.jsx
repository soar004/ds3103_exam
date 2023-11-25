import {useState} from 'react';
import Question from '../components/Quiz/Question1'

const QuizPage = () => {
    const [score, setScore] = useState(0);

    const handleAnswer = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1);
        }
    };

    return(
        <section className="container mt-5">
            <h2 className="text-center text-white">QUIZ ABOUT FORMULA 1</h2>
            <Question
            question="Which driver has the most wins in Formula 1 history?"
            option={['Lewis Hamilton', 'Max Verstappen', 'Valterri Bottas']}
            correctAnswer="Lewis Hamilton"
            handleAnswer={handleAnswer}
            />
            <Question
            question="Which team won the Constructors' Championship in 2021?"
            option={['Red Bull', 'Mercedes', 'Ferrari']}
            correctAnswer="Mercedes"
            handleAnswer={handleAnswer}
            />
            <Question
            question="Which driver won the drivers' championship in 2020?"
            option={['Max Verstappen', 'Lewis Hamilton', 'Charles Leclerc']}
            correctAnswer="Lewis Hamilton"
            handleAnswer={handleAnswer}
            />
            <Question
            question="How many laps are usually run in a Formula 1 race?"
            option={['68', '45', '58']}
            correctAnswer="58"
            handleAnswer={handleAnswer}
            />
            <Question
            question="Which racetrack is known as the 'Temple of Speed'?"
            option={['Monza', 'Interlagos', 'Sochi Autodrom']}
            correctAnswer="Monza"
            handleAnswer={handleAnswer}
            />
            <div>
                <p>Your Score: {score}</p>
            </div>
        </section>
    )
}
export default QuizPage;