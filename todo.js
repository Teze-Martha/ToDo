const itemInput= document.getElementById('item');
const todoTimeInput= document.getElementById('Time');
const saveBtn= document.getElementById('save');
const tableBody= document.getElementById('tableBody');

//pick values to a given element
const getElementValue =(element)=>{
  return element.value;
}

//on button click
saveBtn.addEventListener("click",(event)=>{
   event.preventDefault();

  
 //pick value of the task name 
  
 const itemValue= getElementValue(itemInput);
 const todoTimeValue= getElementValue(todoTimeInput);

 const tableRow= document.createElement('tr');

 const itemTd= document.createElement('td');
 itemTd.innerHTML= itemValue;
 tableRow.appendChild(itemTd)
 
 const todoTimeTd= document.createElement('td');
 todoTimeTd.innerHTML= todoTimeValue;
 tableRow.appendChild(todoTimeTd)

 tableBody.appendChild(tableRow)
})