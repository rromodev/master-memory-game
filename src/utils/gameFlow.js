import create from 'zustand'
import wordArray from './words'
import gameConstants from './constants'

const useGameStore = create((set, get) => ({
  gameStatus: gameConstants.IDLE,
  level: 1,
  points: 0,
  strikes: 0,
  word: "",
  gameStart: () => {
    get().wordSearch()
    set({gameStatus: gameConstants.STARTED})
  },
  gameInput: () => {
    set({gameStatus: gameConstants.WORD_INPUT})
  },
  gameLose: () => {
    set({gameStatus: gameConstants.LOSE})
  },
  gameWon: () => {
    set({gameStatus: gameConstants.WON})
  },
  gameRestart: () => {
    set({
      gameStatus: gameConstants.IDLE,
      level: 1,
      points: 0,
      strikes: 0,
      word: "",
    })
  },
  gameValidate: (input) => {
    let level = get().level
    let strikes = get().strikes
    let points = get().points
    
    if(input === get().word) {
      if(points + 1 === 3) {
        level = level + 1
        points = -1
        if(level === 9) {
          get().gameWon()
          return 
        }
      }

      set({
        level: level,
        points: points + 1
      })
      
      get().gameStart()
    } else {
      
      if(strikes + 1 === 3) {
        get().gameLose()
      } else {

        set({
          level: level === 1 ? 1 : level - 1,
          strikes: strikes + 1
        })
  
        get().gameStart()
        
      }
      
    }
  },
  wordSearch: async () => {
    let words = wordArray.filter(x => x.level === get().level)
    let length = words[0].words.length
    let word = words[0].words[Math.floor(Math.random() * length)]
    set({word : word})
  },
  getTimeToShow : () => {
    let level = get().level
    if (level >= 1 && level <= 3)
      return 800
    else if (level >= 4 && level <= 6)
      return 650
    else 
      return 500
  }
}))

export default useGameStore