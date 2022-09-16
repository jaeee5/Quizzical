import Choice from '../Choice/Choice'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import styles from './Question.module.css'

function Question({choices, handleClick, id, question, setAnswers}){

    const [c, setC] = useState([])
    // const [isAllowed, setIsAllowed] = useState(true)

    function getChoiceElements() {
        setC(choices.map(choice => ({questionID:id, choice: choice, choiceId: nanoid(), isSelected: false })))
    }
            
    function toggleSelected(id, qId){

        
        
        setC( prevC => prevC.map(c => c.choiceId === id 
            ? 
                {...c, isSelected: !c.isSelected}
            :
                c
        ))
    }

    useEffect(()=>{
        getChoiceElements()
    },[])

    useEffect(()=>{
        setAnswers(prevA => {
            let a = [...prevA]
            let b = c.filter(value => value.isSelected)
            return [...a,...b]
    
        //     if(a.length > 0){
        //         for (let i = 0 ; i < a.length; i++){
        //             if (a[i].questionID === b[0].questionID){
        //                 if (a[i].choiceId === b[0].choiceId){
        //                     return [...a]
        //                 } else {
        //                     a.splice(i,1)
        //                     a.push(b[0])
        //                 }
        //             } else {
        //                 a.push(b[0])
        //             }
        //         }
        //         return [...a]
        //     } else {
        //         return [...b]
        //     }
        })
    },[c])

    const choiceElements = () => {
        return c.map(choice =>
            <Choice
                key={choice.choiceId}
                choice={choice.choice}
                questionId={id}
                choiceId={choice.choiceId}
                handleClick={handleClick}
                isSelected={choice.isSelected}
                toggleSelected={toggleSelected}
            />
        )
    }

    return(
        <div className={styles.container}>
            <p className={styles.question}>{question}</p>
            <div className={styles.answers}>
                {choiceElements()}
            </div>
        </div>
    )
}

export default Question