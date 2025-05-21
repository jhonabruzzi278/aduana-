import { showToast } from '../scripts/toast';
import { guardarTramite } from '../scripts/storage'; // Si quieres guardar el resultado de la validación
export function setupIntegracionMigraciones() {
    const form = document.getElementById("form-migraciones");
    const nombreInput = document.getElementById("nombre-migra");
    const nacionalidadInput = document.getElementById("nacionalidad-migra");
    const resultadoParrafo = document.getElementById("resultado-migraciones");
    if (form && nombreInput && nacionalidadInput && resultadoParrafo) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = nombreInput.value.trim();
            const nacionalidad = nacionalidadInput.value.trim();
            if (!nombre || !nacionalidad) {
                showToast("Completa ambos campos.", "error");
                resultadoParrafo.textContent = "❌ Completa ambos campos.";
                resultadoParrafo.className = "text-red-600 mt-4 font-semibold";
                return;
            }
            const estados = [
                "✅ Cruce migratorio válido",
                "❌ Ingreso no registrado en Argentina"
            ];
            const resultadoValidacion = estados[Math.floor(Math.random() * estados.length)];
            resultadoParrafo.textContent = resultadoValidacion;
            resultadoParrafo.className = "text-purple-700 mt-4 font-semibold";
            guardarTramite('validacion_migraciones', {
                nombre_pasajero: nombre,
                nacionalidad: nacionalidad,
                resultado: resultadoValidacion
            });
            showToast(`Validación de cruce para ${nombre} completada.`, 'info');
        });
    }
    else {
        console.error("Uno o más elementos del formulario de Migraciones no encontrados.");
    }
}
