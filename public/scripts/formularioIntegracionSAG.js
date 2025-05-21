import { showToast } from '/scripts/toast.js';
import { guardarTramite } from '/scripts/storage.js'; // Si quieres guardar el resultado de la validación
export function setupIntegracionSAG() {
    const form = document.getElementById("form-sag");
    const productoInput = document.getElementById("producto");
    const origenInput = document.getElementById("origen");
    const resultadoParrafo = document.getElementById("resultado-sag"); // Referencia al nuevo párrafo
    if (form && productoInput && origenInput && resultadoParrafo) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const producto = productoInput.value.trim();
            const origen = origenInput.value.trim();
            if (!producto || !origen) {
                showToast("Por favor, completa ambos campos.", "error");
                resultadoParrafo.textContent = "❌ Completa ambos campos.";
                resultadoParrafo.className = "text-red-600 mt-4 font-semibold";
                return;
            }
            const estados = [
                "✅ Producto validado y permitido.",
                "❌ Producto no permitido o requiere inspección adicional."
            ];
            const resultadoValidacion = estados[Math.floor(Math.random() * estados.length)];
            resultadoParrafo.textContent = resultadoValidacion;
            resultadoParrafo.className = "text-green-700 mt-4 font-semibold";
            guardarTramite('validacion_sag', {
                producto_declarado: producto,
                pais_origen: origen,
                resultado: resultadoValidacion
            });
            showToast(`Validación de producto "${producto}" completada.`, 'info');
        });
    }
    else {
        console.error("Uno o más elementos del formulario de SAG no encontrados.");
    }
}
