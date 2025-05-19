import { showToast } from './toast';
import { guardarTramite } from './storage';

export function setupFormularioVehiculo(): void {
  const form = document.getElementById("form-vehiculo") as HTMLFormElement | null;
  const placa = document.getElementById("placa") as HTMLInputElement | null;
  const marca = document.getElementById("marca") as HTMLInputElement | null;
  const modelo = document.getElementById("modelo") as HTMLInputElement | null;

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (placa?.value && marca?.value && modelo?.value) {
      guardarTramite("vehiculo", {
        placa: placa.value,
        marca: marca.value,
        modelo: modelo.value,
      });

      showToast(`Vehículo ${placa.value} registrado con éxito`, 'success');
      form.reset();
    } else {
      showToast('Faltan campos por completar en el vehículo', 'error');
    }
  });
}
