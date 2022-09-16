import { useState} from 'react'
import Landing from './components/LandingPage/LandingPage'
import Game from './components/Game/Game'
import styles from './App.module.css'

function App(){

    const [gameOver, setGameOver] = useState(true)

    function startQuiz() {
        setGameOver(false)

    }

    return(
        <main className={styles.app}>
            {/* <img className={styles.logo1} src={logo1} alt="" /> */}
            {gameOver
                ?
                <Landing startQuiz={startQuiz} gameOver={gameOver} />
                :
                <Game 
                    gameOver={gameOver} 
                    setGameOver={setGameOver}
                />
            }
            {/* <img className={styles.logo2} src={logo1} alt="" /> */}
        </main>
    )
}

export default App 