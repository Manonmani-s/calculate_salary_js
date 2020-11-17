let data = document.getElementById('data');

function calculatesalary()
{
    let day=parseInt(document.getElementById('dayNumber').value);
    salary(day);
}


 function salary(d)
{
   
    switch(d){
                
        case 1:
            display.innerHTML =`Calculated salary from Monday in $ : ${(4+6+8+10+2)*10}`;
            break;
        case 2:
            display.innerHTML =`Calculated salary from Tuesday in $ :${(6+8+10+2)*10}`;
            break;
        case 3:
            display.innerHTML =`Calculated salary from Wednesday in $ :${(8+10+2)*10}`;
            break;
        case 4:
            display.innerHTML =`Calculated salary from Thursday in $ :${(10+2)*10}`;
            break;
        
        case 5:
            display.innerHTML =`Calculated salary from Friday in $ :${(2)*10}`;
            break;
        case 6:
            display.innerHTML =`Calculated salary from Saturday in $ :${(2)*10}`;
            break;
        case 7:
            display.innerHTML =`No earnings on sunday`;
            break;
        default:
            display.innerHTML =`Enter the proper Days`;

    }
} 

//alternative if..else 


/*  function salary(d)
 {
  
      if(d==1)
    {   display.innerHTML =`Calculated salary from Monday in $ : ${(4+6+8+10+2)*10}`;}
        else if(d==2)
            { display.innerHTML =`Calculated salary from Tuesday in $ :${(6+8+10+2)*10}`;}
            else if(d==3)
            { display.innerHTML =`Calculated salary from Wednesday in $ :${(8+10+2)*10}`;}
                else if(d==4)
                    {display.innerHTML =`Calculated salary from Thursday in $ :${(10+2)*10}`;}
                    else if(d==5)
                    {display.innerHTML =`Calculated salary from Friday in $ :${(2)*10}`;}
                        else if(d==6)
                        display.innerHTML =`Calculated salary from Saturday in $ :${(2)*10}`;
                            else if (d==7)
                            display.innerHTML =`No earnings on sunday`;
                                   else
                                    display.innerHTML =`Enter the proper Days`;
} */
 