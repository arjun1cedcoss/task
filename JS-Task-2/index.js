function calulate() {
    r = this.room_r;
    d = this.dicount_r;
    return (r * (100 - d) / 100);}

function expires_time() {
    var mydate = new Date();
    var day = mydate.getDate();
    var month = +mydate.getMonth();
    var year = mydate.getFullYear();
    let Expired;
    Expired = day + 7;
    if ((year % 4 == 0 && year % 100 != 0) && month == 2 && Expired > 29) {
        Expired = Expired % 29;
        month = month + 1;}
    if ((year % 4 == 0 && year % 100 == 0) && month == 2 && Expired > 28) {
        Expired = Expired % 28;
        month = month + 1;}
    if (month % 2 == 0 && Expired > 31) {
        Expired = Expired % 31;
        month = month + 1;}
    if (month % 2 != 0 && Expired > 30) {
        Expired = Expired % 30;
         month=month+1;}
    let newdate = new Date();
    newdate.setDate(Expired);
    newdate.setMonth(month);
    newdate.setFullYear(year);
    return newdate;}
function hotel_detail() {
    let hotel = {
        name: "Taj Hotel",
        room_r: 240,
        dicount_r: 15,
        discount: calulate,
        expires: expires_time }
    let months = ["January", "February", "March", "April", "May", "June", "july", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("hotel_name").textContent = hotel.name;
    document.getElementById("room_rate").textContent = `Room Rate =   Rs.  ${hotel.room_r}.00`;
    document.getElementById("dicountrate").textContent = `Discounted Rate = Rs.  ${hotel.discount()}`;
    document.getElementById("d").textContent = `Offer expires on next ${days[expires_time().getDay()]}`;
    document.getElementById("duration").textContent = `( ${hotel.expires().getDate()}  ${months[hotel.expires().getMonth()]}  ${hotel.expires().getFullYear()}  )`;}
hotel_detail();







