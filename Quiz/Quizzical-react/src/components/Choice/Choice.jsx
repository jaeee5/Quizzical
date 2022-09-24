
import styles from './Choice.module.css'

function Choice({choice, choiceId, endGame, questionId, handleClick, isSelected, toggleSelected,questionAnswer}){

    function render(c){

        return(
            <div 
                className={`${styles.choice} ${c}`}
                onClick={() => {
                    handleClick(questionId, choice)
                    toggleSelected(choiceId,questionId)
                }}
            >
                {choice}
            </div>
        )
    } 

    if (!endGame){
        if (isSelected){
            return render(styles.selected)
        }
        else {
            return render("")
        }

    } else {
        if(isSelected){
            if (choice === questionAnswer){
                return render(styles.correct_answer)
            }
            return render(styles.wrong_answer)
        } else if (choice === questionAnswer){
            return render(styles.correct_answer)
        } else {
            return render("")
        }
    }
}

export default Choice