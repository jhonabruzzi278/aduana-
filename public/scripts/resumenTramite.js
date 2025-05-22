import { obtenerTramites } from '/scripts/storage.js';

export function setupResumenTramites() {
  const resumenContenido = document.getElementById('resumen-contenido');
  if (!resumenContenido) {
    console.error('Elemento con ID "resumen-contenido" no encontrado.');
    return;
  }

  const tramites = obtenerTramites();
  if (!tramites.length) {
    resumenContenido.textContent = "No hay trámites registrados aún.";
    return;
  }

  const table = document.createElement('table');
  table.className = 'min-w-full bg-white border border-gray-300 rounded-lg';
  table.innerHTML = `
    <thead>
      <tr>
        <th class="py-2 px-4 border-b">Tipo</th>
        <th class="py-2 px-4 border-b">Fecha</th>
        <th class="py-2 px-4 border-b">Detalles</th>
      </tr>
    </thead>
    <tbody id="resumen-tbody"></tbody>
  `;

  const tbody = table.querySelector('#resumen-tbody');
  tramites.forEach(tramite => {
    const row = document.createElement('tr');
    row.className = 'hover:bg-gray-50';

    const tipoCell = document.createElement('td');
    tipoCell.className = 'py-2 px-4 border-b text-center';
    tipoCell.textContent = tramite.tipo;

    const fechaCell = document.createElement('td');
    fechaCell.className = 'py-2 px-4 border-b text-center';
    fechaCell.textContent = tramite.fecha;

    const datosCell = document.createElement('td');
    datosCell.className = 'py-2 px-4 border-b text-sm text-gray-700';
    datosCell.textContent = Object.entries(tramite.datos).map(([k, v]) => `${k}: ${v}`).join(', ');

    row.append(tipoCell, fechaCell, datosCell);
    tbody.appendChild(row);
  });

  resumenContenido.replaceChildren(table);
}
