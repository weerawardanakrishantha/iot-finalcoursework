
let burgerList=[];

function readBurgerList(){
    fetch("json/burgers.json")
    .then(res=>res.json())
    .then(data=>{
        burgerList=data;
        laodBurgerData();
    })
}

readBurgerList();

function laodBurgerData(){
    let tblBurger=document.getElementById("tbl1");

    let body="";

    burgerList.forEach((element,index)=>{
        body+=`
            <tr>
                <td>${element.itemCode}</td>
                <td>${element.itemName}</td>
                <td>${element.price}</td>
                <td>${element.discount}</td>
                <td>${element.expiry}</td>
                <td>
                    <button class="btnEdit" onclick="edit(${index})">Edit</button>
                    <button class="btnDelete" onclick="deleteBurger(${index})">Delete</button>
                </td>
            </tr>
        `
    })
    tblBurger.innerHTML=body;
}

function displayAddBurgerForm(){
    document.getElementById("d4").style.display="block";
}

function addBurger(){
    let burgerCode=document.getElementById("code").value;
    let burgerName=document.getElementById("name").value;
    let burgerPrice=document.getElementById("price").value;
    let burgerDiscount=document.getElementById("discount").value;
    let burgerExpiryDate=document.getElementById("expiryDate").value;

    burgerList.push({
        itemCode:burgerCode,
        itemName:burgerName,
        price:burgerPrice,
        discount:burgerDiscount,
        expiry:burgerExpiryDate
    })
    laodBurgerData();
    document.getElementById("d4").style.display="none";
}

function edit(index){
    document.getElementById("d5").style.display="block";

    document.getElementById("codeUpdate").value=burgerList[index].itemCode;
    document.getElementById("nameUpdate").value=burgerList[index].itemName;
    document.getElementById("priceUpdate").value=burgerList[index].price;
    document.getElementById("discountUpdate").value=burgerList[index].discount;
    document.getElementById("expiryDateUpdate").value=burgerList[index].expiry;    
}

function updateBurger(){
    let updateCode=document.getElementById("codeUpdate").value;
    let updateName=document.getElementById("nameUpdate").value;
    let updatePrice=document.getElementById("priceUpdate").value;
    let updateDiscount=document.getElementById("discountUpdate").value;
    let updateExpiryDate=document.getElementById("expiryDateUpdate").value;

    burgerList.forEach((element,index)=>{
        if(element.itemCode===updateCode){
            burgerList[index]={
                itemCode:updateCode,
                itemName:updateName,
                price:updatePrice,
                discount:updateDiscount,
                expiry:updateExpiryDate
            }
        }
    })  
    laodBurgerData();
    document.getElementById("d5").style.display="none";  
}

function deleteBurger(index){
     alert("do you want delete "+burgerList[index].itemName)
     burgerList.splice(index,1);
     laodBurgerData();  
}



