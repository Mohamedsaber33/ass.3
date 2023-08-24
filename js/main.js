var bookmarkName = document.getElementById('bookmarkName') //html input
var bookmarkURL = document.getElementById('bookmarkURL')


var productArray = []

if (localStorage.getItem('products') != null) {
    productArray = JSON.parse(localStorage.getItem('products'))
    displayProduct()
}

function Submit() {


    var productObject = {
        name: bookmarkName.value,
        urlItem: bookmarkURL.value,
        
    }

    productArray.push(productObject)
    localStorage.setItem('products', JSON.stringify(productArray))
    displayProduct()
    clearInputs()

}

function displayProduct() {
    var cartona = ``
    for (var i = 0; i < productArray.length; i++) {
        cartona += `
        <tr>
        
        <td>${i}</td>
        <td>${productArray[i].urlItem}</td>
        
        <td><a href="${productArray[i].urlItem}"  class="btn btn-warning btn-sm ">Visit</a></td>
        <td>  <button onclick="deleteItem(${i})" class="btn btn-danger btn-sm">DELETE</button></td>
      </tr>
        `
    }
    document.getElementById('demo').innerHTML = cartona
}

function clearInputs() {
    bookmarkName.value = ""
    bookmarkURL.value = ""
     
 }
 

 function deleteItem(index) {

     productArray.splice(index, 1)
     localStorage.setItem('products', JSON.stringify(productArray))
     displayProduct()

 }