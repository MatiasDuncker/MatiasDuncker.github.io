import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mockFetch, repos } from './test/mocks.js'
import { renderAt } from './test/renderWithRouter.jsx'

// Pruebas de componentes: renderizamos la app en jsdom y la usamos como lo haría un usuario.
beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    mockFetch({
      '/users/MatiasDuncker/repos': repos,
    }),
  )
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Navegación', () => {
  it('muestra la portada con enlace a GitHub', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('MatiasDuncker')
    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    expect(githubLinks[0]).toHaveAttribute('href', 'https://github.com/MatiasDuncker')
  })
  
  it('muestra 404 en rutas desconocidas', () => {
    renderAt('/no-existe')
    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
  })
})

describe('Portafolio', () => {
  it('muestra repos sin forks y filtra por lenguaje', async () => {
    const user = userEvent.setup()
    renderAt('/portafolio')

    expect(await screen.findByText('Pagina-CSS ')).toBeInTheDocument()
    expect(screen.queryByText('repoforkeados')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Java' }))
    expect(screen.queryByText('FerreteriaLosMaestros')).not.toBeInTheDocument()
    expect(screen.getByText('Cat-alog')).toBeInTheDocument()
  })
})