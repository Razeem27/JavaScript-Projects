let navbar=document.querySelector(".nav-wrapper");
let dropDown=document.querySelector(".main-dropdown");
let contacts=document.getElementById("contact")
let domainDropdown=document.querySelector(".domain-dropdown");


////////////////////////////onclick 
document.body.addEventListener("click",()=>{
    let isSignOpen =document.querySelector(".sign-dropdown").style.opacity=="1";
    let isNumberOpen=document.querySelector(".sign-dropdown").style.opacity=="1";
    if(isSignOpen){
        document.querySelector(".sign-dropdown").style.opacity="0";
        document.querySelector("#sign-arrow").style.transform="rotate(0deg)"
        document.querySelector(".sign-dropdown").style.transform="scaleY(0)";
    }
    if(dropDown.style.opacity=="1"){
        dropDown.style.opacity="0";
        dropDown.style.transform="scaleY(0)";
        document.querySelector(".fa-angle-down").style.transform="rotate(0deg)"
    }
    if(domainDropdown.style.opacity=="1"){
        domainDropdown.style.opacity="0";
        domainDropdown.style.transform="scaleY(0)";
        setTimeout(()=>{
        document.querySelector(".domain-content").style.transform="translate(14%)";
        },200)
    }
    if(document.querySelector(".hosting-drop").classList.contains("hosting-drop-toggle")){
    document.querySelector(".hosting-drop").classList.toggle("hosting-drop-toggle");
    }

        
})






//number onclick function
dropDown.style.opacity="0";
contacts.addEventListener("click",(e)=>{
    e.stopPropagation();
    if(dropDown.style.opacity=="0"){
        dropDown.style.opacity="1";
        dropDown.style.transform="scaleY(1)";
        document.querySelector(".fa-angle-down").style.transform="rotate(180deg)"
    }
    if(domainDropdown.style.opacity=="1"){
        domainDropdown.style.opacity="0";
        domainDropdown.style.transform="scaleY(0)";
        setTimeout(()=>{
        document.querySelector(".domain-content").style.transform="translate(14%)";
        },200)  
    }
    if(document.querySelector(".sign-dropdown").style.opacity=="1"){
        document.querySelector(".sign-dropdown").style.opacity="0";
        document.querySelector("#sign-arrow").style.transform="rotate(0deg)"
        document.querySelector(".sign-dropdown").style.transform="scaleY(0)";
    }
    if(document.querySelector(".hosting-drop").classList.contains("hosting-drop-toggle")){
        document.querySelector(".hosting-drop").classList.toggle("hosting-drop-toggle");
        }

})
//////////////////////////////number onclick function
document.querySelector(".close-dropdown").addEventListener("click",(e)=>{
    e.stopPropagation();
    if(dropDown.style.opacity=="1"){

        dropDown.style.opacity="0";
        dropDown.style.transform="scaleY(0)";
        document.querySelector(".fa-angle-down").style.transform="rotate(0deg)"

    }
});
//stop propagation for main dropdown
dropDown.addEventListener("click",(e)=>{
    e.stopPropagation();
})


///////////////////////////////////////////////sigin dropdown function
        document.querySelector(".sign-dropdown").style.opacity="0";
        document.querySelector(".sign-dropdown").style.transform="scaleY(0)";


                 
// /////////////////////Sign onclick function
document.querySelector("#signin").addEventListener("click",(e)=>{
    e.stopPropagation();
    if(document.querySelector(".sign-dropdown").style.opacity=="0"){
        document.querySelector(".sign-dropdown").style.opacity="1";
        document.querySelector(".sign-dropdown").style.transform="scaleY(1)";
        document.querySelector("#sign-arrow").style.transform="rotate(180deg)";
        document.querySelector("#sign-arrow").style.zIndex="100";
        
    }
    else{
        document.querySelector(".sign-dropdown").style.opacity="0";
        document.querySelector("#sign-arrow").style.transform="rotate(0deg)"
        document.querySelector(".sign-dropdown").style.transform="scaleY(0)";
    }
    if(domainDropdown.style.opacity=="1"){
        domainDropdown.style.opacity="0";
        domainDropdown.style.transform="scaleY(0)";
        setTimeout(()=>{
        document.querySelector(".domain-content").style.transform="translate(14%)";
        },200)
    }
    if(dropDown.style.opacity=="1"){

        dropDown.style.opacity="0";
        dropDown.style.transform="scaleY(0)";
        document.querySelector(".fa-angle-down").style.transform="rotate(0deg)"

    }
    if(document.querySelector(".hosting-drop").classList.contains("hosting-drop-toggle")){
        document.querySelector(".hosting-drop").classList.toggle("hosting-drop-toggle");
        }

})


document.querySelector(".sign-dropdown").addEventListener("click",(e)=>{
    e.stopPropagation();
});

// sigin close using body




///////////////////onclick function for Domain dropdown

domainDropdown.style.opacity=="0";
document.querySelector(".domain-content").style.transform="translate(14%)";
document.querySelector("#domainDrop").addEventListener("click",(e)=>{
    e.stopPropagation();
    if(domainDropdown.style.opacity=="0"){
        domainDropdown.style.opacity="0.5";
        console.log("inside ");
        domainDropdown.style.transform="scaleY(1)";
        setTimeout(()=>{
            domainDropdown.style.opacity="1";
        },100)
        document.querySelector(".domain-content").style.transform="translate(0%)";
        document.querySelector(".domain-content").style.transition="transform 0.5s ease ";
    
    }
    else{
        domainDropdown.style.opacity="0";
        domainDropdown.style.transform="scaleY(0)";
        setTimeout(()=>{
        document.querySelector(".domain-content").style.transform="translate(14%)";
        },200)
        // document.querySelector(".domain-content").style.transition="transform .2s ease 1s";
        // domainDropdown.style.transform="translate(4%)";
    }
    if(document.querySelector(".sign-dropdown").style.opacity=="1"){
        document.querySelector(".sign-dropdown").style.opacity="0";
        document.querySelector("#sign-arrow").style.transform="rotate(0deg)"
        document.querySelector(".sign-dropdown").style.transform="scaleY(0)";
    }
    if(dropDown.style.opacity=="1"){

        dropDown.style.opacity="0";
        dropDown.style.transform="scaleY(0)";
        document.querySelector(".fa-angle-down").style.transform="rotate(0deg)"

    }
    if(document.querySelector(".hosting-drop").classList.contains("hosting-drop-toggle")){
        document.querySelector(".hosting-drop").classList.toggle("hosting-drop-toggle");
        }
    

})


domainDropdown.addEventListener("click",(e)=>{
    e.stopPropagation();
});







// /////////////////////////////carousel///////////////////////////////////////////////

let pre_btn=document.getElementById("previous-btn");
let next_btn=document.getElementById("next-btn");
document.querySelector(".carousel-wrapper").style.transform="translate(0%)";
pre_btn.addEventListener("click",()=>{  

    // let count=10
    let wrapper=document.querySelector(".carousel-wrapper");

    let  transformStyle=wrapper.style.transform;
    if(transformStyle=="translate(0%)" || transformStyle=="")   {
        pre_btn.style.color="grey";
        pre_btn.style.border="2px solid grey";
        next_btn.style.color="black";
        next_btn.style.border="2px solid black";
        return;
    } 
    let words=transformStyle.split("");
    let count=0;
let result="";
for(let i of words){
    if(i=='('){
        // console.log("working");
        count++;
    }
    if(i=='%'){
        break;
    }
    if(count>0 && i!='('){
        console.log(i);
        result+=i;
    }
    console.log(count);
    // console.log("loop count is"+ typeOf(i);
}
console.log(result);
result=Number(result)+11;
// if(result<60) return;


console.log(wrapper.style.transform=`translate(${result}%)`);  
})

next_btn.addEventListener("click",()=>{
    // let count=10
    let wrapper=document.querySelector(".carousel-wrapper");
    let  transformStyle=wrapper.style.transform;
    // let translateX =(transformStyle.replace(/[^\d.]/g,''));
    // console.log(translateX);
    let words=transformStyle.split("");
    let count=0;
let result="";
for(let i of words){
    if(i=='('){
        console.log("working");
        count++;
    }
    if(i=='%'){
        break;
    }
    if(count>0 && i!='('){
        console.log(i);
        result+=i;
    }
    console.log(count);
    // console.log("loop count is"+ typeOf(i);
}
console.log(result);
result=Number(result)-11;
if(result<-70) {
    next_btn.style.color="grey";
    next_btn.style.border="2px solid grey";
    pre_btn.style.color="black";
    pre_btn.style.border="2px solid black";
    return;
}
console.log(wrapper.style.transform=`translate(${result}%)`); 

})

// ///////////////////////////Dhoni video//////////////////
document.querySelector(".Ad-video-sec").addEventListener("click",()=>{
    document.querySelector(".iframe-container").classList.toggle("iframe-js");
    
    // document.body.style.position="fixed";Ad-video-sec;security-sec-wrapper
    // document.body.style.overflowY="hidden";
    document.body.classList.toggle("bodyOverflow");
    
})


// ///////////////////////////////////accordion ////////////////////////////////////
let accordian=document.getElementsByClassName("acc-item-content");
for(let btn of accordian){

    btn.addEventListener("click",()=>{
        let sibling=btn.nextElementSibling;
        sibling.classList.toggle('acc-active');
        if(sibling.classList.contains("acc-active")){
            btn.lastElementChild.style.transform="rotate(180deg)";
            btn.lastElementChild.style.transition="0.3s";

        }else{
            btn.lastElementChild.style.transform="rotate(0deg)";
            btn.lastElementChild.style.transition="0.3s";

        }
    })
}

//////////////////////////Hosting dropdown/////////////////////////

document.querySelector("#host").addEventListener("click",(e)=>{
    e.stopPropagation();
    document.querySelector(".hosting-drop").classList.toggle("hosting-drop-toggle");

    if(document.querySelector(".hosting-drop").classList.contains("hosting-drop-toggle")){

        document.querySelector("#host-con").style.transform="translateX(0%)";
        setTimeout(() => {
        document.querySelector("#host-con").style.opacity="1";
            
        },270);
    }
    else{
        document.querySelector("#host-con").style.transform="translateX(12%)";
        document.querySelector("#host-con").style.opacity="0";

        
    }
    if(document.querySelector(".sign-dropdown").style.opacity=="1"){
        document.querySelector(".sign-dropdown").style.opacity="0";
        document.querySelector("#sign-arrow").style.transform="rotate(0deg)"
        document.querySelector(".sign-dropdown").style.transform="scaleY(0)";
    }
    if(dropDown.style.opacity=="1"){

        dropDown.style.opacity="0";
        dropDown.style.transform="scaleY(0)";
        document.querySelector(".fa-angle-down").style.transform="rotate(0deg)"

    }
    if(domainDropdown.style.opacity=="1"){
        domainDropdown.style.opacity="0";
        domainDropdown.style.transform="scaleY(0)";
        setTimeout(()=>{
        document.querySelector(".domain-content").style.transform="translate(14%)";
        },200)
    }
})
// ////////////////////////////////
document.querySelector(".hosting-drop").addEventListener("click",(e)=>{
    e.stopPropagation();
})



// /////////////////////////Security///////////////////////////////



//////////////////////////hamburger/////////////////
document.querySelector(".hamburger").addEventListener("click",()=>{
    console.log("working");
    document.querySelector(".sidebar-right").style.display="none"
    document.querySelector(".sidebar").classList.toggle("side-tog");

    document.querySelector(".sidebar-left").classList.toggle("sidebar-tog");
    if(document.querySelector(".sidebar-left").classList.contains("sidebar-tog")){
        setTimeout(() => {
        document.querySelector(".sidebar-right").style.display="block";
        },255);
    }
    document.body.classList.toggle("bodyOverflow");  

});

document.querySelector("#close-sidebar").addEventListener("click",()=>{
    if(document.querySelector(".sidebar-left").classList.contains("sidebar-tog")){
        // document.querySelector(".sidebar-right").style.display="none"
        document.querySelector(".sidebar").classList.toggle("side-tog");
    
        document.querySelector(".sidebar-left").classList.toggle("sidebar-tog");
    document.body.classList.toggle("bodyOverflow");  
        
    }
});
