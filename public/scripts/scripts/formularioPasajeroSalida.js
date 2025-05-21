import { obtenerTramites, guardarTramite } from '../scripts/storage';
import { showToast } from '../scripts/toast';
export function setupFormularioSalida() {
    const form = document.getElementById('form-salida');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const documentoSalidaInput = document.getElementById('documento-salida');
            const documento = documentoSalidaInput.value.trim();
            if (!documento) {
                showToast('Por favor, ingresa el documento del pasajero.', 'error');
                return;
            }
            const tramitesExistentes = obtenerTramites();
            const pasajeroEncontrado = tramitesExistentes.find((t) => t.tipo === 'ingreso_pasajero' && t.datos.documento === documento);
            if (pasajeroEncontrado) {
                const datosSalida = {
                    documento: documento,
                };
                guardarTramite('salida_pasajero', datosSalida);
                showToast(`Salida registrada para el pasajero con documento: ${documento}.`, 'success');
                console.log('Detalles de salida:', datosSalida);
            }
            else {
                showToast('Pasajero no encontrado o no ha registrado su ingreso.', 'error');
            }
            form.reset();
        });
    }
    else {
        console.error('Formulario con ID "form-salida" no encontrado.');
    }
}
