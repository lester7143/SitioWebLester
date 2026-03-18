
const cuerpo = document.body;
const btnAzul = document.querySelector('#btnAzul');
const btnRojo = document.querySelector('#btnRojo');
const btnVerde = document.querySelector('#btnVerde');


if (btnAzul) {
    btnAzul.addEventListener('click', () => cuerpo.style.backgroundColor = '#3498db');
    btnRojo.addEventListener('click', () => cuerpo.style.backgroundColor = '#e74c3c');
    btnVerde.addEventListener('click', () => cuerpo.style.backgroundColor = '#2ecc71');
}

class MenuNavegacion extends HTMLElement {
    //equivale al constructor de htmlelement, cuando el dom del sitio se cargue
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="logo">Ejemplo Sitio Web</div>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    <li><a href="https://google.com" target="_blank">Google</a></li>
                </ul>
            </nav>
        `;


    }//connectedCallback



}//fin class MenuNavegacion

//objeto html de javasript
customElements.define('menu-navegacion', MenuNavegacion);