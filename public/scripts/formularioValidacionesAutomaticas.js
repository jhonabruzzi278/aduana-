import { showToast } from './toast.js'; // Asumiendo que toast.ts está en la misma carpeta o una carpeta padre
import { guardarTramite } from './storage.js'; // Si quieres guardar el resultado de la validación
export function setupValidacionesAutomaticas() {
    const form = document.getElementById("form-validacion");
    const input = document.getElementById("codigo-validacion");
    const resultado = document.getElementById("resultado-validacion");
    if (form && input && resultado) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const codigo = input.value.trim();
            if (!codigo) {
                showToast("Debes ingresar un código válido", "error");
                resultado.innerHTML = '<span class="text-red-600">❌ Ingresa un código válido.</span>';
                return;
            }
            // Simulación aleatoria de validación
            const estados = ["Aprobado", "Observado", "Rechazado"];
            const random = Math.floor(Math.random() * estados.length);
            const estado = estados[random];
            if (estado === "Aprobado") {
                resultado.innerHTML = `<span class="text-green-600">✅ Trámite ${codigo} ha sido <strong>Aprobado</strong>.</span>`;
                showToast(`Resultado: ${estado}`, "success");
            }
            else if (estado === "Observado") {
                resultado.innerHTML = `<span class="text-yellow-600">⚠️ Trámite ${codigo} fue <strong>Observado</strong>: falta verificación de documento.</span>`;
                showToast(`Resultado: ${estado}`, "info");
            }
            else {
                resultado.innerHTML = `<span class="text-red-600">❌ Trámite ${codigo} fue <strong>Rechazado</strong>: antecedentes no válidos.</span>`;
                showToast(`Resultado: ${estado}`, "error");
            }
            // Opcional: Guardar el resultado de la validación como un trámite
            guardarTramite('validacion_automatica', {
                codigo: codigo,
                estado: estado
            });
            form.reset();
        });
    }
    else {
        console.error("Uno o más elementos del formulario de Validaciones Automáticas no encontrados.");
    }
}
