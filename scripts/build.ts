import lume from 'lume/mod.ts';
const site = lume({
  src: './src'
});

import vento from 'lume/plugins/vento.ts';
site.use(vento());

site.filter("t", (label) => label);

await site.build();
