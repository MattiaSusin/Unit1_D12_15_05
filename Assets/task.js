const form = document.getElementById("taskForm")
form.addEventListener("submit", function (event){
    
    event.preventDefault()
    

    const newToDoListInputField = document.getElementById("nameInput")

    const newList = {

        newToDoList: newToDoListInputField.value
    }

    const card = document.createElement("div")
    card.classList.add("card")
    const cardTitle = document.createElement("h2")
    cardTitle.classList.add("card")
    cardTitle.innerText = newList.newToDoList

    card.append(cardTitle)

    const newTaskList = document.getElementById("newTaskList")
    console.log(newTaskList)

     newTaskList.appendChild(card)
    const cards = newTaskList.children
    console.log("Card", card)
    console.log("totale liste:", card.length) 
})