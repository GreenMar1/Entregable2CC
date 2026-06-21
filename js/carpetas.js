console.log("carpetas.js cargado");

let carpetas =
JSON.parse(localStorage.getItem("carpetas")) || [];

const btnCrear =
document.getElementById("guardarCarpeta");

btnCrear.addEventListener("click", ()=>{

    let nombre =
    document.getElementById("nombreCarpeta").value;

    if(nombre.trim() === ""){

        alert("Escribe un nombre");

        return;

    }

    carpetas.push({

        id: Date.now(),

        nombre: nombre,

        historia:"",
        personalidad:"",
        apariencia:"",
        habilidades:"",
        relaciones:"",
        inventario:"",
        extras:"",

        imagenes:[]

    });

    localStorage.setItem(
        "carpetas",
        JSON.stringify(carpetas)
    );

    mostrarCarpetas();

    document.getElementById(
        "nombreCarpeta"
    ).value = "";

});

function mostrarCarpetas(){

    let contenedor =
    document.getElementById(
        "contenedorCarpetas"
    );

    contenedor.innerHTML = "";

    carpetas.forEach(carpeta=>{

       let card =
document.createElement("div");

card.className =
"folder-card";

        card.innerHTML = `
            <h4>📁 ${carpeta.nombre}</h4>

            <button class="renombrarCarpeta">
                Renombrar
            </button>

            <button class="eliminarCarpeta">
                Eliminar
            </button>
        `;

        card.style.border =
        "1px solid white";

        card.style.padding =
        "10px";

        card.style.margin =
        "10px";

        card.style.cursor =
        "pointer";

        // =====================
        // RENOMBRAR
        // =====================

        let botonRenombrar =
        card.querySelector(
            ".renombrarCarpeta"
        );

        botonRenombrar.addEventListener(
            "click",
            (e)=>{

                e.stopPropagation();

                let nuevoNombre =
                prompt(
                    "Nuevo nombre:",
                    carpeta.nombre
                );

                if(
                    nuevoNombre &&
                    nuevoNombre.trim() !== ""
                ){

                    carpeta.nombre =
                    nuevoNombre.trim();

                    localStorage.setItem(
                        "carpetas",
                        JSON.stringify(carpetas)
                    );

                    mostrarCarpetas();

                }

            }
        );

        // =====================
        // ELIMINAR
        // =====================

        let botonEliminar =
        card.querySelector(
            ".eliminarCarpeta"
        );

        botonEliminar.addEventListener(
            "click",
            (e)=>{

                e.stopPropagation();

                let confirmar =
                confirm(
                    `¿Eliminar ${carpeta.nombre}?`
                );

                if(confirmar){

                    carpetas =
                    carpetas.filter(
                        c => c.id !== carpeta.id
                    );

                    localStorage.setItem(
                        "carpetas",
                        JSON.stringify(carpetas)
                    );

                    mostrarCarpetas();

                }

            }
        );

        // =====================
        // ABRIR CARPETA
        // =====================

        card.addEventListener(
            "click",
            ()=>{

                localStorage.setItem(
                    "carpetaActual",
                    carpeta.id
                );

                window.location.href =
                "personaje.html";

            }
        );

        contenedor.appendChild(
            card
        );

    });

}

mostrarCarpetas();