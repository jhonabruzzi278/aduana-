import { showToast } from './toast';
import { guardarTramite } from './storage';

export function setupFormularioConsultaTramite(): void {
  const form = document.getElementById("form-consulta") as HTMLFormElement | null;
  const input = document.getElementById("codigo-referencia") as HTMLInputElement | null;

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input?.value) {
      guardarTramite("consulta_estado", {
        codigo: input.value,
      });

      showToast(`✅ Trámite ${input.value} aprobado`, 'success');
      form.reset();
    } else {
      showToast("❌ Debes ingresar un código de referencia", 'error');
    }
  });
}
