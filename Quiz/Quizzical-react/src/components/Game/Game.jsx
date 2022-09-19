import { useState, useEffect } from 'react'
import Question from '../Question/Question'
import { nanoid } from "nanoid"
import styles from './Game.module.css'


function Game({ setStartGame}) {

    const [questions, setQuestions] = useState([])
    const [points, setPoints] = useState(0)
    const [endGame, setEndGame] =  useState(false)
    
    
    
    
    useEffect(()=>{
        const url = "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"

        async function getQuestions(){
            const res = await fetch(url)
            const data = await res.json()
            setQuestions(data.results.map(q => {
                return {
                    question: q.question,
                    correct: q.correct_answer,
                    choices: [...q.incorrect_answers, q.correct_answer].sort(function (a, b) {
                        return a.toLowerCase().localeCompare(b.toLowerCase())}),
                    id: nanoid(),
                    answer:""
                }
            }))
        }
        
        getQuestions()
    },[])

    function handleClick(choiceid, questionid, choice) {
        setQuestions(prevQuestions => {
            return prevQuestions.map(prevQuestion =>{
                    return prevQuestion.id === questionid ? 
                        {...prevQuestion, answer:choice} :
                        prevQuestion
            })})
    }

    function handleAnswers(){
        setEndGame(true)
        questions.forEach((obj)=>{
            if (obj.answer == obj.correct){
                setPoints(prev => prev + 1)
            }
        })
    
    }


    const QuestionElements = questions.map(question => {
        return (
            <Question 
                key={question.id} 
                id={question.id} 
                setPoints={setPoints}
                question={question.question} 
                questionObj={question}
                choices={question.choices} 
                handleClick={handleClick}
                endGame={endGame}
            />
        )
    })

    return (
        <div className={styles.game}>
            {QuestionElements}
            <div className={styles.bottom}>
                {endGame ? 
                    <div className={styles.bottomBox}>
                        <p>You scored {points}/{questions.length} correct answers </p>
                        <button
                            onClick={()=>setStartGame(true)}
                            className={styles.button}
                        >
                            Play Again
                        </button>
                    </div>
                        :
                    <button 
                        className={styles.button}
                        onClick={handleAnswers}
                    >
                        Check Answers
                    </button>
                    }       
            </div>
        </div>
    )
}

export default Game
