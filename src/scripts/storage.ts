
export interface Tramite {
  tipo: string;
  datos: Record<string, string>;
  fecha: string;
}


export function guardarTramite(tipo: string, datos: Record<string, string>): void {
  const fecha = new Date().toLocaleString();
  const nuevoTramite: Tramite = { tipo, datos, fecha };

  const actuales: Tramite[] = JSON.parse(localStorage.getItem("tramites") || "[]");
  actuales.push(nuevoTramite);
  localStorage.setItem("tramites", JSON.stringify(actuales));
}


export function obtenerTramites(): Tramite[] {
  return JSON.parse(localStorage.getItem("tramites") || "[]");
}


export function limpiarTramites(): void {
  localStorage.removeItem("tramites");
}
