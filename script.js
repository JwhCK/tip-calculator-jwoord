const billAmount = document.querySelector(".input-box-bill-amt")
const button = document.querySelectorAll(".percent-buttons")
const numOfPeople = document.querySelector(".input-box-num-people")
const tip = document.querySelector(".tip-amount")
const total = document.querySelector(".tip-amount-total")
const reset = document.querySelector(".reset")
const percentages = [5,10,15,25,50]
const alert = "Please fill in the number of people"

const onClick = (percentages) =>{
  
tip.innerHTML = `${Math.round(((percentages / 100) * billAmount.value) / numOfPeople.value)}`;
total.innerHTML = `${Math.round((billAmount.value / numOfPeople.value) + (((percentages /100) * billAmount.value) / numOfPeople.value))}`;

}

button.forEach((button, index) =>{
    button.addEventListener('click', () =>{
    onClick(percentages[index])

 })
})

reset.addEventListener('click', () => {
    billAmount.value = '';
    custom.value = '';
    numOfPeople.value = '';
    tip.innerHTML = '00.00';
    total.innerHTML = '00.00';
})




// button[0].addEventListener('click', () => {
//         tip.innerHTML = `${((5 / 100) * billAmount.value) / numOfPeople.value}`;
//         total.innerHTML = `${(billAmount.value / numOfPeople.value) + (((5 /100) * billAmount.value) / numOfPeople.value)}`
//     })

// button[1].addEventListener('click', () => {
    
//     tip.innerHTML = `${((10 / 100) * billAmount.value) / numOfPeople.value}`;
//     total.innerHTML = `${(billAmount.value / numOfPeople.value) + (((10 / 100) * billAmount.value) / numOfPeople.value)}`
// })

// button[2].addEventListener('click', () => {
//     tip.innerHTML = `${((15 / 100) * billAmount.value) / numOfPeople.value}`;
//     total.innerHTML = `${(billAmount.value / numOfPeople.value) + (((15 / 100) * billAmount.value) / numOfPeople.value)}`
// })

// button[3].addEventListener('click', () => {

//     tip.innerHTML = `${((25 / 100) * billAmount.value) / numOfPeople.value}`
//     total.innerHTML = `${(billAmount.value / numOfPeople.value) + (((25 /100) * billAmount.value) / numOfPeople.value)}`
// })

// button[4].addEventListener('click', () => {
    
//     tip.innerHTML = `${((50 / 100) * billAmount.value) / numOfPeople.value}`
//     total.innerHTML = `${(billAmount.value / numOfPeople.value) + (((50 /100) * billAmount.value) / numOfPeople.value)}`
// })

// reset.addEventListener('click', () => {
//     billAmount.value = '';
//     custom.value = '';
//     numOfPeople.value = '';
//     tip.innerHTML = '00.00';
//     total.innerHTML = '00.00';
// })
