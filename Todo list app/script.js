
let input_tag = document.getElementById("input");
let list_block=document.querySelector(".all_tasks")
document.getElementById("add-btn").addEventListener("click", addList)
let changed_value;
// let preValue;
function addList() {
    input_value = input_tag.value;
    if (input_value == "") {
        alert("please enter your task");
        return;
    }
    if (list_block.lastChild.textContent == "Empty") {
        list_block.lastChild.remove();
    }
    let newList=document.createElement("div")
     newList.innerHTML = `<li id="1" class="">
                <hr class="mt-2" style="height:2px;background-color:rgb(169, 168, 168);">
                <div class="my-4 flex justify-between px-1">
                    <div class="flex items-center gap-2"> <span class="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "><i id="checked1" class="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa fa-check"></i></span>
                    <div class="list-div">
                    <p class="md:max-w-[375px] truncate max-w-[280px] text-[1.18rem] pl-[0.9rem]">${input_value}</p>
                    </div>
                    </div> 
                    <div class="flex gap-[10px]"><span code="edit" class="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "><i code="edit2" class="transition-all hover:text-lg text-green-600 hover:text-green-900 fa-solid fa-pen-to-square"></i>
                    </span>
                    <span class="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full " code="trash"><i class="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash" code2="i"></i>
                    </span>
                </div>
                    
                    
                </div>
            </li>`;
    list_block.append(newList);


    input_tag.value = "";
}

function addEmpty() {  
    if (list_block.childElementCount == 0) {
        list_block.innerHTML = `<p class="text-xl font-semibold mt-2 text-[#063c76] text-center">Empty</p>`;
    }
  
}
addEmpty();

document.body.addEventListener("click", (e) => {
    let parentElement;
    if (e.target.getAttribute('code') == "trash") {
        parentElement = e.target.parentNode.parentNode.parentNode.parentNode;
       
        parentElement.remove();
        addEmpty();
        return;
    }
    if (e.target.getAttribute("code2") == "i") {
        parentElement = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        console.log("clicking i tag ");
        parentElement.remove();
        addEmpty();
        return;
    }
    if (e.target.getAttribute("id") == "checked1") {
        let content = e.target.parentNode.nextElementSibling;
        content.classList.toggle("strike");
        return;
    }
    if (e.target.getAttribute("code") == "edit") {
        console.log("span is clicked");
        let parent = e.target.parentNode.previousElementSibling.lastElementChild
        console.log(parent);
        if (e.target.lastElementChild.classList.contains("fa-circle-check")) {
            changed_value = parent.children[0].value;
            parent.innerHTML = ` <p class="md:max-w-[375px]  max-w-[280px]  ">${changed_value}</p>`;
            return;
        }
        let preValue = parent.lastElementChild.textContent;
        parent.innerHTML = `<input type="text" id="edit-input" class="md:max-w-[375px]  max-w-[280px]">`;
        parent.children[0].value = preValue;
        e.target.children[0].classList.toggle("fa-pen-to-square");
        e.target.children[0].classList.toggle("fa-circle-check");
        return;
    }
    if (e.target.getAttribute("code") == "edit2") {
        // console.log("i tag is clicked");
        // console.log(e.target);
        let parent = e.target.parentNode.parentNode.previousElementSibling.lastElementChild;
        if (e.target.classList.contains("fa-circle-check")) {
            changed_value = parent.children[0].value;
            
            parent.innerHTML = `<p class="md:max-w-[375px]  max-w-[280px]">${changed_value}</p>`;
            e.target.classList.toggle("fa-pen-to-square");
            e.target.classList.toggle("fa-circle-check");
            return;
        }
        let preValue = parent.lastElementChild.textContent;
        console.log(preValue);
        parent.innerHTML = `<input type="search" id="edit-input" class="md:max-w-[375px]  max-w-[280px]">`;
        parent.lastElementChild.value = preValue;
        e.target.classList.toggle("fa-pen-to-square");
        e.target.classList.toggle("fa-circle-check");
        
    }
    
    
})

{/* <i class="fa-solid fa-circle-check"></i>
<i code="edit2" class="transition-all hover:text-lg text-green-600 hover:text-red-900 fa-solid fa-pen-to-square"></i> */}

document.getElementById("area").addEventListener("click", () => {
    let myValue = document.getElementById("df").value
    console.log(myValue);
})