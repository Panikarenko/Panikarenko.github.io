const currentDate=document.querySelector(".current-date"),
prevNextIcon=document.querySelectorAll(".icons span"),
button=document.querySelector(".inst-button"),
infoWrapper=document.querySelector(".info-wrapper"),
daysTag=document.querySelector(".days");

button.addEventListener("click", () => {
    if (infoWrapper.classList.contains('info-inactive')){
        infoWrapper.classList.remove('info-inactive');
        button.textContent ="Hide: instrukcje do sprzątania";
    }
    else{
        infoWrapper.classList.add('info-inactive');
        button.textContent ="Show: instrukcje do sprzątania";
    }
})

let date=new Date(),
currYear=date.getFullYear(),
currMonth=date.getMonth();

const months=["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"]
const randerCalendar = () => {
    let firstDayOfMonth=new Date(currYear, currMonth, 1).getDay(),
    lastDateOfMonth=new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayOfMonth=new Date(currYear, currMonth, lastDateOfMonth).getDay(),
    lastDateOfLastMonth=new Date(currYear, currMonth, 0).getDate();
    let liTag="";
    room1Counter=0;
    room2Counter=0;
    room3Counter=0;
    room4Counter=0;

    if (firstDayOfMonth==0)
    firstDayOfMonth=7;

    if (lastDayOfMonth==0)
    lastDayOfMonth=7;

    for (let i=firstDayOfMonth-1; i>0; i--){

        let room1=(new Date(currYear, currMonth-1, (lastDateOfLastMonth-i+1)).getTime()-new Date(2023, 0, 16).getTime())%(4*7*24*60*60*1000)==0
        || (new Date(currYear, currMonth-1, (lastDateOfLastMonth-i+1)).getTime()-new Date(2023, 4, 8).getTime())%(4*7*24*60*60*1000)==0? "num-1" : "",

        room2=(new Date(currYear, currMonth-1, (lastDateOfLastMonth-i+1)).getTime()-new Date(2023, 0, 23).getTime())%(4*7*24*60*60*1000)==0
        || (new Date(currYear, currMonth-1, (lastDateOfLastMonth-i+1)).getTime()-new Date(2023, 4, 15).getTime())%(4*7*24*60*60*1000)==0? "num-2" : "",

        room3=(new Date(currYear, currMonth-1, (lastDateOfLastMonth-i+1)).getTime()-new Date(2023, 0, 2).getTime())%(4*7*24*60*60*1000)==0
        || (new Date(currYear, currMonth-1, (lastDateOfLastMonth-i+1)).getTime()-new Date(2023, 4, 22).getTime())%(4*7*24*60*60*1000)==0? "num-3" : "",

        room4=(new Date(currYear, currMonth-1, (lastDateOfLastMonth-i+1)).getTime()-new Date(2023, 0, 9).getTime())%(4*7*24*60*60*1000)==0
        || (new Date(currYear, currMonth-1, (lastDateOfLastMonth-i+1)).getTime()-new Date(2023, 4, 29).getTime())%(4*7*24*60*60*1000)==0? "num-4" : "";

        if (room1!="" && room1Counter==0)
            room1Counter=6;
        else if(room1=="" & room1Counter!=0){
            room1Counter--;
            room1="num-1";
        }

        if (room2!="" && room2Counter==0)
            room2Counter=6;
        else if(room2=="" & room2Counter!=0){
            room2Counter--;
            room2="num-2";
        }
        if (room3!="" && room3Counter==0)
            room3Counter=6;
        else if(room3=="" & room3Counter!=0){
            room3Counter--;
            room3="num-3";
        }
        if (room4!="" && room4Counter==0)
            room4Counter=6;
        else if(room4=="" & room4Counter!=0){
            room4Counter--;
            room4="num-4";
        }

        liTag +=`<li class="inactive ${room1}${room2}${room3}${room4}">${lastDateOfLastMonth-i+1}</li>`;
    }

    for(let i=1; i<=lastDateOfMonth; i++){
        let isToday = i === date.getDate() && currMonth===new Date().getMonth()
                    && currYear===new Date().getFullYear()? "active" : "";


        let room1=(new Date(currYear, currMonth, i).getTime()-new Date(2023, 0, 16).getTime())%(4*7*24*60*60*1000)==0
        || (new Date(currYear, currMonth, i).getTime()-new Date(2023, 4, 8).getTime())%(4*7*24*60*60*1000)==0? "num-1" : "",

        room2=(new Date(currYear, currMonth, i).getTime()-new Date(2023, 0, 23).getTime())%(4*7*24*60*60*1000)==0
        || (new Date(currYear, currMonth, i).getTime()-new Date(2023, 4, 15).getTime())%(4*7*24*60*60*1000)==0? "num-2" : "",

        room3=(new Date(currYear, currMonth, i).getTime()-new Date(2023, 0, 2).getTime())%(4*7*24*60*60*1000)==0
        || (new Date(currYear, currMonth, i).getTime()-new Date(2023, 4, 22).getTime())%(4*7*24*60*60*1000)==0? "num-3" : "",

        room4=(new Date(currYear, currMonth, i).getTime()-new Date(2023, 0, 9).getTime())%(4*7*24*60*60*1000)==0
        || (new Date(currYear, currMonth, i).getTime()-new Date(2023, 4, 29).getTime())%(4*7*24*60*60*1000)==0? "num-4" : "";

        if (room1!="" && room1Counter==0)
            room1Counter=6;
        else if(room1=="" & room1Counter!=0){
            room1Counter--;
            room1="num-1";
        }

        if (room2!="" && room2Counter==0)
            room2Counter=6;
        else if(room2=="" & room2Counter!=0){
            room2Counter--;
            room2="num-2";
        }
        if (room3!="" && room3Counter==0)
            room3Counter=6;
        else if(room3=="" & room3Counter!=0){
            room3Counter--;
            room3="num-3";
        }
        if (room4!="" && room4Counter==0)
            room4Counter=6;
        else if(room4=="" & room4Counter!=0){
            room4Counter--;
            room4="num-4";
        }

        liTag +=`<li class=${isToday} ${room1}${room2}${room3}${room4}>${i}</li>`;
    }

    for (let i=lastDayOfMonth; i<7; i++){
        room1=room1Counter===0? "" : "num-1";
        room2=room2Counter===0? "" : "num-2";
        room3=room3Counter===0? "" : "num-3";
        room4=room4Counter===0? "" : "num-4";

        liTag +=`<li class="inactive ${room1}${room2}${room3}${room4}">${i -lastDayOfMonth+1}</li>`;
    }

    currentDate.innerText=`${months[currMonth]} ${currYear}`;
    daysTag.innerHTML=liTag;
}
randerCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth<0 || currMonth>11){
            date=new Date(currYear, currMonth);
            currYear=date.getFullYear();
            currMonth=date.getMonth();
        } else {
            date= new Date();
        }
        randerCalendar();
    });
});