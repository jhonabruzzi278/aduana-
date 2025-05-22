import { showToast } from "/scripts/toast.js";
import { guardarTramite } from "/scripts/storage.js";

export function setupFormularioMascota() {
  const form = document.getElementById("form-mascota");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre")?.value.trim();
    const especie = document.getElementById("especie")?.value.trim();
    const vacunas = document.getElementById("vacunas")?.value;

    if (!nombre || !especie || !vacunas) {
      showToast("❌ Completa todos los campos", "error");
      return;
    }

    guardarTramite("mascota", { nombre, especie, vacunas });
    showToast(`🐶 Su mascota: ${nombre} ha sido registrada.`, "success");
    form.reset();
  });
}
