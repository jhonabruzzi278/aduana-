import { showToast } from './toast';
import { guardarTramite } from './storage';

export function setupFormularioPasajeroEntrada(): void {
  const form = document.getElementById("form-pasajero") as HTMLFormElement | null;
  const nombre = document.getElementById("nombre") as HTMLInputElement | null;
  const documento = document.getElementById("documento") as HTMLInputElement | null;
  const nacionalidad = document.getElementById("nacionalidad") as HTMLInputElement | null;

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nombre?.value && documento?.value && nacionalidad?.value) {
      guardarTramite("pasajero_ingreso", {
        nombre: nombre.value,
        documento: documento.value,
        nacionalidad: nacionalidad.value,
      });

      showToast(`Pasajero ${nombre.value} registrado correctamente`, 'success');
      form.reset();
    } else {
      showToast('Todos los campos del pasajero son obligatorios', 'error');
    }
  });
}
