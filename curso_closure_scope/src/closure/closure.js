// const moneyBox  = (coins) => {
//     var saveCoins = 0;
//     saveCoins += coins;
//     console.log("money box $" + saveCoins);
// }

// moneyBox(5)
// moneyBox(10)

//con un clousere

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => { 
        saveCoins += coins;
        console.log("MoneyBox $$" + saveCoins)
    }
    return countCoins;
}

let myMonyeBox = moneyBox();

myMonyeBox(4);
myMonyeBox(6);
myMonyeBox(10);