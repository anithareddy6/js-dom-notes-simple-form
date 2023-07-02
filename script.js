// select elementbyid-we can select only id and we dont have to mention #

// console.log(document.getElementById("my-form"))
// or
// var form=document.getElementById("my-form")
// console.log(form)
//we can write in single line and concat like below 
// var para=document.getElementById('first')
// para.style.cssText="background:yellow; color:blue"
// para.style.cssText +="width:150px ;height:100px"

// queryselector-we can select any single element like tag,class,id and we have to mention #,.

// console.log(document.querySelector("#my-form"))
// console.log(document.querySelector("h1"))
// or 
// var container1=document.querySelector(".container");
// console.log(container1)


// select elementbyclassName-we can select only className and we dont have to mention .

//  console.log(document.getElementsByClassName("item"))
// console.log(document.getElementsByClassName("btn"))
// or 
// var button=document.getElementsByClassName("btn")
// console.log(button)


// queryselectorall-(mostly used to select group of elements)and also id,class,tag and we have to mention #,.


// console.log(document.querySelectorAll("li"))
// or
// listitem1=document.querySelectorAll("li")
// console.log(listitem1)


//practice

// how to manupulate DOM 

// 1.first grab the element or tag or class through dom by selectors like above or below(step1),then console(step2)
// 2.do the things you want like removing items in list ,to change content inside content,change color,background color(step3)


//grabbing elements from dom(step1)
// var ul=document.querySelector(".items")
//ul.lastElementChild.style .visibility="hidden"(it will make last element hidden)
// console.log(ul);(step2)

//to remove items (step3)
// ul.remove()-to remove all  items
// ul.lastElementChild.remove()//to remove last item
// ul.firstElementChild.remove()//to remove first item 
// to select middle or secondchild .we can use index like below
// ul.children[1].remove()

//to change(content inside), use edit innertext or innerHtml or textcontent like below
// ul.firstElementChild.textContent="hello1"
// ul.lastElementChild.innerHTML='<h2>hello3</h2>'//if we want to change font size or style ,then use innerhtml
// ul.children[1].innerHTML="hello2"
// ul.lastElementChild.style.color="red"//to cahnge textcolor
// ul.lastElementChild.style.backgroundColor="red"//to change background color


// to change background color or color for button

// const button=document.querySelector(".btn")
// console.log(button)
// button.style.backgroundColor="green"
// button.style.color="red"


//to add event listener like click,mouseover,mouseout
//event parameter-e(used to do any functions)

// click- after we click or submit it will perform event (ie)functions 
// mouseover- when  we mouseover it will perform event (ie) functions 
// mouseoutt- when  we mouseut it will perform event (ie)functions 

//selectelement(step1)
// const button=document.querySelector(".btn")
//click-event,e-arrow function-(syntax should be like this event,function.so when we run the event,the function should happen)
// button.addEventListener('click',(e)=>{  //(step2-add addeventlistener()like left)e-event which permform these below functions
// e.preventDefault()//prevent default behaviour
// in console if we want to display anything we can do like below
    // console.log("click");//it display on console for each click after we click submit
    // console.log(e);//event object
    // console.log(e.target)//it will give us actual element for which event is performing,in this case its button so it will give button element
    // console.log(e.target.className);// when we click submit it will give classname of target which is btn

// to change any like backgroundcolor for which event(this case it is form) is performing,we can manipulate like below
//it will change backgroundcolor after we submit(we should do it inside event then only it works because event only doing these changes)
// document.querySelector("#my-form").style.backgroundColor="#ccc"
//it will change background color of body after we submit(we dont use much)
// document.querySelector("body").classList.add("bg-dark")
//it will change content of listitem after we click submit
// document.querySelector(".items").lastElementChild.innerHTML="hello"
// }
// )


// grab bunch of stufs from dom and manypulate through event
// const form=document.querySelector("#my-form");
// const name1=document.querySelector("#name");
// const email=document.querySelector("#email");
// const msg=document.querySelector(".msg");
// const userlist=document.querySelector("#users");

// we can also write function like below when we are not using arrow function
// form.addEventListener('submit',onsubmit)
// function onsubmit(e){
//     e.preventDefault();
// console.log(name1.value)//it will give users entered name
//using if statements,we can tell user to submit all fields
// if(name1.value==""||email==""){//if any one is empty or false
//     msg.classList.add('error');//it will add error style  & (optional)
//     msg.innerHTML="please enter all fields"//add this in msg and show to user 
    // setTimeout(()=>msg.remove(),3000);//settimeout will remove msg after 3 millisecond.this is how we use settimeout(optional)
// }else{//else
    // console.log("success")//print success
    // or 
    // after clearing listitems in HTML ,we can add details after users Submit Event
// const li=document.createElement('li');//create list item
//in appendchild (appendchild will generally add)we are going to  create text which will add whatever user is inputting
// li.appendChild(document.createTextNode(`${name1.value} : ${email.value}`));
// userlist.appendChild(li);//in userlist area,those added data will display  when we submit.here li was appended (added inside appendchild)

//clear fields
// name1.vlue="";
// email.value="";
// }
// }


// adding values to local Storage,  session storage and cookies

//to store and remove items in local storage in key value pair(Setitem will store in ls)
// localStorage.setItem("name","anitha")//(add name)
// console.log(localStorage.getItem('name'))//(console name)
// localStorage.removeItem("name")(remove everything)

// sessionStorage.setItem("name","anitha");
// console.log(sessionStorage.getItem("name"))
// sessionStorage.removeItem("name")

// document.cookie="name=anitha"
// document.cookie="lastname=J"
// console.log(document.cookie);

// eventlistener
// var para=document.getElementsByName('cars')[0]
// para.onclick=function(event){
//     console.log(event);

// }

// function symbol(e){
//     console.log("its meeee")
// }

// para.addEventListener('click',symbol)
// para.removeEventListener('click',symbol)

// appending and inserting
//to create Element
// var element=document.createElement("div")
// element.style.cssText="width:200px;height:20px;background:blue";
// element.onclick=function(){alert('hello');};
//document.body.appendChild(element);

// var target=document.getElementById("green")
// document.body.insertBefore(element,target)//syntax-(element-what we want to insert,target-which before we have to insert)

//window object
// var item=document.getElementsByClassName('item')
// item[0].innerText="hello"
// item[0].style.color="green"
// item[1].style.color="yellow"

//event
// const button=document.querySelector(".btn")
// button.addEventListener('click',(e)=>{  //(step2-add addeventlistener()like left)e-event which permform these below functions
// e.preventDefault()//prevent default behaviour
// document.querySelector("#my-form").style.backgroundColor="#ccc"
// document.querySelector("body").classList.add("bg-dark")
// document.querySelector(".items").lastElementChild.innerHTML="hello"
// console.log(button.value)
// })