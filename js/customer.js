

let customerList=[];

function readCustomerList(){
    fetch("json/customer.json")
    .then(res=>res.json())
    .then(data=>{
        customerList=data;
        laodCustomerData();        
    })
}

readCustomerList();

function laodCustomerData(){
    let tblCustomer=document.getElementById("tbl1");

    let body="";

    customerList.forEach((element,index)=>{
        body+=`
            <tr>
                <td>${element.id}</td>
                <td>${element.contact_number}</td>
                <td>${element.name}</td>
                
                <td>
                    <button class="btnEdit" onclick="editCustomer(${index})">Edit</button>
                    <button class="btnDelete" onclick="deleteCustomer(${index})">Delete</button>
                    <button class="btnOrder" onclick="displayOrder(${index})">Orders</button>
                </td>
            </tr>
        `
    })
    tblCustomer.innerHTML=body;
}


function displayAddCustomerForm(){
    document.getElementById("d4").style.display="block";
    document.getElementById("id").value=customerList.length+1

}
    

function addCustomer(){   
    let customerName=document.getElementById("name").value;
    let contactNumber=document.getElementById("contactNumber").value; 
    let customerId=customerList.length+1;   

    customerList.push({
        id:customerId,
        contact_number:contactNumber, 
        name:customerName,
    })        
    laodCustomerData();
    document.getElementById("d4").style.display="none";
}

function editCustomer(index){
    document.getElementById("d5").style.display="block";

    document.getElementById("idUpdate").value=customerList[index].id;
    document.getElementById("idUpdate").disabled=true;
    document.getElementById("nameUpdate").value=customerList[index].name;
    document.getElementById("contactNumberUpdate").value=customerList[index].contact_number;      
}

function updateCustomer(){    

    let updateId=parseInt(document.getElementById("idUpdate").value);
    let updateName=document.getElementById("nameUpdate").value;
    let updateContactNumber=document.getElementById("contactNumberUpdate").value;  
    
    customerList.forEach((element,index)=>{     

        if(element.id===updateId){       
            customerList[index]={
                id:updateId,
                contact_number:updateContactNumber,           
                name:updateName,  
            }                             
        }
    })  
    laodCustomerData();
    document.getElementById("d5").style.display="none";  
    
}

function deleteCustomer(index){
    alert("do you want delete "+customerList[index].name)
    customerList.splice(index,1);
    laodCustomerData();  
}

let orderList=[];

function readOrderList(){
    fetch("json/orders.json")
    .then(res=>res.json())
    .then(data=>{
        orderList=data;              
    })
}  
readOrderList();

function displayOrder(index){  
        let cusId=customerList[index].id;
        getOrders(cusId);
           
}   
function getOrders(cusId){
   for(let i=0;i<orderList.length;i++){
        if(orderList[i].customerId==cusId){
            let obj=orderList[i];
            loadOrder(obj);
        }      
    }    
}

function loadOrder(obj){
    let displayOrder=document.getElementById("d6");
    let body="";
    obj.itemList.forEach(element=>{
        body+=`
            <table>
                <tr>
                    <td>${element.itemCode}</td>
                    <td>${element.numberOfItems}</td>
                </tr>
            </table>
        `
    }) 
    displayOrder.innerHTML=body;   
}    

let foodList=[];

function readFoodList(){
    fetch("json/food.json")
    .then(res=>res.json())
    .then(data=>{
        foodList=data;          
    })   
}

readFoodList();

function foodName(itemCode){
    foodList.forEach((element,index)=>{
        if(element.itemCode==itemCode){
            return foodList[index].itemName;
        }
    })
}

