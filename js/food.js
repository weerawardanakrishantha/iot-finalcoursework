
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
                    <button class="btnEdit" onclick="editBurger(${index})">Edit</button>
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

function editBurger(index){
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

// submarine

let submarineList=[];

function readSubmarineList(){
    fetch("json/submarines.json")
    .then(res=>res.json())
    .then(data=>{
        submarineList=data;
        laodSubmarineData();
    })
}

readSubmarineList();

function laodSubmarineData(){
    let tblSubmarine=document.getElementById("tbl2");

    let body="";

    submarineList.forEach((element,index)=>{
        body+=`
            <tr>
                <td>${element.itemCod}</td>
                <td>${element.itemName}</td>
                <td>${element.price}</td>
                <td>${element.discount}</td>
                <td>${element.expiry}</td>
                <td>
                    <button class="btnEdit" onclick="editSubmarine(${index})">Edit</button>
                    <button class="btnDelete" onclick="deleteSubmarine(${index})">Delete</button>
                </td>
            </tr>
        `
    })
    tblSubmarine.innerHTML=body;
}

function displayAddSubmarineForm(){
    document.getElementById("d8").style.display="block";
}

function addSubmarine(){
    let submarineCode=document.getElementById("codeSubmarine").value;
    let submarineName=document.getElementById("nameSubmarine").value;
    let submarinePrice=document.getElementById("priceSubmarine").value;
    let submarineDiscount=document.getElementById("discountSubmarine").value;
    let submarineExpiryDate=document.getElementById("expiryDateSubmarine").value;
    
    submarineList.push({
        itemCod:submarineCode,
        itemName:submarineName,
        price:submarinePrice,
        discount:submarineDiscount,
        expiry:submarineExpiryDate
    })
    laodSubmarineData();
    document.getElementById("d8").style.display="none";
}

function editSubmarine(index){
    document.getElementById("d9").style.display="block";

    document.getElementById("codeUpdateSubmarine").value=submarineList[index].itemCod;
    document.getElementById("nameUpdateSubmarine").value=submarineList[index].itemName;
    document.getElementById("priceUpdateSubmarine").value=submarineList[index].price;
    document.getElementById("discountUpdateSubmarine").value=submarineList[index].discount;
    document.getElementById("expiryDateUpdateSubmarine").value=submarineList[index].expiry;    
}

function updateSubmarine(){
    let updateCodeSubmarine=document.getElementById("codeUpdateSubmarine").value;
    let updateNameSubmarine=document.getElementById("nameUpdateSubmarine").value;
    let updatePriceSubmarine=document.getElementById("priceUpdateSubmarine").value;
    let updateDiscountSubmarine=document.getElementById("discountUpdateSubmarine").value;
    let updateExpiryDateSubmarine=document.getElementById("expiryDateUpdateSubmarine").value;
    
    submarineList.forEach((element,index)=>{
        if(element.itemCod===updateCodeSubmarine){           
            submarineList[index]={
                itemCod:updateCodeSubmarine,
                itemName:updateNameSubmarine,
                price:updatePriceSubmarine,
                discount:updateDiscountSubmarine,
                expiry:updateExpiryDateSubmarine
            }
        }
    })  
    laodSubmarineData();
    document.getElementById("d9").style.display="none";  
}

function deleteSubmarine(index){
    alert("do you want delete "+submarineList[index].itemName)
    submarineList.splice(index,1);
    laodSubmarineData();  
}

//fries

let friesList=[];

