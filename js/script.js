document.querySelector('#section3').addEventListener('click', traeDatos());

function traeDatos(){
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/bestSellingProducts.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status==200){
            var datos = JSON.parse(this.responseText);
            var res = document.querySelector('#res');
            var i = 7;
            for(var item of datos.products){
                console.log(item);
                res.innerHTML   += 
                `<div class="col-3">
                <img src="imgs/${i}.jpg">
                <h4>${item.name}</h4>
                <div class="rating">
                    <div class="fa ec-stars-wrapper">
                        <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
                        <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
                        <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
                        <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
                        <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
                      </div>
                </div>
                <div class="row">
                <div class="col">
                <p>$${item.specialPrice}</p>
                </div>
                <div class="col">
                <p><strike>$${item.price}</strike></p>
                </div>
                </div>
            </div>` 
            i++
            }
        }
        

    }
}