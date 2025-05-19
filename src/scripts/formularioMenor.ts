import { showToast } from './toast';
import { guardarTramite } from './storage';

export function setupFormularioMenor(): void {
  const form = document.getElementById("form-menor") as HTMLFormElement | null;
  const checkbox = document.getElementById("es-menor") as HTMLInputElement | null;
  const contenedor = document.getElementById("datos-menor") as HTMLElement | null;
  const archivoInput = document.getElementById("archivo-doc") as HTMLInputElement | null;

  checkbox?.addEventListener("change", () => {
    contenedor?.classList.toggle("hidden", !checkbox.checked);
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombreMenor = document.getElementById("nombre-menor") as HTMLInputElement | null;
    const responsable = document.getElementById("responsable") as HTMLInputElement | null;
    const archivo = archivoInput?.files?.[0];

    if (checkbox?.checked) {
      if (nombreMenor?.value && responsable?.value && archivo) {
        guardarTramite("documentacion_menor", {
          menor: nombreMenor.value,
          responsable: responsable.value,
        });

        showToast(`Documentación enviada para ${nombreMenor.value}`, 'success');
        form.reset();
        contenedor?.classList.add("hidden");
      } else {
        showToast("❌ Faltan datos o archivo del menor", "error");
      }
    } else {
      showToast("Trámite enviado (no aplica menor)", "info");
      form.reset();
      contenedor?.classList.add("hidden");
    }
  });
}
