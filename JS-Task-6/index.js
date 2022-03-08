// let ul=document.querySelectorAll("div ul li");
// for(let i=0;i<ul.length;i++)
// console.log(ul[i].textContent);

let add=document.getElementById("add");
let remove=document.getElementById("remove");
let count=0;
let mylist=document.getElementById("mylist");
let li=document.querySelectorAll("#mylist li");
for(let i=0;i<li.length;i++)
{
  li[i].classList.add("food");
  li[i].classList.remove("item");
}

let l;
let t;
add.addEventListener('click',(e)=>{
    if(count==0){
     l=document.createElement("li");
     t= document.createTextNode("Air Freshener");
   l.append(t);
   l.classList.add("food");
  mylist.appendChild(l);
  //  console.log(document.getElementById("mylist"));
  count++;
}
if(count>0)
  // console.log("");
  count++;
});
// let rem=0;
remove.addEventListener('click',()=>{
   
     let last= document.querySelectorAll("#mylist li");
         last[last.length-1].remove();
         
    
    
});

