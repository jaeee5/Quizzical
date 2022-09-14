
function Choice({choice, choiceId, questionId, handleClick, isSelected, toggleSelected}){

    const styles = {
        backgroundColor: isSelected ? "#D6DBF5" : "#F5F7FB"
    }

    return(
        <div 
            className="choice" 
            onClick={() => {
                handleClick(choiceId, questionId, choice)
                toggleSelected(choiceId,questionId)
            }}
            style={styles}
        >
            {choice}
        </div>
    )
}

export default Choice