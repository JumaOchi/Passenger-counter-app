// document.getElementById("count-el").innerText = 5

// initialize the count as 0
// listen for clicks on the increment button
// increament the count variable when the button is clicked
// change the count-el in HTML to reflect the new count

//CamelCase this is a js naming convention where we capitalize he 1st leer of the second word
let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
   count += 1
   countEL.innerText = count
   console.log(count)
}

// 1. Create a function, save(),which logs out the count when its called

function save() {
    console.log(count)
    //2. Create a variable that contains both the count and the dash seperator, i.e "12 -"
    //3. Render the variable in the saveEl using innerText
    //NB: Make sure to not delete the existing contents of the paragraph
    let save = " " + count + " -"
    saveEl.innerText += save // alternatively you can use saveEl.textcontent that will be able to read the hidden elements also
    countEL.textContent = 0
    count = 0
}










