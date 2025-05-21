export function guardarTramite(tipo, datos) {
    const fecha = new Date().toLocaleString();
    const nuevoTramite = { tipo, datos, fecha };
    const actuales = JSON.parse(localStorage.getItem("tramites") || "[]");
    actuales.push(nuevoTramite);
    localStorage.setItem("tramites", JSON.stringify(actuales));
}
export function obtenerTramites() {
    return JSON.parse(localStorage.getItem("tramites") || "[]");
}
export function limpiarTramites() {
    localStorage.removeItem("tramites");
}
