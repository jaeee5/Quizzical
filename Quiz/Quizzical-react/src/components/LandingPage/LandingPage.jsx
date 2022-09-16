import styles from './LandingPage.module.css'

function Landing({gameOver, startQuiz}){

    return(
        <div className={styles.start}>
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button className={styles.button} onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}

export default Landing