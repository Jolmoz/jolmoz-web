/*!
* Start Bootstrap - Agency v7.0.4 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 80,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    let procesadores = [
        {
            nombre: 'Ryzen 3 3100',
            precio: 750000
        },
        {
            nombre: 'Ryzen 5 3600',
            precio: 880000
        },
        {
            nombre: 'Ryzen 7 Pro 3700',
            precio: 1180000
        },
        { nombre: 'Ryzen 5 5600', precio: 1115000 },
        { nombre: 'Ryzen 7 5800', precio: 1531000 },
        { nombre: 'Core i3 7100', precio: 700000 },
        { nombre: 'Core i5 7400', precio: 770000 },
        { nombre: 'Core i7 7700K', precio: 1700000 },
        { nombre: 'Core i3 10300', precio: 715000 },
        { nombre: 'Core i5 10500', precio: 1050000 },
        { nombre: 'Core i7 10700K', precio: 1205000 }];
    
    let rams = [{ nombre: 'HyperX DDR4 2666 GHz (2x8GB)', precio: 800000 }, { nombre: 'HyperX DDR4 2666 GHz (2x4GB)', precio: 400000 }, { nombre: 'HyperX DDR4 3200 GHz (2x8GB)', precio: 900000 }, { nombre: 'HyperX DDR4 3200 GHz (2x4GB)', precio: 450000 }]
    let tarjetasVideo = [{ nombre: 'GTX 1660 Super 6GB', precio: 1800000 }, { nombre: 'RX 570 8GB', precio: 2800000 }, { nombre: 'RTX 2060 4GB', precio: 3000000 }, { nombre: 'RX 6900 XT', precio: 8400000 }]
    let boards = [{ nombre: 'Gigabyte B450 M', precio: 350000 }, { nombre: 'GigaByte H110m', precio: 800000 }, { nombre: 'ASUS ROG Strix Z490-E', precio: 900000 }]
    
      
    for (let i=0;i<boards.length;i++){
        let childElement = document.createElement("option");
        childElement.innerHTML = boards[i].nombre + " - Precio: $"+ boards[i].precio;
        $('#selectBoard').append(childElement);
    }

    for (let i=0;i<procesadores.length;i++){
        let childElement = document.createElement("option");
        childElement.innerHTML = procesadores[i].nombre + " - Precio: $"+ procesadores[i].precio;
        $('#selectProcesador').append(childElement);
    }

    for (let i=0;i<rams.length;i++){
        let childElement = document.createElement("option");
        childElement.innerHTML = rams[i].nombre + " - Precio: $"+ rams[i].precio;
        $('#selectRam').append(childElement);
    }

    for (let i=0;i<tarjetasVideo.length;i++){
        let childElement = document.createElement("option");
        childElement.innerHTML = tarjetasVideo[i].nombre + " - Precio: $"+ tarjetasVideo[i].precio;
        $('#selectGrafica').append(childElement);
    }

    
    //console.log($('#selectBoard').children().text("asddsf"))

});
const regex = /.*\$/ig;

function selectOficina(){
    $('#selectBoard').children().removeAttr('selected')
    console.log($('#selectBoard option:contains("H110m")').prop('selected', true))
}

function checkPrecio(){
    let board =  $('#selectBoard option:selected').text()
    board = parseInt(board.replaceAll(regex,""))

    let procesador =  $('#selectProcesador option:selected').text()
    procesador = parseInt(procesador.replaceAll(regex,""))

    let ram =  $('#selectRam option:selected').text()
    ram = parseInt(ram.replaceAll(regex,""))

    let grafica =  $('#selectGrafica option:selected').text()
    grafica = parseInt(grafica.replaceAll(regex,""))

    let total = board+procesador+ram+grafica
    $('#totalPrecio').text(total);
    //console.log(total)
}
