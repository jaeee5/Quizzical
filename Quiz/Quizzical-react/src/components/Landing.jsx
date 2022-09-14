
function Landing({gameOver, startQuiz}){

    return(
        <div>
            <h1>Landing Page</h1>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}

export default Landing