import styles from './Choice.module.css'

function Choice({choice, choiceId, questionId, handleClick, isSelected, toggleSelected}){

    const styless = {
        backgroundColor: isSelected ? "#D6DBF5" : "#F5F7FB"
    }

    return(
        <div 
            className={styles.choice}
            onClick={() => {
                handleClick(choiceId, questionId, choice)
                toggleSelected(choiceId,questionId)
            }}
            style={styless}
        >
            {choice}
        </div>
    )
}

export default Choice