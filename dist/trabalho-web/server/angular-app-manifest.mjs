
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/TrabalhoWeb/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1176, hash: '727f9091d20aec8d8fd40dbd4ef3b184944e037a4fc0b65e53e9a4447e2bfec5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: 'e1774ad922dbfe25310752d53538cf651f953e939af3c485713b359d19f7e5da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QA6VVQAS.css': {size: 851, hash: '+CNi6XdAhMw', text: () => import('./assets-chunks/styles-QA6VVQAS_css.mjs').then(m => m.default)}
  },
};
