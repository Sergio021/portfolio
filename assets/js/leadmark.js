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

const allProjects_mx = [
    {
        "id": 0,
        "name": "Flipbook Danna Paola",
        "image": "danna-book.png",
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
        "image": "runaRH.png",
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
        "image": "damadi.png",
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
        "image": "umm.png",
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
        "image": "digitas.png",
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
        "image": "midetutiroides.png",
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
        "image": "thyroidaware.png",
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
        "image": "audilatam.png",
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
        "image": "nivea.png",
        "type": "Sitio Web",
        "category": "web managment",
        "year": 2025,
        "description": "Para el sitio de Nivea, mi labor se centró en la gestión de contenido y la creación de secciones a través del CMS sitecore, el cual permite la gestión de multisitios y multilenguaje.",
        "tech": "Sitecore, HTML, JavaScript",
        "url": "https://www.nivea.com.mx/",
        "deprecated": false
    }
];

const allProjects_en = [
    {
        "id": 0,
        "name": "Flipbook Danna Paola",
        "image": "danna-book.png",
        "type": "Landing Page",
        "category": "landing",
        "year": 2021,
        "description": "This was one of the landing pages I created at Mapalab; it was used to promote the album K.O. by Danna Paola. To log in, a Spotify account was required, since the goal was to complete a full album \“presave.\” After logging in, users could browse exclusive photos of Danna Paola related to her new album. For this landing page, I was responsible for UX design, layout development, feature implementation, and backend programming.",
        "tech": "PHP, MySQL, JavaScript, Laravel, HTML, CSS",
        "url": "https://www.facebook.com/reel/2774557219526716",
        "deprecated": true
    },
    {
        "id": 1,
        "name": "runa hr",
        "image": "runaRH.png",
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
        "image": "damadi.png",
        "type": "Sitio Web",
        "category": "web",
        "year": 2021,
        "description": "Dämadi Sweethomes is a website dedicated to providing information about a nursing home for older adults. The site offers details about the facilities, services, activities, nursing care, specialized care, and accommodation options for residents. My work focused on building the website, developing the layout using WordPress, HTML, CSS, and PHP, as well as handling maintenance and content management.",
        "tech": "WordPress, HTML, PHP, CSS",
        "url": "https://damadimx.com",
        "deprecated": false
    },
    {
        "id": 3,
        "name": "Universal Music México",
        "image": "umm.png",
        "type": "Sitio Web",
        "category": "web",
        "year": 2021,
        "description": "The Universal Music México website is a platform dedicated to promoting and showcasing the music and artists represented by Universal Music in Mexico. This site was developed from scratch: the design layout was created and approved by the client, and all required features and sections were implemented. Ongoing maintenance and content management were carried out using WordPress, HTML, CSS, and PHP.",
        "tech": "WordPress, HTML, PHP, CSS",
        "url": "https://www.universalmusicmexico.com/#/",
        "deprecated": false
    },
    {
        "id": 4,
        "name": "Digitas México",
        "image": "digitas.png",
        "type": "Sitio Web",
        "category": "web managment",
        "year": 2024,
        "description": "This website was created using Drupal. The design provided by the client was implemented, and the required features and sections were developed accordingly. Maintenance and content management were also carried out.",
        "tech": "Drupal, HTML",
        "url": "https://www.universalmusicmexico.com/#/",
        "deprecated": false
    },
    {
        "id": 5,
        "name": "Mide tu tiroides",
        "image": "midetutiroides.png",
        "type": "Sitio Web",
        "category": "web managment",
        "year": 2025,
        "description": "Mide tu Tiroides is a website dedicated to providing information about thyroid health. The site offers educational resources, treatment information, and advice on thyroid care. My work on this project focused on website maintenance, developing new sections, content management, and incorporating new features through custom plugins.",
        "tech": "WordPress, PHP, JavaScript, HTML, CSS",
        "url": "https://midetutiroides.endocrinologia.org.mx/",
        "deprecated": false
    },
    {
        "id": 6,
        "name": "Thyroid Aware",
        "image": "thyroidaware.png",
        "type": "Sitio Web",
        "category": "web managment",
        "year": 2025,
        "description": "**Thyroid Aware** is the multilingual version of \“Mide tu Tiroides.\” My work on this project focused on website maintenance, developing new sections, content management, and incorporating new features through custom plugins.",
        "tech": "WordPress, PHP, JavaScript, HTML, CSS",
        "url": "https://midetutiroides.endocrinologia.org.mx/",
        "deprecated": false
    },
    {
        "id": 7,
        "name": "Audi Latinoamerica",
        "image": "audilatam.png",
        "type": "Sitio Web",
        "category": "web managment",
        "year": 2025,
        "description": "I was responsible for website maintenance, content management, and the creation of new sections. The site is multilingual, so content was managed in English, French, and Spanish to meet the needs of different Latin American markets. The site was built using Adobe Experience Manager (AEM), which enabled efficient content management and a smooth user experience. My biggest challenge was rebuilding all the website sections for every country, as the site had been severely damaged due to poor management.",
        "tech": "AEM, HTML, JavaScript",
        "url": "https://www.audilatinoamerica.com/es/",
        "deprecated": false
    },
    {
        "id": 8,
        "name": "Nivea",
        "image": "nivea.png",
        "type": "Sitio Web",
        "category": "web managment",
        "year": 2025,
        "description": "For the Nivea website, my role focused on content management and creating new sections through the Sitecore CMS, which enables multi-site and multilingual management.",
        "tech": "Sitecore, HTML, JavaScript",
        "url": "https://www.nivea.com.mx/",
        "deprecated": false
    }
];

async function main() {
    try {
        const htmlLang = document.documentElement.lang;
        allProjects = htmlLang == "es" ? allProjects_mx : allProjects_en
        const container = document.getElementById('container');
        container.innerHTML = '';
        allProjects.forEach(project => {
            // Col principal
            const col = document.createElement("div");
            col.className = "col-md-6 col-lg-4 all " + project.category.toLowerCase();

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
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

function verDetalle(id) {
    const project = allProjects.find(p => p.id === id);
    if (!project) {
        console.error('Proyecto no encontrado con ID:', id);
        return;
    }

    // Actualizar contenido del modal
    document.getElementById('modalTitle').textContent = project.name;
    document.getElementById('modalType').textContent = project.type + " - " + project.year;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalImage').src = `assets/img/${project.image}`;
    document.getElementById('modalImage').alt = project.name;
    document.getElementById('modalTech').textContent = `${project.tech}`;
    const urlLink = document.getElementById('modalUrl');
    urlLink.href = project.url;
    modal.show();
}