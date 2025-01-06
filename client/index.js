
const submit = () =>{
    e = window.event
    button = e.target // button
    container = button.parentElement //div.names
    productName = container.firstElementChild.innerHTML // h1
    description = container.firstElementChild.nextElementSibling.innerHTML //p1
    image = container.previousElementSibling.firstElementChild.getAttribute('src')
    console.log(image)
    localStorage.setItem('productName', productName)
    localStorage.setItem('description', description)
    localStorage.setItem('image', image)
    window.location.href='http://127.0.0.1:5501/productpage.html'
}

