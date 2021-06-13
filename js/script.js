//HELP FUFNCTION
const $ = function(id){return document.getElementById(id)};
let topping_list=$('topping').getElementsByTagName('input');
let select_size= $('size');
let select_cheese=$('cheese');
let select_sauce=$('sauce');
let pizza_price=[select_size,select_cheese,select_sauce];
let pizza_check=null; check1=null;
let total1=0,total2=0;
//PIZZA OBJECT
class Pizza{
    constructor(size,price){
        this.size=size;
        this.price=price;}
}
const hand_tossed= new Pizza(['Small','Medium','Large'],['$9.99','$12.99','$14.99'])
const thin_crust = new Pizza(['Medium','Large'],['$11.99','$13.99']);
const new_york   = new Pizza(['Larget','Extra Large'],['$16.99','$19.99']);
const gluten_free= new Pizza(['Small'],['$10.99']);
//-------------------------------FUNCTIONS For LOCATION SECTION---------------------------------------
const validate_fname = function(){
    let regName = /^[a-zA-Z ]{2,30}$/;
    if (regName.test($("fname").value) && $("fname").value !== " ") {
        ($("fname").style.backgroundColor = "#ffffff");
        return true;
      } else {
        ($("fname").className += " invalid");
        return false;
      }
};
const validate_lname = function(){
    let regName = /^[a-zA-Z ]{2,30}$/;
    if (regName.test($("lname").value) && $("lname").value !== "") {
        ($("lname").style.backgroundColor = "#ffffff");
        return true;
      } else {
        ($("lname").className += " invalid");
        return false;
      }
};
const validate_street = function(){
    let regStreet = /^[a-zA-Z0-9\s,'-]*$/, result;
    if (regStreet.test($("street").value) && $("street").value !== "") {
        ($("street").style.backgroundColor = "#ffffff");   
        return true;
    } else {
      ($("street").className += " invalid");
      return false;
    }
};
const validate_apt = function (){
    let regNumber = /^[a-zA-Z0-9\s,'-]*$/;
    //window.console.log("number",number.value);
    if (regNumber.test($("number").value)) {
        ($("number").style.backgroundColor = "#ffffff");   
        return true;
    } else {
      ($("number").className += " invalid");
      return false;
    }
};
const validate_city = function (){
    let regCity = /^[a-zA-Z ]{2,30}$/;
    //window.console.log("city",city.value);
    if (regCity.test($("city").value)&& $("city").value !== "") {
        ($("city").style.backgroundColor = "#ffffff"); 
        return true;
    } else {
      ($("city").className += " invalid");
        return false;
    }
};
const validate_state = function (){
    let regState =/^(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NB|NC|ND|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)$/i;
    //let regState = /^[A-Z]{2}$/;
    //window.console.log("state",state.value);
    if (regState.test($("state").value) && $("state").value !== "") {
        ($("state").style.backgroundColor = "#ffffff");  
        return true;
    } else {
      ($("state").className += " invalid");
      return false;
    }
};
const validate_zip = function (){
    let regZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    //window.console.log("zip",zip.value);
    if (regZip.test($('zip').value) && $('zip').value !== "") {
        ($('zip').style.backgroundColor = "#ffffff"); 
        return true;
    } else {
      ($('zip').className += " invalid");
        return false;
    }
};
const validate_phone = function (){
    let regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //window.console.log("phone",phone.value);
    if (regPhone.test($('phone').value)&& $('phone').value !== "") {
        ($('phone').style.backgroundColor = "#ffffff"); 
        return true;
    } else {
      ($('phone').className += " invalid");
        return false;
    }
};
const validate_mail = function (){
    let regMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //window.console.log("mail",mail.value);
    if (regMail.test($('mail').value)&& $('mail').value !== "") {
        ($('mail').style.backgroundColor = "#ffffff"); 
        return true;
    } else {
      (('mail').className += " invalid");
        return false;
    }
};
const validate_cardHolderName = function () {
    let regCreditName = /^[a-z A-Z]{2,30}$/
    if (regCreditName.test($('credit_name').value) && $('credit_name').value !== "") {
        ($('credit_name').style.backgroundColor = "#ffffff");
        return true;
      } else {
        ($('credit_name').className += " invalid");
        return false;
      }
};
const validate_cvc = function (){
    let regCvc = /^[0-9]{3}$/;
    if (regCvc.test($('cvc').value) && $('cvc').value !== "") {
        //window.console.log('cvc:'+cvc);
        ($('cvc').style.backgroundColor = "#ffffff");
        return check1 = true;
      } else {
        //window.console.log('CVCerre');
        ($('cvc').className += " invalid");
        return chec1k=false;
      }
        
};
const validate_month = function () {
    if ($("month").selectedIndex === 0) {
        window.alert("Please select the month and year");
        return false;
    }
    
  };
const validate_year = function () {
    if ($("year").selectedIndex === 0) {
        window.alert("Please select the month and year");
        return false;
    }
  };
const validate_cardNumber = function (value) {
    if (/[^0-9-\s]+/.test(value)) return false;
    let nCheck = 0,
      nDigit = 0,
      bEven = false,
      n;
    value = value.replace(/\D/g, "");
  
    for (n = value.length - 1; n >= 0; n--) {
      let cDigit = value.charAt(n);
      nDigit = parseInt(cDigit, 10);
      if (bEven) {
        if ((nDigit *= 2) > 9) {
          nDigit -= 9;
        }
      }
  
      nCheck += nDigit;
      bEven = !bEven;
    }
  
    return (nCheck % 10) === 0;
  }
//-------------------------------FUNCTIONS For Order SECTION---------------------------------------
//CREATE DROPDOWN MENU:PIZZA SIZE
const dropdown_Sizemenu = function(type){
    select_size.options.length=0;
    for (let item=0; item<type.size.length;item++){
        let new_ele=document.createElement('option');
        new_ele.setAttribute('value',type.price[item]);
        let new_text=document.createTextNode(type.size[item] +"-" +type.price[item]);
        new_ele.appendChild(new_text);
        document.getElementById('size').appendChild(new_ele);
    }
}
//CALCULATE TOTAL PRICE
const cal_total1 = function(){
    let total_price=0;
    for(let i=0; i<pizza_price.length; i++){
        let eachPrice=(pizza_price[i].value.slice(1));
        total_price += parseFloat(eachPrice);}
    return total_price
}
const cal_total2 = function(){
    let total_price=0;
    for (let i=0; i<topping_list.length;i++){
        if(topping_list[i].checked==true){
            window.console.log('check')
            total_price+= 0.99;}
    }
    return total_price;
}
//----------------FUNCTION FOR MULTIPLE PAGE-----------------------------------------
var currentTab = 0; // Current tab is set to be the first tab (0)
//showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Finished Building Pizza";
  }
  // ... and run a function that displays the correct step indicator:
}
function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) {window.alert("Please complete all of required fields");return false;}
    // Hide the current tab:
    if (n ==1 && validateForm()) {
        let prompt_answer=window.confirm("Are you sure you are done?");
        if(prompt_answer===true){
            x[currentTab].style.display = "none";
            // Increase or decrease the current tab by 1:
            currentTab = currentTab + n;
            // if you have reached the end of the form... :
            if (currentTab >= x.length) {
            //...the form gets submitted:
                document.getElementById("pizzaform").submit();
                return false;
            } else{// Otherwise, display the correct tab:
                //showTab(currentTab);
              }  
}   }
        
  }
  function validateForm(){
      let str=[];
      if(validate_fname()===false)      {alert("Please complete first name");}
      else if(validate_lname()===false) {alert("Please complete last name");}
      else if(validate_street()===false){alert("Please complete street address");}
      else if(validate_city() ===false) {alert("Please complete city");}
      else if(validate_state()===false) {alert("Please complete state");}
      else if(validate_zip() ===false)  {alert("Please complete 5 digit zip code ");}
      else if(validate_mail()===false)  {alert("Please complete email");} 
      else if(validate_phone()===false) {alert("Please complete phone");}
      else {return true;}
  }  

         
//---------------------------------WINDOW LOAD EVENT---------------------------------
window.addEventListener('load', () => {
    //LOCATION******************************************************************************/
    //NAME VALIDATAION

    $('fname').addEventListener('input',()=>{
        validate_fname();
    });
    $('lname').addEventListener('input',()=>{
        validate_lname();
    });
    //Address VALIDATTION
    $('street').addEventListener('input',()=>{
        validate_street();
    });
    //Atp. # Validation
    $('number').addEventListener('input',()=>{
        validate_apt();
    });
    //City Validation
    $('city').addEventListener('input',()=>{
        validate_city();
    });
    //State Validation
    $('state').addEventListener('input',()=>{
        validate_state();
    });
    //zip validation
    $('zip').addEventListener('input',()=>{
        validate_zip();
    });
    //phone validation
    $('phone').addEventListener('input',()=>{
        validate_phone();
    });
    //mail validation
    $('mail').addEventListener('input',()=>{
        validate_mail();
    });
    //ADDRESS OTHER TYPE FUNCTION
    $("address_type").addEventListener('change', () =>{
        if ($("address_type").selectedIndex == 6 ){
            console.log("here");
            $("address_type_other").style.display = "inline";
            $("address_type_other").nextElementSibling.style.display="inline-block";
        }
        else{
            $("address_type_other").style.display = "none";
            $("address_type_other").nextElementSibling.style.display="none";
        }});
    //pIZZA********************************************************************************/
    //RADIO BTN & DROPDOWN MENU: PIZZA CRUST/SIZE/PRICE
    let pizza_crust = document.getElementsByName("dough");
    for (let i=0; i<pizza_crust.length;i++){
        pizza_crust[i].addEventListener('change',function(){
            let val=this.value;
            if (val==="hand tossed"){
                dropdown_Sizemenu(hand_tossed);}
            else if (val==="thin crust"){
                dropdown_Sizemenu(thin_crust);}
            else if (val==="new york style"){
                dropdown_Sizemenu(new_york);}
            else if (val==="gluten free"){
                dropdown_Sizemenu(gluten_free);}
        });
    }
   //REMOVE DISABLED AFTER CHOOSING CRUST & SIZE
    select_size.addEventListener('click',()=>{
        if(select_size.value!=="0"){
            $('cheese').removeAttribute('disabled');
            $('sauce').removeAttribute('disabled');
            for(let i=0; i<topping_list.length;i++){
                 topping_list[i].removeAttribute('disabled');
                 topping_list[i].addEventListener('click',()=>{
                    total2 = cal_total2();
                    let t= total2+total1;
                    pizza_crust=true;
                    window.console.log(typeof(total2));
                    $('showprice').innerHTML=`&dollar; ${(t).toPrecision(4)}`;
                 });}
        }
    });
    //CALCULATE TOTAL PRICE
    pizza_price.forEach(element => {
        element.addEventListener('click',()=>{
            total1 =cal_total1();
            let t=(total1+total2);
            pizza_crust=true;
            window.console.log(total1,total2);
            $('showprice').innerHTML=`&dollar; ${(t).toPrecision(4)}`;
        });
    
    });
    //*----------------------------------------------Billing-------------------------------------------------
    //CHECKBOX: AUTOFILL SAME INFORMATION
    $('same_info').addEventListener('click',()=>{
        if($('same_info').checked){
            $('fname1').value = $('fname').value;
            $('lname1').value = $('lname').value;
            $('address_type1').value = $('address_type').value;
            $('address_type_other1').value = $('address_type_other').value;
            $('street1').value = $('street').value;
            $('number1').value = $('number').value;
            $('city1').value = $('city').value;
            $('state1').value =$('state').value;
            $('zip1').value = $('zip').value;
        }
        else{$('fname1').value ="";
            $('lname1').value ="";
            $('address_type1').value ="";
            $('address_type_other1').value = "";
            $('street1').value = "";
            $('number1').value = "";
            $('city1').value = "";
            $('state1').value ="";
            $('zip1').value = "";
        }
    })
    //BILLING LOCATION VALIDATION
    //NAME VALIDATAION
    $('fname1').addEventListener('input',()=>{
        validate_fname();
    });
    $('lname1').addEventListener('input',()=>{
        validate_lname();
    });
    //Address VALIDATTION
    $('street1').addEventListener('input',()=>{
        validate_street();
    });
    //Atp. # Validation
    $('number1').addEventListener('input',()=>{
        validate_apt();
    });
    //City Validation
    $('city1').addEventListener('input',()=>{
        validate_city();
    });
    //State Validation
    $('state1').addEventListener('input',()=>{
        validate_state();
    });
    //zip validation
    $('zip1').addEventListener('input',()=>{
        validate_zip();
    });
    //ADDRESS OTHER TYPE FUNCTION
    $("address_type1").addEventListener('change', () =>{
        if ($("address_type1").selectedIndex == 6 ){
            //console.log("here");
            $("address_type_other").style.display = "inline";
            $("address_type_other").nextElementSibling.style.display="inline-block";
        }
        else{
            $("address_type_other1").style.display = "none";
            $("address_type_other1").nextElementSibling.style.display="none";
        }
    });
    //BUTTON FINISH BUILDING PIZZA
    $('done').addEventListener('click',(e)=>{
        e.preventDefault();
        if(validateForm()){
            if(confirm('Are you sure that they’re done?'))
            $('tab2').style.display="block";
        }
    });
    //-----------------CREDIT CARD NUMBER VALIDATION------------------------------------------------
    //CARD NUMBER VALIDATION
    $("credit_number").addEventListener("blur", function() {
        let visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        let masterRegEx = /^(?:5[1-5][0-9]{14})$/;
        let americanRegEx = /^(?:3[47][0-9]{13})$/;
        if (visaRegEx.test($("credit_number").value)) {
            if (!validate_cardNumber($("credit_number").value)) {
                $("credit_number").className += " invalid";
                $('credit_numberP').innerHTML='Erro'
            } else {
                $("credit_number").style.backgroundColor = "yellow";
                return true;}
        } else if (masterRegEx.test($("credit_number").value)) {
            if (!validate_cardNumber($("credit_number").value)) {
                $("credit_number").className += " invalid";
                $('credit_numberP').innerHTML='Erro'
            } else {
                $("credit_number").style.backgroundColor = "yellow";
                return true;}
        } else if (americanRegEx.test($("credit_number").value)) {
            if (!validate_cardNumber($("credit_number").value)) {
                $("credit_number").className += " invalid";
                $('credit_numberP').innerHTML='Erro'
            } else {
                $("credit_number").style.backgroundColor = "yellow";
                return true;}
        } else {
            $("credit_number").className += " invalid";}
    });
    //CARD CVC VALIDATION
    $('cvc').addEventListener('input',()=>{
        validate_cvc();
    });
    //CARD MONTH/YEAR VALIDATAION
    $("month").addEventListener("change", validate_month);
    $("year").addEventListener("change", function() {
      validate_year;
    let d = new Date();
    let currentYear = d.getFullYear();
    let month = new Date().getMonth() + 1;
    let year = parseInt($("year").options[$("year").selectedIndex].value, 10);
    if (($("month").selectedIndex < month && currentYear === year) || (year < currentYear)) {
      window.alert("please re-enter date");
      $("month").selectedIndex = 0;
      $("year").selectedIndex = 0;
    }
  });
  
    
});//END OF WINDOW LOAD

