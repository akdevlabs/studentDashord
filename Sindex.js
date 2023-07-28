import {profile01} from './database.js'
import {profile02} from './database.js'
import {profile03} from './database.js'
import {profile04} from './database.js'
import {fraseList} from './database.js'


//-------------------- Dropdown ---------------------//
const dropdown = document.querySelectorAll('.dropdown');
const dropdownIt = document.querySelectorAll('.dropdownOne');

dropdown.forEach(dropdown =>{
    const sel = dropdown.querySelector('.select')
    const gear = dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.menu')
    const opts = dropdown.querySelector('.menu li')
    const seled = dropdown.querySelector('.selected')
    
    
    sel.addEventListener('click',() => {
        sel.classList.toggle('select-clicked');
        gear.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    
    });
    })
    
    

//-------------------- Welcome Banner ---------------------//
const wBanner = document.getElementById("WB")


let userName = transferString()


function chooseUser(){

    if (userName === 202301){
        let file = profile01 
        return file
      }else if (userName === 202302){
        let file = profile02 
        return file
      }else if (userName === 202303){
        let file = profile03 
        return file
      }else if (userName === 202304){
        let file = profile04 
        return file
      }      
}

function getName(){
     let fileName = chooseUser()
     return(fileName.name)
}

function renderWelcome(){
    let fullName = getName()
    wBanner.innerHTML = "<a>"+ fullName + "</a>" 
}

renderWelcome()


//------------------------ WBT ---------------------------//
const WBT = document.getElementById("WBT")

    function levelC (){
        let levelChoosen = getImage()
        return(levelChoosen)
   
    }

    
    function choosePhrase(){
      let fList = fraseList

    const resultList = fList[levelC()]
    return(resultList)
    }
  
   


    function renderFrase(){
        let showFrase = `<p>${choosePhrase()}</p>
        `
        
        WBT.innerHTML = showFrase  
    }
  

    renderFrase()
//-------------------- Progress Bar ---------------------//
const barId = document.getElementById("bar")

function getbar(){
    let barValue = chooseUser()
return(barValue.per)
}


function barIt(){
    let renbar = barId.value
    renbar.push(getbar())
  
}

function renderBar(){
    let showBar = `<progress id="file" class="bar" max="100" value="${getbar()}"></progress>
    `
    
    barId.innerHTML = showBar  
}

renderBar()

//----------------- Send Email-----------------------//


const fileSelector = document.getElementById('file-selector');
let toSend = fileSelector


  
  function sendEmail() {
    Email.send({
    Host: "smtp.gmail.com",
    Username : "Your Gmail Address",
    Password : "Your Gmail Password",
    To : 'recipient’s email address',
    From : "sender’s email address",
    Subject : "email subject",
    Body : "email body",
    Attachments : [
        {
            name : "smtpjs.png",
            path:"fileSelector"

        }]
    }).then(
        message => alert("mail sent successfully")
    );
  }




//---------------- Level ------------------------------//
const levelI = document.getElementById("levelImg")

function getImage(){
    let fileLevel = chooseUser()
    return(fileLevel.level)
}

function chooseImg(){
    if (getImage() === 1){
        let profileImg = "one.png"  
       return profileImg
    }else if (getImage() === 2){
        let profileImg = "two.png"  
     return profileImg
    }else if (getImage() === 3){
        let profileImg = "three.png"  
     return profileImg
    }else if (getImage() === 4){
        let profileImg =  "four.png"  
     return profileImg
    }else if (getImage() === 5){
        let profileImg = "five.png"  
     return profileImg
    }else if (getImage() === 6){
        let profileImg = "six.png"  
    return profileImg
    }else if (getImage() === 7){
        let profileImg = "seven.png"  
    return profileImg
    }else if (getImage() === 8){
        let profileImg = "eight.png"  
        return profileImg
    }else if (getImage() === 9){
        let profileImg = "nine.png"  
        return profileImg
    }else if (getImage() === 10){
        let profileImg = "ten.png"  
     return profileImg
    }else if (getImage() === 11){
        let profileImg = "eleven.png"  
     return profileImg
    }else if (getImage() === 12){
        let profileImg = "twelve.png"  
     return profileImg
    }else if (getImage() === 13){
        let profileImg = "thirteen.png"  
     return profileImg
    }else if (getImage() === 14){
        let profileImg = "fourteen.png"  
     return profileImg
    }else if (getImage() === 15){
        let profileImg = "fifteen.png"  
     return profileImg
    }else if (getImage() === 16){
        let profileImg = "sixteen.png"  
     return profileImg
    }else if (getImage() === 17){
        let profileImg = "seventeen.png"  
     return profileImg
    }else if (getImage() === 18){
        let profileImg = "eighteen.png"  
     return profileImg
    }else if (getImage() === 19){
        let profileImg = "nineteen.png"  
     return profileImg
    }else{ let profileImg = "twenty.png"  
     return profileImg
    }


}
    
function printprofileImg(){
       
        let profileImg = chooseImg() 
        var img = document.createElement("img")
        img.src = profileImg
        var src = document.getElementById("levelImg")
        src.appendChild(img)
}

   
       printprofileImg()
//---------------- Calander ------------------------------//

const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
// storing full name of all months in array
const months = ["January", "February", "March", "April",      "May", "June", "July",
              "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
})



//----------------- student Img-------------------------//
const stuImg = document.getElementById("student-Id")

function getstuImage(){
    let fImg = chooseUser()
    return (fImg.img)
}

function printstuImg(){
       
    let sPi = getstuImage()

    var studentImg = document.createElement("img")
    studentImg.src = sPi

   


   var src = document.getElementById("student-Id")
        src.appendChild(studentImg)

}
printstuImg()

//--------------------------- Local storage ------------------------//

function transferString(){
   let transfer = localStorage.getItem("textvalues")
   return(Math.floor(transfer)) 
}
console.log(transferString())

