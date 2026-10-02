import { describe, expect, it } from 'vitest'
import { repos } from '../test/mocks.js'
import { getLanguages, prepareRepos } from './github.js'

describe('github helpers', () => {
  it('quita los forks y ordena por estrellas', () => {
    const result = prepareRepos(repos)
    expect(result.map((r) => r.name)).toEqual(['FerreteriaLosMaestros', 'MatiasDuncker.github.io'])
  })

  it('lista lenguajes únicos ordenados', () => {
    expect(getLanguages(repos)).toEqual(['HTML', 'Java', 'JavaScript'])
  })
})