let order = document.querySelector(".formIn");
let btn = document.querySelector("#btn")
let userQtyList = document.querySelector(".addItem")
let clear = document.querySelector(".clear")
let invalid = document.querySelector(".invalid")
let productArray = []
let sendData = []
let count =0;

function mainClose(element) {
    let close = document.querySelector(".mainBar")
    close.style.dispaly = "block";
}


function online() {
    console.log(order.classList)
    order.classList.toggle("display")
   

    // userQtyList.addEventListener("click", userList)

}
function removeElement(e) {

    if(e.classList.contains("remove")){
      console.log(  e.parentElement.parentElement.remove())
    }

// let remove = document.querySelectorAll(".listItem")
//     for(i=0; i<remove.length; i++){
//         remove[i].addEventListener("click",function removeElement(e){
//             // e.currentTarget.style.background ="yellow"
//             let removeItems= e.currentTarget.remove();
          
//         //    console.log(removeItems)  

//             // console.log(e.currentTarget.remove())
//         },true)
//     }

     productArray = productArray.filter(removeSelectElement => removeSelectElement.id != e.id)
    //   console.log(productArray)
        
          
        
    
    

}



function calProductPrice(e) {

    let productPrice = {
        Wheet: 45, Rice: 55, Ragi: 60
    }
    let selectedQty = document.querySelector(".selectedQty").value
    let selectedProduct = document.querySelector(".selectedProduct").value

    let clacValue = productPrice[selectedProduct]

    clacgmandkg(clacValue, selectedQty, selectedProduct)

  
}

function clacgmandkg(price, selectedQty, selectedProduct) {
    let amount;

    let condition = selectedQty.split(selectedQty.split("KG")[0])[1] || selectedQty.split(selectedQty.split("GM")[0])[1] ;
    switch (condition) {
        case "select":
        
        case "GM":
            let gm = Number(selectedQty.split("GM")[0])
            amount = Math.floor(((price / 1000) * gm));
            console.log(amount)
            break;

        case "KG":
            let kg = Number(selectedQty.split("KG")[0])
            amount = price * kg;
            console.log(amount)
            break;

        default:
            console.log("Invalid")
    }
    productDisplay(selectedProduct,selectedQty,amount)
}

function productDisplay(Product,Qty,productAmount){
         
    let prodId = count++
        let userInfo = document.querySelector(".userSelectList tbody")
       let listItem = document.createElement("tr")
        listItem.className = "listItem";
      
       
    
   listItem.innerHTML = ` <tr>

       <td> ${Product} 
       </td>
       <td> ${Qty}
       </td>
       <td> rs :${productAmount}
      </td>
     
       <td>
    <a href="#" class="remove" id="${prodId}" onclick="removeElement(this)">X</a>
       </td>

      </tr>    `;
     

      userInfo.appendChild(listItem);
   
    
      let obj = {
          productName:Product,
          qty:Qty,
          productPrice:productAmount,
          id:prodId
      }
      productArray.push(obj)
      console.log(listItem)

   
}


 



 let data =[]

async function sendMessage(e){
    console.log(productArray)
    // let productName ='', qty = '', productPrice =''
    productArray.map(value => {
        let values = `productName: ${value.productName} , productQTY : ${value.qty}, RS : ${value.productPrice}`
        data.push(values)
//    console.log(values)


    });

    // console.log(productName,qty,productPrice)
    // let url = `https://www.fast2sms.com/dev/bulkV2?authorization=7P0LKmYZ9Iybf0HkkfM15YHp7dgHdzTsBH8A4G1REYdOPw8zmQDOSiZ2ATfU&route=q&message='${data}'&language=english&flash=0&numbers=7989916238`
    // try {
    //     let res = await fetch(url);
    //     let data = await res.json();
    //     console.log(data.message)
    //     console.log(data)

    // } catch (error) {
    //     console.log(error);
    // }
}




