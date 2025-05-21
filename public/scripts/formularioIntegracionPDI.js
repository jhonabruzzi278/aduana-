import { showToast } from '/scripts/toast.js';
import { guardarTramite } from '/scripts/storage.js'; // Si quieres guardar el resultado de la validación
export function setupIntegracionPDI() {
    const form = document.getElementById("form-pdi");
    const docInput = document.getElementById("doc-pdi");
    const resultadoParrafo = document.getElementById("resultado-pdi");
    if (form && docInput && resultadoParrafo) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const doc = docInput.value.trim();
            if (!doc) {
                showToast("Ingresa el documento del pasajero.", "error");
                resultadoParrafo.textContent = "❌ Ingresa el documento del pasajero.";
                resultadoParrafo.className = "text-red-600 mt-4 font-semibold";
                return;
            }
            // Simulación de validación (aquí iría tu lógica real de integración)
            const estados = [
                "✅ Sin antecedentes",
                "❌ Alerta activa en PDI"
            ];
            const resultadoValidacion = estados[Math.floor(Math.random() * estados.length)];
            resultadoParrafo.textContent = resultadoValidacion;
            resultadoParrafo.className = "text-blue-700 mt-4 font-semibold"; // Mantener estilo original
            // Opcional: Guardar el resultado de la validación como un trámite
            guardarTramite('validacion_pdi', {
                documento: doc,
                resultado: resultadoValidacion
            });
            showToast(`Verificación de antecedentes para documento "${doc}" completada.`, 'info');
        });
    }
    else {
        console.error("Uno o más elementos del formulario de PDI no encontrados.");
    }
}
