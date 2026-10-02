import { vi } from 'vitest'

// Datos falsos (mocks) para no depender de internet en las pruebas.
export const repos = [
  { id: 1, name: 'Pagina-CSS', description: 'App React', language: 'JavaScript', stargazers_count: 5, updated_at: '2026-09-01T00:00:00Z', fork: false, html_url: 'https://github.com/MatiasDuncker/Pagina-CSS' },
  { id: 2, name: 'Cat-alog', description: null, language: 'Java', stargazers_count: 3, updated_at: '2026-08-01T00:00:00Z', fork: false, html_url: 'https://github.com/TurboKitten/Cat-alog' },
  { id: 3, name: 'FerreteriaLosMaestros', description: 'Un fork', language: 'HTML', stargazers_count: 99, updated_at: '2026-07-01T00:00:00Z', fork: true, html_url: 'https://github.com/donkiwicl/repo-forkeado' },
]

/** Reemplaza fetch global por uno que responde según la URL pedida. */
export function mockFetch(routes) {
  return vi.fn(async (url) => {
    const entry = Object.entries(routes).find(([pattern]) => url.includes(pattern))
    if (!entry) return { ok: false, status: 404, json: async () => ({}) }
    return { ok: true, status: 200, json: async () => entry[1] }
  })
}