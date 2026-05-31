import viteConfig from '../../vite.config'

describe('vite config', () => {
  it('uses the root base path for custom-domain GitHub Pages deployment', async () => {
    const config = typeof viteConfig === 'function'
      ? await viteConfig({ command: 'build', mode: 'production' })
      : viteConfig

    expect(config.base).toBe('/')
  })
})
