let carpetas =
JSON.parse(localStorage.getItem("carpetas")) || [];

let carpetaActual =
localStorage.getItem("carpetaActual");

let personaje =
carpetas.find(
    c => c.id == carpetaActual
);

const titulo =
document.getElementById(
    "nombrePersonaje"
);

if(!personaje){

    alert("No se encontró el personaje.");

    window.location.href =
    "index.html";

}

// Mostrar nombre del personaje

titulo.innerText =
personaje.nombre;

// Inicializar imágenes si no existen

if(!personaje.imagenes){

    personaje.imagenes = [];

}

// ==========================
// CAMPOS DE INFORMACIÓN
// ==========================

const campos = [

    "historia",
    "personalidad",
    "apariencia",
    "habilidades",
    "relaciones",
    "inventario",
    "extras"

];

// Cargar datos guardados

campos.forEach(campo=>{

    let elemento =
    document.getElementById(campo);

    if(elemento){

        elemento.value =
        personaje[campo] || "";

    }

});

// Guardado automático

campos.forEach(campo=>{

    let elemento =
    document.getElementById(campo);

    if(elemento){

        elemento.addEventListener(
            "input",
            ()=>{

                personaje[campo] =
                elemento.value;

                localStorage.setItem(
                    "carpetas",
                    JSON.stringify(carpetas)
                );

            }
        );

    }

});

// ==========================
// SISTEMA DE IMÁGENES
// ==========================

const subirImagen =
document.getElementById(
    "subirImagen"
);

const galeria =
document.getElementById(
    "galeria"
);

function mostrarImagenes(){

    galeria.innerHTML = "";

    personaje.imagenes.forEach(
        (img,index)=>{

        let contenedor =
        document.createElement("div");

        contenedor.style.display =
        "inline-block";

        contenedor.style.margin =
        "10px";

        contenedor.style.textAlign =
        "center";

        let imagen =
        document.createElement("img");

        imagen.src = img;

        imagen.style.width =
        "150px";

        imagen.style.display =
        "block";

        imagen.style.borderRadius =
        "8px";

        imagen.style.marginBottom =
        "5px";

        let botonEliminar =
        document.createElement("button");

        botonEliminar.innerText =
        "Eliminar";

        botonEliminar.addEventListener(
            "click",
            ()=>{

                let confirmar =
                confirm(
                    "¿Eliminar esta imagen?"
                );

                if(confirmar){

                    personaje.imagenes.splice(
                        index,
                        1
                    );

                    localStorage.setItem(
                        "carpetas",
                        JSON.stringify(carpetas)
                    );

                    mostrarImagenes();

                }

            }
        );

        contenedor.appendChild(
            imagen
        );

        contenedor.appendChild(
            botonEliminar
        );

        galeria.appendChild(
            contenedor
        );

    });

}

mostrarImagenes();

// Subir imágenes

subirImagen.addEventListener(
    "change",
    (evento)=>{

        const archivos =
        evento.target.files;

        for(let archivo of archivos){

            const lector =
            new FileReader();

            lector.onload =
            function(e){

                personaje.imagenes.push(
                    e.target.result
                );

                localStorage.setItem(
                    "carpetas",
                    JSON.stringify(carpetas)
                );

                mostrarImagenes();

            };

            lector.readAsDataURL(
                archivo
            );

        }

    }
);