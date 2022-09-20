import { useState} from 'react'
import Landing from './components/LandingPage/LandingPage'
import Game from './components/Game/Game'
import styles from './App.module.css'

function App(){

    const [startGame, setStartGame] = useState(true)
    const [gameSettings, setGameSettings] = useState({
        amount: 5,
        difficulty: "easy",
        type: ""
    })

    function changeAmount(value){
        setGameSettings(prevSettings => {
            return {
                ...prevSettings,
                amount: value.value
            }
        })
    }

    function changeDifficulty(value) {
        setGameSettings(prevSettings => {
            return {
                ...prevSettings,
                difficulty: value.value
            }
        })
    }

    function changeType(value) {
        setGameSettings(prevSettings => {
            return {
                ...prevSettings,
                type: value.value
            }
        })
    }

    function startQuiz() {
        setStartGame(false)
    }

    return(
        <main className={styles.app}>
            {/* <img className={styles.logo1} src={logo1} alt="" /> */}
            {startGame
                ?
                <Landing 
                    startQuiz={startQuiz} 
                    changeAmount={changeAmount}
                    changeDifficulty={changeDifficulty}
                    changeType={changeType}
                />
                :
                <Game 
                    setStartGame={setStartGame}
                    gameSettings={gameSettings}
                />
            }
            {/* <img className={styles.logo2} src={logo1} alt="" /> */}
        </main>
    )
}

export default App 