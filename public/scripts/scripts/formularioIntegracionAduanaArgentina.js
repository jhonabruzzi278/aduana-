import { showToast } from '../scripts/toast';
import { guardarTramite } from '../scripts/storage'; // Si quieres guardar el resultado de la validación
export function setupIntegracionAduanaArgentina() {
    const form = document.getElementById("form-aduana-arg");
    const patenteInput = document.getElementById("patente");
    const resultadoParrafo = document.getElementById("resultado-aduana");
    if (form && patenteInput && resultadoParrafo) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const patente = patenteInput.value.trim();
            if (!patente) {
                showToast("Ingresa la patente del vehículo.", "error");
                resultadoParrafo.textContent = "❌ Ingresa la patente del vehículo.";
                resultadoParrafo.className = "text-red-600 mt-4 font-semibold";
                return;
            }
            const estados = [
                "✅ Documento válido reconocido por Chile",
                "❌ Documento no válido o vencido"
            ];
            const resultadoValidacion = estados[Math.floor(Math.random() * estados.length)];
            resultadoParrafo.textContent = resultadoValidacion;
            resultadoParrafo.className = "text-orange-700 mt-4 font-semibold";
            guardarTramite('validacion_aduana_argentina', {
                patente: patente,
                resultado: resultadoValidacion
            });
            showToast(`Validación de patente "${patente}" completada.`, 'info');
        });
    }
    else {
        console.error("Uno o más elementos del formulario de Aduana Argentina no encontrados.");
    }
}
