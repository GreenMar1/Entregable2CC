const recursos = {

videos:[

{
titulo:"Cómo crear personajes memorables",
descripcion:"Consejos para diseñar protagonistas y villanos.",
link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
},

{
titulo:"Diseño de personajes para artistas",
descripcion:"Proceso visual paso a paso.",
link:"https://www.youtube.com/"
}

],

blogs:[

{
titulo:"Character Design Tips",
descripcion:"Guía completa de diseño de personajes.",
link:"https://characterdesignreferences.com"
},

{
titulo:"Fantasy Name Generator",
descripcion:"Nombres para personajes y mundos.",
link:"https://www.fantasynamegenerators.com"
}

],

herramientas:[

{
titulo:"Hero Forge",
descripcion:"Crear miniaturas y referencias 3D.",
link:"https://www.heroforge.com"
},

{
titulo:"World Anvil",
descripcion:"Organización de mundos e historias.",
link:"https://www.worldanvil.com"
}

]

};

function mostrarCategoria(categoria){

    let contenedor =
    document.getElementById(
        "contenidoAyuda"
    );

    contenedor.innerHTML = "";

    recursos[categoria].forEach(
        recurso=>{

        let card =
        document.createElement("div");

        card.className =
        "recurso";

        card.innerHTML =

        `
        <h3>${recurso.titulo}</h3>

        <p>${recurso.descripcion}</p>

        <a
        href="${recurso.link}"
        target="_blank">

        Abrir

        </a>
        `;

        contenedor.appendChild(
            card
        );

    });

}

mostrarCategoria("videos");