// smooth scroll
// $(document).ready(function () {
//     $(".navbar .nav-link").on('click', function (event) {

//         if (this.hash !== "") {

//             event.preventDefault();

//             var hash = this.hash;

//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 700, function () {
//                 window.location.hash = hash;
//             });
//         }
//     });
// });

// protfolio filters
$(window).on("load", function () {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".all",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function () {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})


//Content
document.addEventListener("DOMContentLoaded", main);
let allProjects = [];
var elementoModal = document.getElementById('modal');
var modal = new bootstrap.Modal(elementoModal);

async function fetchProjects() {
    try {
        const response = await fetch('content.json');
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

async function main() {
    try {
        // allProjects = await fetchProjects();
        allProjects = [ 
            {
                "id": 0,
                "name": "Flipbook Danna Paola",
                "image":"danna-book.png",
                "type": "Landing Page",
                "category": "landing",
                "year": 2021,
                "description": "Esta fue una de las landings que realicé en Mapalab; se usó para promocionar el álbum K.O. de Danna Paola. Para poder iniciar sesión, era requerida una cuenta de Spotify, ya que el objetivo era realizar \"presave\" del álbum completo. Al iniciar sesión, podías desplazarte entre las fotos exclusivas de Danna Paola referentes a su nuevo álbum. Para esta landing me encargué del diseño UX, maquetación, implementación de funcionalidades y programación de la parte backend.",
                "tech": "PHP, MySQL, JavaScript, Laravel, HTML, CSS",
                "url": "https://www.facebook.com/reel/2774557219526716",
                "deprecated": true
            },
            {
                "id": 1,
                "name": "runa hr",
                "image":"runaRH.png",
                "type": "Sitio Web",
                "category": "web managment",
                "year": 2020,
                "description": "Mantenimiento, gestión de contenido, incorporación de nuevas funcionalidades.",
                "tech": "WordPress, HTML, PHP, CSS",
                "url": "https://runahr.com/mx/",
                "deprecated": false
            },
            {
                "id": 2,
                "name": "Dämadi Sweethomes",
                "image":"damadi.png",
                "type": "Sitio Web",
                "category": "web",
                "year": 2021,
                "description": "Dämadi Sweethomes es un sitio web dedicado a brindar información acerca del asilo para adultos mayores. El sitio ofrece detalles sobre las instalaciones, servicios, actividades, enfermería, cuidados especializados y opciones de alojamiento para los abuelos. Mi trabajo se centró en la creación del sitio web, maquetación del diseño usando WordPress, HTML, CSS y PHP, además del mantenimiento y la gestión del contenido.",
                "tech": "WordPress, HTML, PHP, CSS",
                "url": "https://damadimx.com",
                "deprecated": false
            },
            {
                "id": 3,
                "name": "Universal Music México",
                "image":"umm.png",
                "type": "Sitio Web",
                "category": "web",
                "year": 2021,
                "description": "El sitio de Universal Music México es una plataforma dedicada a la promoción y difusión de la música y los artistas representados por Universal Music en México. Este sitio fue desarrollado desde cero, por lo que se maquetó el diseño y fue aprobado por el cliente, se implementaron las funcionalidades y secciones requeridas. Se realizó el mantenimiento y la gestión de contenido usando WordPress, HTML, CSS Y PHP.",
                "tech": "WordPress, HTML, PHP, CSS",
                "url": "https://www.universalmusicmexico.com/#/",
                "deprecated": false
            },
            {
                "id": 4,
                "name": "Digitas México",
                "image":"digitas.png",
                "type": "Sitio Web",
                "category": "web managment",
                "year": 2024,
                "description": "Este sitio fue creado usando Drupal, se maquetó el diseño proporcionado por el cliente, se implementaron las funcionalidades y secciones requeridas. Se realizó mantenimiento y gestión de contenido.",
                "tech": "Drupal, HTML",
                "url": "https://www.universalmusicmexico.com/#/",
                "deprecated": false
            },
            {
                "id": 5,
                "name": "Mide tu tiroides",
                "image":"midetutiroides.png",
                "type": "Sitio Web",
                "category": "web managment",
                "year": 2025,
                "description": "Mide tu tiroides es un sitio web dedicado a proporcionar información sobre la salud de la tiroides, el sitio ofrece recursos educativos, tratamientos y consejos para el cuidado de la tiroides. Mi trabajo en este proyecto se centró en el mantenimiento del sitio, maquetación de nuevas secciones, gestión de contenido y a incorporación de nuevas funcionalidades a través de plugins personalizados.",
                "tech": "WordPress, PHP, JavaScript, HTML, CSS",
                "url": "https://midetutiroides.endocrinologia.org.mx/",
                "deprecated": false
            },
            {
                "id": 6,
                "name": "Thyroid Aware",
                "image":"thyroidaware.png",
                "type": "Sitio Web",
                "category": "web managment",
                "year": 2025,
                "description": "Thyroid aware es el sitio multilenguaje de \"Mide tu tiroides\". Mi trabajo en este proyecto se centró en el mantenimiento del sitio, maquetación de nuevas secciones, gestión de contenido y a incorporación de nuevas funcionalidades a través de plugins personalizados.",
                "tech": "WordPress, PHP, JavaScript, HTML, CSS",
                "url": "https://midetutiroides.endocrinologia.org.mx/",
                "deprecated": false
            },
            {
                "id": 7,
                "name": "Audi Latinoamerica",
                "image":"audilatam.png",
                "type": "Sitio Web",
                "category": "web managment",
                "year": 2025,
                "description": "Lleve a cabo el mantenimiento del sitio, gestión de contenido y creación de nuevas secciones. El sitio es multilenguaje, por lo que se gestionó el contenido en inglés, francés y español para cubrir las necesidades de los diferentes mercados latinoamericanos. el sitio fue creado usando Adobe Experience Manager (AEM), lo que permitió una gestión eficiente del contenido y una experiencia de usuario fluida. Mi mayor reto fue la creación de todas las secciones del sitio para todos los países, ya que el sitio fue destruido por una gestión inadecuada.",
                "tech": "AEM, HTML, JavaScript",
                "url": "https://www.audilatinoamerica.com/es/",
                "deprecated": false
            },
            {
                "id": 8,
                "name": "Nivea",
                "image":"nivea.png",
                "type": "Sitio Web",
                "category": "web managment",
                "year": 2025,
                "description": "Para el sitio de Nivea, mi labor se centró en la gestión de contenido y la creación de secciones a través del CMS sitecore, el cual permite la gestión de multisitios y multilenguaje.",
                "tech": "Sitecore, HTML, JavaScript",
                "url": "https://www.audilatinoamerica.com/es/",
                "deprecated": false
            }
        ];
        const container = document.getElementById('container');
        container.innerHTML = '';
        allProjects.forEach(project => {
            // Col principal
            const col = document.createElement("div");
            col.className = "col-md-6 col-lg-4 all "+ project.category.toLowerCase();

            // Item
            const item = document.createElement("div");
            item.className = "portfolio-item";

            // Imagen
            const img = document.createElement("img");
            img.className = "img-fluid";
            img.src = `assets/img/${project.image}`;
            img.alt = project.name;

            // Content holder
            const contentHolder = document.createElement("div");
            contentHolder.className = "content-holder";

            // Link popup
            const link = document.createElement("a");
            link.className = "img-popup";
            link.href = `assets/img/${project.image}`;

            // Text holder
            const textHolder = document.createElement("div");
            textHolder.className = "text-holder";

            // Título
            const title = document.createElement("h6");
            title.className = "title";
            title.textContent = project.name;

            // Subtítulo
            const subtitle = document.createElement("p");
            subtitle.className = "subtitle";
            subtitle.textContent = project.tech;

            // Botón
            const btn = document.createElement("button");
            btn.className = "btn btn-light";
            btn.textContent = "Más detalles";


            btn.addEventListener("click", () => {
                verDetalle(project.id);
            });

            // =====================
            // Armar estructura
            // =====================

            textHolder.appendChild(title);
            textHolder.appendChild(subtitle);
            textHolder.appendChild(btn);

            contentHolder.appendChild(link);
            contentHolder.appendChild(textHolder);

            item.appendChild(img);
            item.appendChild(contentHolder);

            col.appendChild(item);
            container.appendChild(col);
        });
    } catch(error){
        console.error('Error fetching projects:', error);
    }
}

function verDetalle(id) {
    const project = allProjects.find(p => p.id === id);
    if(!project) {
        console.error('Proyecto no encontrado con ID:', id);
        return;
    }

    // Actualizar contenido del modal
    document.getElementById('modalTitle').textContent = project.name;
    document.getElementById('modalType').textContent = project.type + " - "+ project.year;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalImage').src = `assets/img/${project.image}`;
    document.getElementById('modalTech').textContent = `Tecnologías: ${project.tech}`;
    const urlLink = document.getElementById('modalUrl');
    urlLink.href = project.url;
    modal.show();
}
