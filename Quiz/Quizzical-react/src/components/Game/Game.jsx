import { useState, useEffect } from 'react'
import Question from '../Question/Question'
import { nanoid } from "nanoid"
import styles from './Game.module.css'

let QuestionElements = []


function Game({gameOver, setGameOver}) {

    // const [questionsArray, setQuestionsArray] = useState([])
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    
    

    
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
                    id: nanoid()
                }
            }))
        }
        
        getQuestions()
    },[])

    function handleClick(choiceid, questionid, choice) {

    }



    function getQuestionsElements(){
        QuestionElements = questions.map(question => {
        return (
            <Question 
                key={question.id} 
                id={question.id} 
                question={question.question} 
                choices={question.choices} 
                handleClick={handleClick}
                setAnswers={setAnswers}
            />
        )
        })
        return QuestionElements
    }

    return (
        <div>
            {getQuestionsElements()}
            <button 
            className={styles.button}
            >
            Check Answers
            </button>
        </div>
    )
}

export default Game
