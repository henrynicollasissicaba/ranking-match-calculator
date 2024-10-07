const calculateRankingBtn = document.querySelector('#calculate-ranking')
const victoryBalanceResult = document.querySelector('#victory-balance')
const heroLevelResult = document.querySelector('#hero-level')

calculateRankingBtn.addEventListener('click', () => {
    const userVictories = document.querySelector('#user-victory').value
    const userDefeats = document.querySelector('#user-lose').value

    const quantitiesOfVictories = Number(userVictories)
    const quantitiesOfDefeats = Number(userDefeats)

    const victoryBalance = calculateRank(quantitiesOfVictories, quantitiesOfDefeats)
    const heroLevel = calculateHeroLevel(victoryBalance)

    victoryBalanceResult.textContent = victoryBalance
    heroLevelResult.textContent = heroLevel
})

const calculateRank = (numberOfVictories, numberOfDefeats) => {
    return numberOfVictories - numberOfDefeats
}

const calculateHeroLevel = (victoryBalance) => {
    let heroLevel = ""

    switch(true){
        case (victoryBalance < 10):
            heroLevel = "Ferro"
            break

        case (victoryBalance >= 11 && victoryBalance <= 20):
            heroLevel = "Bronze"
            break

        case (victoryBalance >= 21 && victoryBalance <= 50):
            heroLevel = "Prata"
            break

        case (victoryBalance >= 51 && victoryBalance <= 80):
            heroLevel = "Ouro"
            break

        case (victoryBalance >= 81 && victoryBalance <= 90):
            heroLevel = "Diamante"
            break

        case (victoryBalance >= 91 && victoryBalance <= 100):
            heroLevel = "Lendário"
            break

        case (victoryBalance >= 101):
            heroLevel = "Imortal"
            break
        
        default:
            heroLevel = "Nível não identificado."
            break
    }

    return heroLevel
}