const check = () => {
     let a = +document.getElementById("year").value;
     let checkRusult = false;
     if (a % 4 == 0 && a % 100 !== 0) {
        checkRusult = true;
      }
    
      if (a % 100 === 0 && a % 400 == 0) {
        checkRusult = true;
      }
      if (checkRusult) {
        alert (a+" là năm nhuận");
      } else {
        alert (a +" không phải năm nhuận");
      }
    }
             
