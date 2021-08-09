//                                                        problem - 1

//                                             function Sheer to mon conversation.

function seerToMon(seer) {
    if (typeof seer != typeof 1) {
        return 'Give Number!!'
    }
    else if (seer < 0) {
        return 'Give positive number!!'
    }
    else {
        let mon = seer / 40;
        return mon;
    }
}


const seer = 5;

const result = seerToMon(seer)
// console.log(result);



//                                                          problem - 2
//                                              function for total Sales in one day.

// product price 
const shirtPrice = 100;
const pantsPrice = 200;
const shoesPrice = 500;



function totalSales(shirt, pants, shoes) {
    if (shirt < 0 || pants < 0 || shoes < 0) {
        return ' Give all positive value!!'
    } else if (typeof shirt != typeof 1 || typeof pants != typeof 1 || typeof shoes != typeof 1) {
        return 'Give  number not string!!'
    }
    else {

        let totalSales = shirtSales + pantsSales + shoesSales;
        return totalSales;
    }
}


// product sales
let shirtSales = 5;
let pantsSales = 0;
let shoesSales = 0;

const sales = totalSales(shirtSales, pantsSales, shoesSales);
// console.log(sales);



//                                                         problem - 3

//                                  function for Delivery Cost for hundred , secons hundred ,and rest



function deliveryCost(totalproduct) {
    const costForFirstHundred = 100;
    const costForSecondHundred = 80;
    const costForRest = 50;

    if (typeof totalproduct != typeof 1 || totalproduct < 0) {
        return 'Give positive numbers'
    }
    else {

        if (totalproduct <= 100) {

            const cost = totalproduct * costForFirstHundred;
            return cost;
        }
        else if (totalproduct > 100 && totalproduct <= 200) {
            // first hundred delivery Cost
            const firstHundredCost = costForFirstHundred * 100;

            // rest product cost 
            const restProudct = totalproduct - 100;
            const secondCost = restProudct * costForSecondHundred;

            // total cost for over hundred 

            const cost = secondCost + firstHundredCost;
            return cost;
        }
        else if (totalproduct > 200) {
            const firstHundredCost = costForFirstHundred * 100;
            const secondHundredProductCost = costForSecondHundred * 100;

            const restProudctDelibary = totalproduct - 200;
            const restProudctCost = restProudctDelibary * costForRest

            const cost = restProudctCost + firstHundredCost + secondHundredProductCost;
            return cost;


        }
    }
}

const cost = deliveryCost(10);
// console.log(cost)


//                                               problem - 4

//                      function for an array who carry a name which have five character



const friends = ['Emon', 'TanJi', 'TanJi', 'TanJi', 'TanJi', 'TanJ', 'allue', 'khalu', 'baluu'];

function perfectFriend(friends) {
    let fiveCharacterName = [];

    for (let i = 0; i < friends.length; i++) {
        if (typeof friends[i] != typeof 'a') {
            return 'Give us all String'
        }
    }


    for (let i = 0; i < friends.length; i++) {


        if (friends[i].length == 5) {
            fiveCharacterName.push(friends[i])
            break;
        }

    } return fiveCharacterName;
}
const array = perfectFriend(friends);
// console.log(array);