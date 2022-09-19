import Choice from '../Choice/Choice'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import styles from './Question.module.css'

function Question({choices, endGame, handleClick, id, question, questionObj, setPoints}){

    const [c, setC] = useState([])

    function getChoiceElements() {
        setC(choices.map(choice => ({questionID:id, choice: choice, choiceId: nanoid(), isSelected: false })))
    }
            
    function toggleSelected(id, qId){

        setC( prevC => prevC.map(c => c.choiceId === id 
            ? 
                {...c, isSelected: !c.isSelected}
            :
                {...c, isSelected: false}
        ))
    }

    useEffect(()=>{
        getChoiceElements()
    },[])

    const choiceElements = c.map(choice =>
            <Choice
                key={choice.choiceId}
                choice={choice.choice}
                endGame={endGame}
                questionId={id}
                questionAnswer={questionObj.correct}
                choiceId={choice.choiceId}
                handleClick={handleClick}
                isSelected={choice.isSelected}
                setPoints={setPoints}
                toggleSelected={toggleSelected}
            />
        )
    

    return(
        <div className={styles.question_container}>
            <p className={styles.question}>{question}</p>
            <div className={styles.answers}>
                {choiceElements}
            </div>
        </div>
    )
}

export default Question