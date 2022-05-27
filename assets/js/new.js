let order = document.querySelector(".formIn");
let btn = document.querySelector("#btn")
let userQtyList = document.querySelector(".addItem")
let clear = document.querySelector(".clear")
let invalid = document.querySelector(".invalid")
let productArray = []
let sendData = []


function mainClose(element) {
    let close = document.querySelector(".mainBar")
    close.style.dispaly = "block";
}


function online() {
    console.log(order.classList)
    order.classList.toggle("display")
   

    // userQtyList.addEventListener("click", userList)

}
function closess(e) {

    if (e.classList.contains("remove")) {
        e.parentElement.parentElement.remove()
        console.log( e.parentElement.parentElement);

    }
    


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
            console.log("jjj")
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
         
    
        let userInfo = document.querySelector(".userSelectList tbody")
    let listItem = document.createElement("tr")
        listItem.className = "listItem";
        listItem.style.width ="100%"

    listItem.innerHTML = ` <tr>

       <td> ${Product} 
       </td>
       <td> ${Qty}
       </td>
       <td> rs :${productAmount}
      </td>
     
       <td>
    <a href="#" class="remove"  onclick="closess(this)">X</a>
       </td>

      </tr>    `;
      let obj = {
          productName:Product,
          qty:Qty,
          productPrice:productAmount
      }
      productArray.push(obj)
    userInfo.appendChild(listItem);

   
}
 


 let data =[]

async function sendMessage(e){
    console.log(productArray)
    // let productName ='', qty = '', productPrice =''
    productArray.map(value => {
        let values = `productName: ${value.productName} , productQTY : ${value.qty}, RS : ${value.productPrice}`
        sendData = values
   console.log(values)

    });
   console.log(sendData)
 


   
    console.log( productArray)
 
    // console.log(productName,qty,productPrice)
    // let url = `https://www.fast2sms.com/dev/bulkV2?authorization=7P0LKmYZ9Iybf0HkkfM15YHp7dgHdzTsBH8A4G1REYdOPw8zmQDOSiZ2ATfU&route=q&message='${datas}'&language=english&flash=0&numbers=7989916238`
    // try {
    //     let res = await fetch(url);
    //     let data = await res.json();
    //     console.log(data.message)
    //     console.log(data)

    // } catch (error) {
    //     console.log(error);
    // }
}




// async function sendMessage(url="",data={}){
//     let key ="7P0LKmYZ9Iybf0HkkfM15YHp7dgHdzTsBH8A4G1REYdOPw8zmQDOSiZ2ATfU";
// // let url ="https://www.fast2sms.com/dev/bulkV2"
// //      let header = new Headers();
// //      header.append("authorization",`${key}`);
// //      header.append("Content-Type","application/json");
// //  let method ="POST"
// try{
//    let fetchUrl = await fetch(url,{
//     method:"POST",
//     mode: 'cors',
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin',
//     headers: {
//         "authorization":"7P0LKmYZ9Iybf0HkkfM15YHp7dgHdzTsBH8A4G1REYdOPw8zmQDOSiZ2ATfU",
//         "Content-Type":"application/json"

//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', 
//       referrerPolicy: 'no-referrer',
//       body:JSON.stringify(data) 

//    })
//    return response.json(); 

// //    let res = await fetchUrl.json()
// }
// catch(e){
//     console.log("jjj")
// }
// }

// sendMessage("https://www.fast2sms.com/dev/bulkV2", { message: "hi" })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });
//    console.log()
//    let uu = document.querySelector(".listItem")
//    console.log(uu)
//    headers:header,
//    method,

//    body:JSON.stringify(){
//     message : "hi",
//     numbers : "7989916238",

//    }