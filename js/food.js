
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
    document.getElementById("codeUpdate").disabled=true;

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
    document.getElementById("codeUpdateSubmarine").disabled=true;

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

function readFriesList(){
    fetch("json/fries.json")
    .then(res=>res.json())
    .then(data=>{
        friesList=data;
        loadFriesData();
    })
}

readFriesList();

function loadFriesData(){
    let tblFries=document.getElementById("tbl3");

    let body="";

    friesList.forEach((element,index)=>{
        body+=`
            <tr>
                <td>${element.itemCod}</td>
                <td>${element.itemName}</td>
                <td>${element.price}</td>
                <td>${element.discount}</td>
                <td>${element.expiry}</td>
                <td>
                    <button class="btnEdit" onclick="editFries(${index})">Edit</button>
                    <button class="btnDelete" onclick="deleteFries(${index})">Delete</button>
                </td>
            </tr>
        `
    })
    tblFries.innerHTML=body;
}

function displayAddFriesForm(){
    document.getElementById("d12").style.display="block";
}

function addFries(){
    let friesCode=document.getElementById("codeFries").value;
    let friesName=document.getElementById("nameFries").value;
    let friesPrice=document.getElementById("priceFries").value;
    let friesDiscount=document.getElementById("discountFries").value;
    let friesExpiryDate=document.getElementById("expiryDateFries").value;
    
    friesList.push({
        itemCod:friesCode,
        itemName:friesName,
        price:friesPrice,
        discount:friesDiscount,
        expiry:friesExpiryDate
    })
    loadFriesData();
    document.getElementById("d12").style.display="none";
}

function editFries(index){
    document.getElementById("d13").style.display="block";
    document.getElementById("codeUpdateFries").disabled=true;

    document.getElementById("codeUpdateFries").value=friesList[index].itemCod;
    document.getElementById("nameUpdateFries").value=friesList[index].itemName;
    document.getElementById("priceUpdateFries").value=friesList[index].price;
    document.getElementById("discountUpdateFries").value=friesList[index].discount;
    document.getElementById("expiryDateUpdateFries").value=friesList[index].expiry;    
}
function updateFries(){
    let updateCodeFries=document.getElementById("codeUpdateFries").value;
    let updateNameFries=document.getElementById("nameUpdateFries").value;
    let updatePriceFries=document.getElementById("priceUpdateFries").value;
    let updateDiscountFries=document.getElementById("discountUpdateFries").value;
    let updateExpiryDateFries=document.getElementById("expiryDateUpdateFries").value;
    
    friesList.forEach((element,index)=>{
        if(element.itemCod===updateCodeFries){           
            friesList[index]={
                itemCod:updateCodeFries,
                itemName:updateNameFries,
                price:updatePriceFries,
                discount:updateDiscountFries,
                expiry:updateExpiryDateFries
            }
        }
    })  
    loadFriesData();
    document.getElementById("d13").style.display="none";  
}

function deleteFries(index){
    alert("do you want delete "+friesList[index].itemName)
    friesList.splice(index,1);
    loadFriesData();  
}
//fries

//pasta
let pastaList=[];

function readPastaList(){
    fetch("json/pasta.json")
    .then(res=>res.json())
    .then(data=>{
        pastaList=data;
        loadPastaData();
    })
}

readPastaList();

function loadPastaData(){
    let tblPasta=document.getElementById("tbl4");

    let body="";

    pastaList.forEach((element,index)=>{
        body+=`
            <tr>
                <td>${element.itemCode}</td>
                <td>${element.itemName}</td>
                <td>${element.price}</td>
                <td>${element.discount}</td>
                <td>${element.expiry}</td>
                <td>
                    <button class="btnEdit" onclick="editPasta(${index})">Edit</button>
                    <button class="btnDelete" onclick="deletePasta(${index})">Delete</button>
                </td>
            </tr>
        `
    })
    tblPasta.innerHTML=body;
}

function displayAddPastaForm(){
    document.getElementById("d16").style.display="block";
}

function addPasta(){
    let pastaCode=document.getElementById("codePasta").value;
    let pastaName=document.getElementById("namePasta").value;
    let pastaPrice=document.getElementById("pricePasta").value;
    let pastaDiscount=document.getElementById("discountPasta").value;
    let pastaExpiryDate=document.getElementById("expiryDatePasta").value;
    
    pastaList.push({
        itemCode:pastaCode,
        itemName:pastaName,
        price:pastaPrice,
        discount:pastaDiscount,
        expiry:pastaExpiryDate
    })
    loadPastaData();
    document.getElementById("d16").style.display="none";
}

function editPasta(index){
    document.getElementById("d17").style.display="block";
    document.getElementById("codeUpdatePasta").disabled=true;

    document.getElementById("codeUpdatePasta").value=pastaList[index].itemCode;
    document.getElementById("nameUpdatePasta").value=pastaList[index].itemName;
    document.getElementById("priceUpdatePasta").value=pastaList[index].price;
    document.getElementById("discountUpdatePasta").value=pastaList[index].discount;
    document.getElementById("expiryDateUpdatePasta").value=pastaList[index].expiry;    
}

function updatePasta(){
    let updateCodePasta=document.getElementById("codeUpdatePasta").value;
    let updateNamePasta=document.getElementById("nameUpdatePasta").value;
    let updatePricePasta=document.getElementById("priceUpdatePasta").value;
    let updateDiscountPasta=document.getElementById("discountUpdatePasta").value;
    let updateExpiryDatePasta=document.getElementById("expiryDateUpdatePasta").value;
    
    pastaList.forEach((element,index)=>{
        if(element.itemCode===updateCodePasta){           
            pastaList[index]={
                itemCode:updateCodePasta,
                itemName:updateNamePasta,
                price:updatePricePasta,
                discount:updateDiscountPasta,
                expiry:updateExpiryDatePasta
            }
        }
    })  
    loadPastaData();
    document.getElementById("d17").style.display="none";  
}

function deletePasta(index){
    alert("do you want delete "+pastaList[index].itemName)
    pastaList.splice(index,1);
    loadPastaData();  
}

//pasta

//chicken


//chicken


