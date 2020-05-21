let temp = 55

if (temp>=60 && temp <= 90){
    console.log('it is really nice out')
}else if(temp<=0 || temp >=120){
    console.log('do not go outside')
}else{
    console.log('do whatever you want')
}

let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan){
    console.log ('only offer vegan options')
}else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('offer up some vegan options')
}else{
    console.log('do whatever you want')
}