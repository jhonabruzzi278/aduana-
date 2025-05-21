// src/scripts/formularioVehiculo.ts
import { guardarTramite } from '/scripts/storage.js';
import { showToast } from '/scripts/toast.js';
export function setupFormularioVehiculo() {
    const form = document.getElementById('form-vehiculo');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita el envío por defecto del formulario
            const placaInput = document.getElementById('placa');
            const marcaInput = document.getElementById('marca');
            const modeloInput = document.getElementById('modelo');
            const placa = placaInput.value.trim();
            const marca = marcaInput.value.trim();
            const modelo = modeloInput.value.trim();
            if (!placa || !marca || !modelo) {
                showToast('Por favor, completa todos los campos del vehículo.', 'error');
                return;
            }
            const datosVehiculo = {
                placa: placa,
                marca: marca,
                modelo: modelo,
            };
            guardarTramite('registro_vehiculo', datosVehiculo);
            showToast('Vehículo registrado con éxito.', 'success');
            form.reset();
        });
    }
    else {
        console.error('Formulario con ID "form-vehiculo" no encontrado.');
    }
}
