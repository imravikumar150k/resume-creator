import viteConfig from '../../vite.config'

describe('vite config', () => {
  it('uses root base path for production builds on custom domain hosting', async () => {
    const config = typeof viteConfig === 'function'
      ? await viteConfig({ command: 'build', mode: 'production' })
      : viteConfig

    expect(config.base).toBe('/')
  })
})
