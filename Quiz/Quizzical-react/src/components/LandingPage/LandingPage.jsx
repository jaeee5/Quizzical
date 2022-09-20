
import styles from './LandingPage.module.css'
import { Dropdown } from "react-dropdown-now"
import "react-dropdown-now/style.css"


function Landing({startQuiz, changeAmount, changeDifficulty, changeType}){

    const typeOptions = [
        { value: "", label: "All Question Types" },
        { value: "type=multiple", label: "Multiple choice" },
        { value: "type=boolean", label: "True or False" },
    ]
    const amountOptions = [
        { value: "5", label: "5 questions" },
        { value: "10", label: "10 questions" }
    ]

    const difficultyOptions = [
        { value: "easy", label: "Easy difficulty" },
        { value: "medium", label: "Medium difficulty" },
        { value: "hard", label: "Hard difficulty" },
    ]

    return(
        <div className={styles.start}>
            <h1>Quizzical</h1>
            <p>Have a go! You might just learn something new 🤓</p>
            <div>
                <Dropdown
                    className={styles.dropdown}
                    placeholder="Select an option"
                    options={typeOptions}
                    value=""
                    onChange={value => changeType(value)}
                />
                <Dropdown 
                    className={styles.dropdown}
                    placeholder="Difficulty"
                    options={difficultyOptions}
                    value=""
                    onChange={value => changeDifficulty(value)}
                />
                <Dropdown 
                    className={styles.dropdown}
                    placeholder="Number of questions"
                    options={amountOptions}
                    value=""
                    onChange={value => changeAmount(value)}
                />
            </div>
            <button className={styles.button} onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}

export default Landing