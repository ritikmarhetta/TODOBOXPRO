let toAdd = document.getElementById("toAdd");
toAdd.style.cursor = "pointer";
toAdd.addEventListener("click",function(event){
    document.getElementById("newListBox").style.visibility = "visible";
    document.getElementById("bgBlur").style.filter = "blur(5px)";
})

let addBtn = document.getElementById("addBtn");
let taskCards = document.getElementById("taskCards");
let listItem = document.getElementById("listItem");
function dynamicId(){
    const did=`id-${+ new Date()}`;
    return did;
}

function addList(){
    if(listItem.value!="")
    {
    document.getElementById("byDefault").style.display="none";
    let task = document.createElement("div");
    task.className = "tasks";
    let id=dynamicId();
    task.id=id;
    let value = listItem.value;
    task.innerHTML = `<p class="listTitle"> ${value} </p> <hr> <i id="delCard" class="fa-solid fa-trash"></i>
    <i id="addItem" class="fa-sharp fa-solid fa-circle-plus circle-plus"></i>
    <ul id="add-${id}" style="margin-top: 0px; margin-bottom: 0px"></ul>`;
    taskCards.appendChild(task);
    document.getElementById("newListBox").style.visibility = "hidden";
    document.getElementById("bgBlur").style.filter = "blur(0px)";

    let delcard = document.getElementById("delCard");
    delcard.id=dynamicId();
    delcard.addEventListener("click", function(event){
        task.remove();
    })

    let addItem = document.getElementById("addItem");
    addItem.id=dynamicId();
    addItem.addEventListener("click", function(event){
        document.getElementById("bgBlur").style.filter = "blur(5px)";
        document.getElementById("newListBox").style.visibility = "hidden";
        document.getElementById("newItemBox").style.visibility = "visible";

        let addTask = document.getElementById("addTask");
      
        addTask.addEventListener("click",function(){
            taskAdd(`add-${id}`);
        })
    })
        
    }
}

/*function addItem(){
    document.getElementById("bgBlur").style.filter = "blur(5px)";
    document.getElementById("newListBox").style.visibility = "hidden";
    document.getElementById("newItemBox").style.visibility = "visible";
    //let addTask = document.getElementById("addTask");
    //addTask.addEventListener("click", function(){
        
    //})
    
}*/

function taskAdd(idForList){
    let innerContent = document.getElementById(idForList);
    let taskItem = document.getElementById("taskItem");
        if(taskItem.value!="")
        {
            let todo = document.createElement("li");
            todo.id = `li-${+ new Date()}`;
            todo.innerHTML = `${taskItem.value} <button class="crossbtn" onclick="crossed">Mark Done</button>`;
            innerContent.appendChild(todo);
        }
}

function closeList(){
    document.getElementById("newListBox").style.visibility = "hidden";
    document.getElementById("bgBlur").style.filter = "blur(0px)";
}

function taskClose(){
    document.getElementById("newListBox").style.visibility = "hidden";
    document.getElementById("newItemBox").style.visibility = "hidden";
    document.getElementById("bgBlur").style.filter = "blur(0px)";
}
