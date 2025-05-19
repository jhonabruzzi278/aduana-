import { showToast } from './toast';
import { guardarTramite } from './storage';

export function setupIntervencionTramite(): void {
  const form = document.getElementById("form-intervencion") as HTMLFormElement | null;
  const codigo = document.getElementById("codigo-tramite") as HTMLInputElement | null;
  const estado = document.getElementById("estado-validacion") as HTMLSelectElement | null;
  const justificacion = document.getElementById("justificacion") as HTMLTextAreaElement | null;

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (codigo?.value && estado?.value && justificacion?.value) {
      guardarTramite("intervencion", {
        codigo: codigo.value,
        estado: estado.value,
        justificacion: justificacion.value,
      });

      showToast(`✅ Intervención registrada para ${codigo.value}`, 'success');
      form.reset();
    } else {
      showToast("❌ Todos los campos deben completarse para justificar el trámite", "error");
    }
  });
}
