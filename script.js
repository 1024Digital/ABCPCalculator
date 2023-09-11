function bodyFatTwo() {
    let absOne = document.getElementById("absThree").value;
    let sizeOne = document.getElementById("weightTwo").value;
    let yrs = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    /* -26.97 - (0.12 * size) + (1.99 * abs) */
  
    if (gender === "male") {
      cal2 = -26.97 - (0.12 * sizeOne) + (1.99 * absOne);
      document.getElementById("result3").innerHTML = cal2.toFixed(2);
      if ((cal2 < 20) && (yrs <= 21))
        document.getElementById("result3").innerHTML = cal2.toFixed(2) + '<span style="color:green">  PASSED</span>';
      else if ((cal2 < 22) && (yrs >= 22 && yrs <= 27))
        document.getElementById("result3").innerHTML = cal2.toFixed(2) + '<span style="color:green">  PASSED</span>';
      else if ((cal2 < 24) && (yrs >= 28 && yrs <= 39))
        document.getElementById("result3").innerHTML = cal2.toFixed(2) + '<span style="color:green">  PASSED</span>';
      else if ((cal2 < 26) && (yrs >= 40))
        document.getElementById("result3").innerHTML = cal2.toFixed(2) + '<span style="color:green">  PASSED</span>';
      else
        document.getElementById("result3").innerHTML = cal2.toFixed(2) + '<span style="color:red">  FAILED</span>';
      document.getElementById("result3").style.fontSize = "x-large";
      document.getElementById("result3").style.textAlign = "center";
    //   document.gwtElementById("result").style.backgroundColor="lightblue";
  
  
    } else if (gender === "female") {
      cal2 = -9.15 - (0.015 * sizeOne) + (1.27 * absOne);
      document.getElementById("result3").innerHTML = cal2.toFixed(2);
      if ((cal2 < 30) && (yrs <= 21))
        document.getElementById("result3").innerHTML = cal2.toFixed(2) + '<span style="color:green">  PASSED</span>';
      else if ((cal2 < 32) && (yrs >= 22 && yrs <= 27))
        document.getElementById("result3").innerHTML = cal2.toFixed(2) + '<span style="color:green">  PASSED</span>';
      else if ((cal2 < 34) && (yrs >= 28 && yrs <= 39))
        document.getElementById("result3").innerHTML = cal2.toFixed(2) + '<span style="color:green">  PASSED</span>';
      else if ((cal2 < 36) && (yrs >= 40))
        document.getElementById("result3").innerHTML = cal2.toFixed(2) + '<span style="color:green">  PASSED</span>';
      else
        document.getElementById("result3").innerHTML = cal2.toFixed(2) + '<span style="color:red">  FAILED</span>';
      document.getElementById("result3").style.fontSize = "x-large";
      document.getElementById("result3").style.textAlign = "center";
  
    }
  
  }
  
  
  /*  Body Fat Standards:
  
   Age group: 17–20
      Male (% body fat): 20%
      Female (% body fat): 30%
          
   Age group: 21–27
     Male (% body fat): 22%
     Female (% body fat): 32%
       
   Age group: 28–39
     Male (% body fat): 24%
     Female (% body fat): 34%
       
   Age group: 40 and older
     Male (% body fat): 26%
     Female (% body fat): 36% 
       */
  /* 
  
       
       */