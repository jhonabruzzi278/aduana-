import { showToast } from '/scripts/toast.js';
const CATALOGOS_KEY = 'catalogos_aduana.js';
// Función para obtener los catálogos de localStorage
function getCatalogos() {
    try {
        const stored = localStorage.getItem(CATALOGOS_KEY);
        return stored ? JSON.parse(stored) : { tiposDocumento: [], puestosFronterizos: [] };
    }
    catch (error) {
        console.error('Error al obtener catálogos de localStorage:', error);
        return { tiposDocumento: [], puestosFronterizos: [] };
    }
}
// Función para guardar los catálogos en localStorage
function saveCatalogos(catalogos) {
    try {
        localStorage.setItem(CATALOGOS_KEY, JSON.stringify(catalogos));
    }
    catch (error) {
        console.error('Error al guardar catálogos en localStorage:', error);
        showToast('Error al guardar catálogos. Intenta de nuevo.', 'error');
    }
}
// Función para renderizar las listas de catálogos en la UI
function renderCatalogos() {
    const catalogos = getCatalogos();
    const listaTiposDocumento = document.getElementById('lista-tipos-documento');
    const listaPuestosFrontera = document.getElementById('lista-puestos-frontera');
    if (listaTiposDocumento) {
        listaTiposDocumento.innerHTML = ''; // Limpiar antes de renderizar
        catalogos.tiposDocumento.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaTiposDocumento.appendChild(li);
        });
    }
    if (listaPuestosFrontera) {
        listaPuestosFrontera.innerHTML = ''; // Limpiar antes de renderizar
        catalogos.puestosFronterizos.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaPuestosFrontera.appendChild(li);
        });
    }
}
export function setupGestionCatalogos() {
    const inputTipoDocumento = document.getElementById('input-tipo-documento');
    const btnAgregarTipoDocumento = document.getElementById('btn-agregar-tipo-documento');
    const inputPuestoFrontera = document.getElementById('input-puesto-frontera');
    const btnAgregarPuestoFrontera = document.getElementById('btn-agregar-puesto-frontera');
    // Renderizar los catálogos iniciales al cargar
    renderCatalogos();
    if (btnAgregarTipoDocumento && inputTipoDocumento) {
        btnAgregarTipoDocumento.addEventListener('click', () => {
            const nuevoTipo = inputTipoDocumento.value.trim();
            if (nuevoTipo) {
                const catalogos = getCatalogos();
                if (!catalogos.tiposDocumento.includes(nuevoTipo)) {
                    catalogos.tiposDocumento.push(nuevoTipo);
                    saveCatalogos(catalogos);
                    renderCatalogos();
                    showToast(`"${nuevoTipo}" agregado a Tipos de Documento.`, 'success');
                    inputTipoDocumento.value = ''; // Limpiar input
                }
                else {
                    showToast('Este tipo de documento ya existe.', 'info');
                }
            }
            else {
                showToast('Por favor, ingresa un tipo de documento.', 'error');
            }
        });
    }
    if (btnAgregarPuestoFrontera && inputPuestoFrontera) {
        btnAgregarPuestoFrontera.addEventListener('click', () => {
            const nuevoPuesto = inputPuestoFrontera.value.trim();
            if (nuevoPuesto) {
                const catalogos = getCatalogos();
                if (!catalogos.puestosFronterizos.includes(nuevoPuesto)) {
                    catalogos.puestosFronterizos.push(nuevoPuesto);
                    saveCatalogos(catalogos);
                    renderCatalogos();
                    showToast(`"${nuevoPuesto}" agregado a Puestos Fronterizos.`, 'success');
                    inputPuestoFrontera.value = ''; // Limpiar input
                }
                else {
                    showToast('Este puesto fronterizo ya existe.', 'info');
                }
            }
            else {
                showToast('Por favor, ingresa un puesto fronterizo.', 'error');
            }
        });
    }
}
