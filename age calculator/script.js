let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let age = document.getElementById("age");

function CalculateAge(){
    let BirthDate = new Date(userInput.value);

    let d1 = BirthDate.getDate();
    let m1 = BirthDate.getMonth() + 1;
    let y1 = BirthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() +1;
    let y2 = today.getFullYear();

    let d3,m3,y3;

    y3 = y2-y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12+ m2 - m1;
    }
    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = getDaysinMonth(y1,m1) + d2 - d1;
    }
    if (m3 < 0){
        m3 = 11;
        y3--;
    }
    age.innerHTML=`you are ${y3} years ${m3} months ${d3} days old`;
}

function getDaysinMonth(year,month){
    return new Date(year, month, 0).getDate();
}