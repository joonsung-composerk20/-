const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const dMin = date.getMinutes();
    const dHr = date.getHours();
    const dSec = date.getSeconds();

    clockTitle.innerText =  `${dHr < 10 ? `0${dHr}` : dHr}:${
        dMin < 10 ? `0${dMin}` : dMin
    }:${dSec < 10 ? `0${dSec}` : dSec}`;


}

function alertSch(dHr,dMin){
    switch(date.getDay()){
        case 1:
            if (dHr==8){
                if (dMin==55){
                    alert("alertSch.ALERT:\n  아침조회");
                    }
                }
            else if (dHr==9){
                if (dMin==10){
                    alert("alertSch.ALERT:\n  국어");
                    }
            }
            else if (dHr==10){
                if (dMin==5){
                    alert("alertSch.ALERT:\n  수학");
                    }
            }
            else if (dHr==11){
                if (dMin==0){
                    alert("alertSch.ALERT:\n  진로");
                    }
            }
            else if (dHr==11){
                if (dMin==55){
                    alert("alertSch.ALERT:\n  중국어");
                    }
            }
            else if (dHr==13){
                if (dMin==40){
                    alert("alertSch.ALERT:\n  역사");
                    }
            }
            else if (dHr==14){
                if (dMin==35){
                    alert("alertSch.ALERT:\n  기가");
                }
            }
            break;
        case 2:
            alert("Today is Tuseday!\nGet into Zoom Classes now.");
            if (dHr==8){
                if (dMin==55){
                    alert("alertSch.ALERT:\n  아침조회");
                    }
                }
            else if (dHr==9){
                if (dMin==10){
                    alert("alertSch.ALERT:\n  영어");
                    }
            }
            else if (dHr==10){
                if (dMin==5){
                    alert("alertSch.ALERT:\n  과학");
                    }
            }
            else if (dHr==11){
                if (dMin==0){
                    alert("alertSch.ALERT:\n  체육");
                    }
            }
            else if (dHr==11){
                if (dMin==55){
                    alert("alertSch.ALERT:\n  도덕");
                    }
            }
            else if (dHr==13){
                if (dMin==40){
                    alert("alertSch.ALERT:\n  중국어");
                    }
            }
            else if (dHr==14){
                if (dMin==35){
                    alert("alertSch.ALERT:\n  스활");
                    }                                
            } 
            else if (dHr==15){
                if (dMin==25){
                    alert("alertSch.ALERT:\n  수학");
                    }
            }
            break;
        case 3:
            if (dHr==8){
                if (dMin==55){
                    alert("alertSch.ALERT:\n  아침조회");
                    }
                }
            else if (dHr==9){
                if (dMin==10){
                    alert("alertSch.ALERT:\n  국어");
                    }
            }
            else if (dHr==10){
                if (dMin==5){
                    alert("alertSch.ALERT:\n  과학");
                    }
            }
            else if (dHr==11){
                if (dMin==0){
                    alert("alertSch.ALERT:\n  수학");
                    }
            }
            else if (dHr==11){
                if (dMin==55){
                    alert("alertSch.ALERT:\n  역사");
                    }
            }
            else if (dHr==13){
                if (dMin==40){
                    alert("alertSch.ALERT:\n  영어");
                    }
            }
            else if (dHr==14){
                if (dMin==35){
                    alert("alertSch.ALERT:\n  기가");
                    }                                
            } 
            break;
        case 4:
            if (dHr==8){
                if (dMin==55){
                    alert("alertSch.ALERT:\n  아침조회");
                    }
                }
            else if (dHr==9){
                if (dMin==10){
                    alert("alertSch.ALERT:\n  기가");
                    }
            }
            else if (dHr==10){
                if (dMin==5){
                    alert("alertSch.ALERT:\n  중국어");
                    }
            }
            else if (dHr==11){
                if (dMin==0){
                    alert("alertSch.ALERT:\n  역사");
                    }
            }
            else if (dHr==11){
                if (dMin==55){
                    alert("alertSch.ALERT:\n  과학");
                    }
            }
            else if (dHr==13){
                if (dMin==40){
                    alert("alertSch.ALERT:\n  국어");
                    }
            }
            else if (dHr==14){
                if (dMin==35){
                    alert("alertSch.ALERT:\n  체육");
                    }                                
            } 
            break;
        case 5:
            if (dHr==8){
                if (dMin==55){
                    alert("alertSch.ALERT:\n  아침조회");
                    }
                }
            else if (dHr==9){
                if (dMin==10){
                    alert("alertSch.ALERT:\n  수학");
                    }
            }
            else if (dHr==10){
                if (dMin==5){
                    alert("alertSch.ALERT:\n  국어");
                    }
            }
            else if (dHr==11){
                if (dMin==0){
                    alert("alertSch.ALERT:\n  영어");
                    }
            }
            else if (dHr==11){
                if (dMin==55){
                    alert("alertSch.ALERT:\n  도덕");
                    }
            }
            else if (dHr==13){
                if (dMin==40){
                    alert("alertSch.ALERT:\n  과학");
                    }
            }
            else if (dHr==14){
                if (dMin==35){
                    alert("alertSch.ALERT:\n  체육");
                    }                                
            }     
            break;
        }
    }    

function init() {
    getTime();

    setInterval(init, 1000);
}

function all(){
    init();
    alertSch(dHr,dMin);
    setInterval(all, 1000);
}

all();
