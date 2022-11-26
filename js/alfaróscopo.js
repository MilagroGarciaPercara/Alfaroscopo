const Contenedor = document.getElementById('Contenedor');

const cartas = [
    {
        nombre: "Aries",
        img: "img/Aries.png",
        imagenAlfajor: "img/BonoBon.png",
    },
    {
        nombre: "Tauro",
        img: "img/Tauro.png",
        imagenAlfajor: "img/Maicena.png",
    },
    {
        nombre: "Géminis",
        img: "img/Geminis.png",
        imagenAlfajor: "img/Fulbito.png",
    },
    {
        nombre: "Cáncer",
        img: "img/Cancer.png",
        imagenAlfajor: "img/Tofi.png",
    },
    {
        nombre: "Leo",
        img: "img/Leo.png",
        imagenAlfajor: "img/Guaymallen.png",
    },
    {
        nombre: "Virgo",
        img: "img/Virgo.png",
        imagenAlfajor: "img/Havanna.png",
    },
    {
        nombre: "Libra",
        img: "img/Libra.png",
        imagenAlfajor: "img/Block.png",
    },
    {
        nombre: "Escorpio",
        img: "img/Escorpio.png",
        imagenAlfajor: "img/Fantoche.png",
    },
    {
        nombre: "Sagitario",
        img: "img/Sagitario.png",
        imagenAlfajor: "img/Aguila.png",
    },
    {
        nombre: "Capricornio",
        img: "img/Capricornio.png",
        imagenAlfajor: "img/Tatin.png",
    },
    {
        nombre: "Acuario",
        img: "img/Acuario.png",
        imagenAlfajor: "img/MilkaOreo.png",
    },
    {
        nombre: "Piscis",
        img: "img/Piscis.png",
        imagenAlfajor: "img/Vauquita.png",
    },

]

function desactivarTodosSignos() {
    const elements = document.getElementsByClassName("SignoActivo");
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.remove("SignoActivo");
    }
}

for (const signo of cartas) {
    const signoDiv = document.createElement("div");
    signoDiv.classList.add("Signo");
    const contenedorTransicion = document.createElement("div");
    contenedorTransicion.classList.add("transicion");
    const caraDelantera = document.createElement("div");
    caraDelantera.classList.add("cara-delantera");
    const signoImg = document.createElement("img");
    signoImg.classList.add("signoimg");
    signoImg.src = signo.img;
    caraDelantera.append(signoImg);
    caraDelantera.append(signo.nombre);
    contenedorTransicion.append(caraDelantera);

    const caraDetras = document.createElement("div");
    caraDetras.classList.add("cara-michi");

    const imgAlfajor = document.createElement("img");
    imgAlfajor.classList.add("alfajorimg");
    imgAlfajor.src = signo.imagenAlfajor;
    caraDetras.append(imgAlfajor);
    contenedorTransicion.append(caraDetras);
    signoDiv.append(contenedorTransicion);

    signoDiv.onclick = () => {
        desactivarTodosSignos();
        signoDiv.classList.add("SignoActivo")
    }

    Contenedor.append(signoDiv);
}

