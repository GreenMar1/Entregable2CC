let carpetas =
JSON.parse(
    localStorage.getItem("carpetas")
) || [];

const selector =
document.getElementById(
    "selectorPersonaje"
);

function cargarPersonajes(){

    selector.innerHTML = "";

    carpetas.forEach(carpeta=>{

        let opcion =
        document.createElement("option");

        opcion.value =
        carpeta.id;

        opcion.textContent =
        carpeta.nombre;

        selector.appendChild(
            opcion
        );

    });

}

cargarPersonajes();

const datos = {

    estilo:[
        "Cyberpunk",
        "Steampunk",
        "Fantasía",
        "Moderno",
        "Postapocalíptico"
    ],

    ropa:[
        "Gabardina Negra",
        "Armadura Dorada",
        "Traje Elegante",
        "Túnica Arcana",
        "Chaqueta Militar"
    ],

    arma:[
        "Katana",
        "Rifle",
        "Lanza",
        "Báculo",
        "Guadaña"
    ],

    mascota:[
        "Cuervo",
        "Lobo",
        "Dragón",
        "Gato",
        "Zorro"
    ],

    colorPrimario:[
        "Rojo",
        "Azul",
        "Negro",
        "Verde",
        "Blanco"
    ],

    colorSecundario:[
        "Plata",
        "Dorado",
        "Morado",
        "Naranja",
        "Gris"
    ],

    accesorio:[
        "Máscara",
        "Anillo",
        "Amuleto",
        "Capa",
        "Corona"
    ],

    especie:[
        "Humano",
        "Lobo Humanoide",
        "Elfo",
        "Demonio",
        "Dragón"
    ],

    profesion:[
        "Cazarrecompensas",
        "Mago",
        "Mercenario",
        "Inventor",
        "Guardián"
    ],

    poder:[
        "Sombras",
        "Electricidad",
        "Hielo",
        "Fuego",
        "Telequinesis"
    ],

    debilidad:[
        "Luz",
        "Agua",
        "Frío",
        "Soledad",
        "Ruido"
    ]

};

function random(lista){

    return lista[
        Math.floor(
            Math.random() * lista.length
        )
    ];

}

function generarTodo(){

    document.getElementById("estilo").innerText =
    random(datos.estilo);

    document.getElementById("ropa").innerText =
    random(datos.ropa);

    document.getElementById("arma").innerText =
    random(datos.arma);

    document.getElementById("mascota").innerText =
    random(datos.mascota);

    document.getElementById("colorPrimario").innerText =
    random(datos.colorPrimario);

    document.getElementById("colorSecundario").innerText =
    random(datos.colorSecundario);

    document.getElementById("accesorio").innerText =
    random(datos.accesorio);

    document.getElementById("especie").innerText =
    random(datos.especie);

    document.getElementById("profesion").innerText =
    random(datos.profesion);

    document.getElementById("poder").innerText =
    random(datos.poder);

    document.getElementById("debilidad").innerText =
    random(datos.debilidad);

}

document
.getElementById("generarTodo")
.addEventListener(
    "click",
    generarTodo
);

// =========================
// GUARDAR EN PERSONAJE
// =========================

document
.getElementById("guardarRandom")
.addEventListener(
    "click",
    ()=>{

        let idSeleccionado =
        selector.value;

        let personaje =
        carpetas.find(
            c => c.id == idSeleccionado
        );

        if(!personaje){

            alert(
                "Selecciona un personaje."
            );

            return;

        }

        let estilo =
        document.getElementById(
            "estilo"
        ).innerText;

        let ropa =
        document.getElementById(
            "ropa"
        ).innerText;

        let arma =
        document.getElementById(
            "arma"
        ).innerText;

        let mascota =
        document.getElementById(
            "mascota"
        ).innerText;

        let colorPrimario =
        document.getElementById(
            "colorPrimario"
        ).innerText;

        let colorSecundario =
        document.getElementById(
            "colorSecundario"
        ).innerText;

        let accesorio =
        document.getElementById(
            "accesorio"
        ).innerText;

        let especie =
        document.getElementById(
            "especie"
        ).innerText;

        let profesion =
        document.getElementById(
            "profesion"
        ).innerText;

        let poder =
        document.getElementById(
            "poder"
        ).innerText;

        let debilidad =
        document.getElementById(
            "debilidad"
        ).innerText;

        // APARIENCIA

        personaje.apariencia =

`Especie: ${especie}

Estilo: ${estilo}

Color Primario: ${colorPrimario}

Color Secundario: ${colorSecundario}

Accesorio: ${accesorio}

Ropa: ${ropa}`;

        // INVENTARIO

        personaje.inventario =

`Arma Principal: ${arma}`;

        // HABILIDADES

        personaje.habilidades =

`Poder Principal: ${poder}`;

        // EXTRAS

        personaje.extras =

`Mascota: ${mascota}

Profesión: ${profesion}

Debilidad: ${debilidad}`;

        localStorage.setItem(
            "carpetas",
            JSON.stringify(carpetas)
        );

        alert(
            `Datos guardados en ${personaje.nombre}`
        );

    }
);