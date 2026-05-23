let input = document.getElementById('input')
let list = document.getElementById('list')

let btn = document.getElementById('btn')

// Add Click Event on button
btn.addEventListener('click', function(){

    if(input.value === "") return;

    // Create li(list item)
    let li = document.createElement('li')
    li.innerText = input.value;

    li.onclick = function(){
        li.classList.toggle('completed')
    }

    // Create Delete Button
    let deletebtn = document.createElement('button')
    deletebtn.innerText = "Delete"

    deletebtn.onclick = function(){
        li.remove();
    }


    li.appendChild(deletebtn)
    list.appendChild(li)

    input.value = ""
})

