import viteConfig from '../../vite.config'

describe('vite config', () => {
  it('uses the repository subpath base path for GitHub Pages', async () => {
    const config = typeof viteConfig === 'function'
      ? await viteConfig({ command: 'build', mode: 'production' })
      : viteConfig

    expect(config.base).toBe('/resume-creator/')
  })
})
