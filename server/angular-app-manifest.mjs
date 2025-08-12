
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Jsp0w.github.io/TrabalhoWeb/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1199, hash: '837ae68448bb7f54532691ccbe594be713a7b96a00e71dd1fbb54e2857b76517', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: '01e6ba8a084d9863fe4a2baf1e6cb4005d3ad3b5811288f3f2a72998e308f59b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QA6VVQAS.css': {size: 851, hash: '+CNi6XdAhMw', text: () => import('./assets-chunks/styles-QA6VVQAS_css.mjs').then(m => m.default)}
  },
};
