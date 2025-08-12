
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1164, hash: 'b5f6170967189fc864f7fb4cabc09c5020c8e6520a03e176d8e7f80acb3ac15a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '03f90ca19a81a3414bc4018ca428ac31de2b89cf7f70eb3cfdbdbb04bb71e1e3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QA6VVQAS.css': {size: 851, hash: '+CNi6XdAhMw', text: () => import('./assets-chunks/styles-QA6VVQAS_css.mjs').then(m => m.default)}
  },
};
