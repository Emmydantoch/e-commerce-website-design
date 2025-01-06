const container = document.getElementById('container')//div.names
let productName = container.firstElementChild // h1
let description = container.firstElementChild.nextElementSibling //p1
let image = container.previousElementSibling.firstElementChild

productName.innerHTML = localStorage.getItem('productName')
description.innerHTML = localStorage.getItem('description')
image.setAttribute('src', localStorage.getItem('image'))