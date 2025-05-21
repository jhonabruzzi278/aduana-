import { guardarTramite } from '/scripts/storage.js'; // Importa tu función de localStorage
import { showToast } from '/scripts/toast.js'; // Importa tu función de toast
export function setupFormularioMenor() {
    const esMenorCheckbox = document.getElementById('es-menor');
    const datosMenorDiv = document.getElementById('datos-menor');
    const form = document.getElementById('form-menor');
    if (esMenorCheckbox && datosMenorDiv && form) {
        // Lógica para mostrar/ocultar campos al marcar el checkbox
        esMenorCheckbox.addEventListener('change', () => {
            if (esMenorCheckbox.checked) {
                datosMenorDiv.classList.remove('hidden');
            }
            else {
                datosMenorDiv.classList.add('hidden');
                // Opcional: Limpiar los campos si se ocultan
                document.getElementById('nombre-menor').value = '';
                document.getElementById('responsable').value = '';
                document.getElementById('archivo-doc').value = '';
            }
        });
        // Lógica para el envío del formulario
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita el envío por defecto del formulario
            const nombreMenorInput = document.getElementById('nombre-menor');
            const responsableInput = document.getElementById('responsable');
            const archivoDocInput = document.getElementById('archivo-doc');
            const nombreMenor = nombreMenorInput.value.trim();
            const responsable = responsableInput.value.trim();
            const archivoDoc = archivoDocInput.files && archivoDocInput.files.length > 0 ? archivoDocInput.files[0].name : ''; // Solo el nombre del archivo
            if (esMenorCheckbox.checked) {
                if (!nombreMenor || !responsable || !archivoDoc) {
                    showToast('Por favor, completa todos los campos para el menor.', 'error');
                    return;
                }
            }
            else {
                // Si no es menor, quizás no necesitas guardar nada o la lógica es diferente
                showToast('No se requiere documentación de menor.', 'info');
                return; // No se guarda si no es menor y no hay campos relevantes
            }
            // Prepara los datos para guardar
            const datosMenor = {
                es_menor: esMenorCheckbox.checked.toString(),
                nombre_menor: nombreMenor,
                responsable: responsable,
                archivo_documento: archivoDoc,
            };
            // Guarda el trámite usando tu función de localStorage
            guardarTramite('documentacion_menor', datosMenor);
            showToast('Documentación de menor enviada con éxito.', 'success');
            // Opcional: Limpiar el formulario después del envío
            form.reset();
            datosMenorDiv.classList.add('hidden'); // Ocultar de nuevo los campos
            esMenorCheckbox.checked = false; // Desmarcar el checkbox
        });
    }
    else {
        console.error('Uno o más elementos del formulario de menor no encontrados.');
    }
}
