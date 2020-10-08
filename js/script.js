document.querySelector('#section3').addEventListener('click', traeDatos());

function traeDatos(){
    console.log('dentro');
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/bestSellingProducts.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status==200){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            var res = document.querySelector('#res');
            res.innerHTML = '';
        }
        for(var item of datos){
            res.innerHTML   = 
            `<h4>${item.name}</h4>`
        }

    }
}