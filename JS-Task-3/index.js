let color = "yellow";
function fav() {
    let arr1 = this.Favourite_color;
    for (let i = 0; i < arr1.length; i++) { if (color == arr1[i]) return "yellow is my favourite color"; }
    return "yellow is not my favourite color";
} 
let arr = [{
    name: "Ram", age: 22, isBestFriend: true, Favourite_color:
        ['red', 'yellow', 'blue', 'black', 'green', 'white'], yellowFavourite: fav
}, {
    name: "Shyam", age: 25,
    isBestFriend: "No", Favourite_color: ['red', 'blue', 'black'], yellowFavourite: fav
}, {
    name: "Mohan", age: 24,
    isBestFriend: "No", Favourite_color: ['red', 'yellow', 'pink'], yellowFavourite: fav
}, {
    name: "Sonu", age: 26,
    isBestFriend: true, Favourite_color: ['red', 'yellow', 'black'], yellowFavourite: fav
}, {
    name: "Mohan", age: 28,
    isBestFriend: true, Favourite_color: ['red', 'blue', 'pink', 'brown'], yellowFavourite: fav
}, {
    name: "Mohan",
    age: 28, isBestFriend: true, Favourite_color: ['red', 'blue', 'white', 'green'], yellowFavourite: fav
}]; 

let max_length = 0; 
for (let size = 0; size < arr.length; size++) 
{
        if (arr[size].Favourite_color.length > max_length)

            max_length = arr[size].Favourite_color.length;
 }


let colors = "favourite";
let data=`<th>S.No</th><th>Name</th><th>Age</th><th>Best Friend</th><th>Yellow Favourite</th>`;
let table=document.getElementById("table");

for (let k = 0; k < max_length; k++) 
    data += `<th>${colors + (k + 1)}</th>`;   
table.innerHTML +=data;
let data_set='';
let count=1;
for (let i = 0; i < arr.length; i++) 
{
    data_set +=`<tr><td>${(count++)}</td><td>${arr[i].name}</td><td>${arr[i].age}</td><td>${arr[i].isBestFriend}</td><td>${arr[i].yellowFavourite()}</td>`;
    for (let c = 0; c < max_length; c++) 
    {
         if(arr[i].Favourite_color[c]==undefined)
             data_set +=`<td></td>`;
         else
             data_set += `<td>${arr[i].Favourite_color[c]}</td>`; 
         
    }
    data_set +=`</tr>`;
} 

table.innerHTML +=data_set;