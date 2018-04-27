/*

   Author:   David Kempke
   Date:    04/26/18 

   Filename: report.js



   Functions List:

   initPage()
      Initializes the contents of the Web page

   testLength()
      Tests a field for its length

   testPattern()
      Tests a field for its pattern

   validateForm
      Validates a Web form

   calcRow
      Calculates the costs within one row of the travel report

   calcTotal
      Calculates the total cost of the travel

   upDate
      Updates the total travel cost
*/
window.onload = initPage;


function initPage() {
   var dataFields = new Array();
   var allInputs = document.getElementsByTagName("input");

   for (var i=0; i < allInputs.length; i++) {
      if (allInputs[i].className == "expenseEntry") dataFields.push(allInputs[i]);
   }

   for (var i=0; i < dataFields.length; i++) {
      dataFields[i].onblur = update;
   }

   document.forms[0].onsubmit = validateForm;
}

function testLength(field) {
   if (field.value.length == 0) {
      field.style.backgroundColor="yellow";
      return false;
   } else {
      field.style.backgroundColor="white";
      return true;
   }
}

function testPattern(field, regx) {
   if (regx.test(field.value)==false) {
      field.style.backgroundColor="yellow";
      field.style.color="red";
      return false;
   } else {
      field.style.backgroundColor="white";
      field.style.color="black";
      return true;
   }
}


function validateForm() {
   isValid = true;
   dlform = document.forms[0];

   if (testLength(dlform.lname)==false) isValid=false;
   if (testLength(dlform.fname)==false) isValid=false;
   if (testLength(dlform.address)==false) isValid=false;
   if (testLength(dlform.summary)==false) isValid=false;

   if (testPattern(dlform.account,/^ACT\d{6}$/)==false) isValid=false;
   if (testPattern(dlform.department,/^DEPT\d{3}$/)==false) isValid=false;
   if (testPattern(dlform.project,/^PROJ\d{5}$/)==false) isValid=false;
   if (testPattern(dlform.ssn,/^\d{9}$|^\d{3}-\d{2}-\d{4}$/)==false) isValid=false;

   if (isValid == false) {
      alert("Please fill out all required fields in the proper format");
   }

   return isValid;
}

function calcRow(row) {
   dlform = document.forms[0];

   travel = parseFloat(dlform.elements["travel"+row].value);
   lodge = parseFloat(dlform.elements["lodge"+row].value);
   meal = parseFloat(dlform.elements["meal"+row].value);
   return travel+lodge+meal;
}

function calcTotal() {
   totalExp=0;
   for (i=1;i<=4;i++) {
      totalExp += calcRow(i);
   }
   return totalExp;
}

function update() {
   dlform = document.forms[0];
   numRegExp = /^\d*(\.\d{0,2})?$/;

   if (numRegExp.test(this.value)) {
      this.value=parseFloat(this.value).toFixed(2);
      for (i=1; i<=4; i++) {
         dlform.elements["sub"+i].value=calcRow(i).toFixed(2);
      }
      dlform.elements["total"].value=calcTotal().toFixed(2);
   } else {
      alert("Invalid currency value");
      this.value="0.00";
      this.focus();
  }
}

