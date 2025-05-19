import { showToast } from './toast';
import { guardarTramite } from './storage';

export function setupFormularioPasajeroSalida(): void {
  const form = document.getElementById("form-salida") as HTMLFormElement | null;
  const doc = document.getElementById("documento-salida") as HTMLInputElement | null;

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (doc?.value) {
      guardarTramite("pasajero_salida", {
        documento: doc.value,
      });

      showToast(`Salida registrada para ${doc.value}`, 'success');
      form.reset();
    } else {
      showToast('Debes ingresar el documento para registrar salida', 'error');
    }
  });
}
