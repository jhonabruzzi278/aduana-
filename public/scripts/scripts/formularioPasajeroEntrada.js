import { guardarTramite } from '../scripts/storage'; // Importa tu función de localStorage
import { showToast } from '../scripts/toast'; // Importa tu función de toast
export function setupFormulario() {
    const form = document.getElementById('form-pasajero');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita el envío por defecto del formulario
            const nombreInput = document.getElementById('nombre');
            const documentoInput = document.getElementById('documento');
            const nacionalidadInput = document.getElementById('nacionalidad');
            const nombre = nombreInput.value.trim();
            const documento = documentoInput.value.trim();
            const nacionalidad = nacionalidadInput.value.trim();
            if (!nombre || !documento || !nacionalidad) {
                showToast('Por favor, completa todos los campos.', 'error');
                return;
            }
            // Prepara los datos para guardar
            const datosPasajero = {
                nombre: nombre,
                documento: documento,
                nacionalidad: nacionalidad,
            };
            // Guarda el trámite usando tu función de localStorage
            guardarTramite('ingreso_pasajero', datosPasajero);
            showToast('Ingreso de pasajero registrado con éxito.', 'success');
            // Opcional: Limpiar el formulario después del envío
            form.reset();
        });
    }
    else {
        console.error('Formulario con ID "form-pasajero" no encontrado.');
    }
}
