import viteConfig from '../../vite.config'

describe('vite config', () => {
  it('uses the custom domain root base path', async () => {
    const config = typeof viteConfig === 'function'
      ? await viteConfig({ command: 'build', mode: 'production' })
      : viteConfig

    expect(config.base).toBe('/')
  })
})
