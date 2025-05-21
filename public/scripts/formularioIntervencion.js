import { showToast } from '/scripts/toast.js';
import { guardarTramite } from '/scripts/storage.js'; // Para guardar la intervención
export function setupIntervencionManual() {
    const form = document.getElementById("form-intervencion");
    const codigoTramiteInput = document.getElementById("codigo-tramite");
    const accionTextarea = document.getElementById("accion");
    if (form && codigoTramiteInput && accionTextarea) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const codigoTramite = codigoTramiteInput.value.trim();
            const accionTomada = accionTextarea.value.trim();
            if (!codigoTramite || !accionTomada) {
                showToast("Por favor, completa el código de trámite y la acción tomada.", "error");
                return;
            }
            // Guardar la intervención como un trámite
            guardarTramite('intervencion_manual', {
                codigo_tramite: codigoTramite,
                accion_tomada: accionTomada
            });
            showToast(`Intervención manual registrada para el trámite "${codigoTramite}".`, 'success');
            // Limpiar el formulario
            form.reset();
        });
    }
    else {
        console.error("Uno o más elementos del formulario de Intervención Manual no encontrados.");
    }
}
