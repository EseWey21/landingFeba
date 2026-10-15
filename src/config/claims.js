// Afirmaciones comerciales PUBLICADAS. Solo hay una confirmada por el dueño.
// Las demás viven en pendientes.js, que el sitio no importa, así su texto no viaja
// en el JavaScript público. Para publicar una, el dueño la confirma y se mueve aquí.

export const claims = {
  "sin-costos-ocultos": "Sin costos ocultos.",
}

export const claimText = (id) => claims[id] ?? null
