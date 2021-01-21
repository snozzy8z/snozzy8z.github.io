var e = $('body').on('click', '.achat', function (e) {
    var id = e.currentTarget['id']
    console.log(id);
    var article = document.getElementById("article" + id)
    console.log(article)
})


for (i = 0; i < e.length; i++) {
    e[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers(){
    var productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers){
        document.querySelector('.panier spawn').textContent = productNumbers;
    }

}

function cartNumbers() {
    var productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers)

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers +  1);
        document.querySelector('.panier span').textContent = productNumbers + 1;

    }else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.panier span').textContent = 1;
    }
}

onLoadCartNumbers()