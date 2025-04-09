
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
                <td>${element.itemCode}</td>
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
        itemCode:submarineCode,
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

    document.getElementById("codeUpdateSubmarine").value=submarineList[index].itemCode;
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
        if(element.itemCode===updateCodeSubmarine){           
            submarineList[index]={
                itemCode:updateCodeSubmarine,
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
                <td>${element.itemCode}</td>
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
        itemCode:friesCode,
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

    document.getElementById("codeUpdateFries").value=friesList[index].itemCode;
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
        if(element.itemCode===updateCodeFries){           
            friesList[index]={
                itemCode:updateCodeFries,
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

let chickenList=[];

function readChickenList(){
    fetch("json/chicken.json")
    .then(res=>res.json())
    .then(data=>{
        chickenList=data;
        loadChickenData();
    })
}

readChickenList();

function loadChickenData(){
    let tblChicken=document.getElementById("tbl5");

    let body="";

    chickenList.forEach((element,index)=>{
        body+=`
            <tr>
                <td>${element.itemCode}</td>
                <td>${element.itemName}</td>
                <td>${element.price}</td>
                <td>${element.discount}</td>
                <td>${element.expiry}</td>
                <td>
                    <button class="btnEdit" onclick="editChicken(${index})">Edit</button>
                    <button class="btnDelete" onclick="deleteChicken(${index})">Delete</button>
                </td>
            </tr>
        `
    })
    tblChicken.innerHTML=body;
}

function displayAddChickenForm(){
    document.getElementById("d20").style.display="block";
}

function addChicken(){
    let chickenCode=document.getElementById("codeChicken").value;
    let chickenName=document.getElementById("nameChicken").value;
    let chickenPrice=document.getElementById("priceChicken").value;
    let chickenDiscount=document.getElementById("discountChicken").value;
    let chickenExpiryDate=document.getElementById("expiryDateChicken").value;
    
    chickenList.push({
        itemCode:chickenCode,
        itemName:chickenName,
        price:chickenPrice,
        discount:chickenDiscount,
        expiry:chickenExpiryDate
    })
    loadChickenData();
    document.getElementById("d20").style.display="none";
}

function editChicken(index){
    document.getElementById("d21").style.display="block";
    document.getElementById("codeUpdateChicken").disabled=true;

    document.getElementById("codeUpdateChicken").value=chickenList[index].itemCode;
    document.getElementById("nameUpdateChicken").value=chickenList[index].itemName;
    document.getElementById("priceUpdateChicken").value=chickenList[index].price;
    document.getElementById("discountUpdateChicken").value=chickenList[index].discount;
    document.getElementById("expiryDateUpdateChicken").value=chickenList[index].expiry;    
}

function updateChicken(){
    let updateCodeChicken=document.getElementById("codeUpdateChicken").value;
    let updateNameChicken=document.getElementById("nameUpdateChicken").value;
    let updatePriceChicken=document.getElementById("priceUpdateChicken").value;
    let updateDiscountChicken=document.getElementById("discountUpdateChicken").value;
    let updateExpiryDateChicken=document.getElementById("expiryDateUpdateChicken").value;
    
    chickenList.forEach((element,index)=>{
        if(element.itemCode===updateCodeChicken){           
            chickenList[index]={
                itemCode:updateCodeChicken,
                itemName:updateNameChicken,
                price:updatePriceChicken,
                discount:updateDiscountChicken,
                expiry:updateExpiryDateChicken
            }
        }
    })  
    loadChickenData();
    document.getElementById("d21").style.display="none";  
}

function deleteChicken(index){
    alert("do you want delete "+chickenList[index].itemName)
    chickenList.splice(index,1);
    loadChickenData();  
}

//chicken

//beverages

let beveragesList=[];

function readBeveragesList(){
    fetch("json/beverages.json")
    .then(res=>res.json())
    .then(data=>{
        beveragesList=data;
        loadBeveragesData();
    })
}

readBeveragesList();

function loadBeveragesData(){
    let tblBeverages=document.getElementById("tbl6");

    let body="";

    beveragesList.forEach((element,index)=>{
        body+=`
            <tr>
                <td>${element.itemCode}</td>
                <td>${element.itemName}</td>
                <td>${element.price}</td>
                <td>${element.discount}</td>
                <td>${element.expiry}</td>
                <td>
                    <button class="btnEdit" onclick="editBeverages(${index})">Edit</button>
                    <button class="btnDelete" onclick="deleteBeverages(${index})">Delete</button>
                </td>
            </tr>
        `
    })
    tblBeverages.innerHTML=body;
}

function displayAddBeveragesForm(){
    document.getElementById("d24").style.display="block";
}

function addBeverage(){
    let beverageCode=document.getElementById("codeBeverage").value;
    let beverageName=document.getElementById("nameBeverage").value;
    let beveragePrice=document.getElementById("priceBeverage").value;
    let beverageDiscount=document.getElementById("discountBeverage").value;
    let beverageExpiryDate=document.getElementById("expiryDateBeverage").value;
    
    beveragesList.push({
        itemCode:beverageCode,
        itemName:beverageName,
        price:beveragePrice,
        discount:beverageDiscount,
        expiry:beverageExpiryDate
    })
    loadBeveragesData();
    document.getElementById("d24").style.display="none";
}

function editBeverages(index){
    document.getElementById("d25").style.display="block";
    document.getElementById("codeUpdateBeverage").disabled=true;

    document.getElementById("codeUpdateBeverage").value=beveragesList[index].itemCode;
    document.getElementById("nameUpdateBeverage").value=beveragesList[index].itemName;
    document.getElementById("priceUpdateBeverage").value=beveragesList[index].price;
    document.getElementById("discountUpdateBeverage").value=beveragesList[index].discount;
    document.getElementById("expiryDateUpdateBeverage").value=beveragesList[index].expiry;    
}

function updateBeverages(){
    let updateCodeBeverage=document.getElementById("codeUpdateBeverage").value;
    let updateNameBeverage=document.getElementById("nameUpdateBeverage").value;
    let updatePriceBeverage=document.getElementById("priceUpdateBeverage").value;
    let updateDiscountBeverage=document.getElementById("discountUpdateBeverage").value;
    let updateExpiryDateBeverage=document.getElementById("expiryDateUpdateBeverage").value;
    
    beveragesList.forEach((element,index)=>{
        if(element.itemCode===updateCodeBeverage){           
            beveragesList[index]={
                itemCode:updateCodeBeverage,
                itemName:updateNameBeverage,
                price:updatePriceBeverage,
                discount:updateDiscountBeverage,
                expiry:updateExpiryDateBeverage
            }
        }
    })  
    loadBeveragesData();
    document.getElementById("d25").style.display="none";  
}

function deleteBeverages(index){
    alert("do you want delete "+beveragesList[index].itemName)
    beveragesList.splice(index,1);
    loadBeveragesData();  
}