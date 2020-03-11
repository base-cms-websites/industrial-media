const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('137873098');

config
  .setTemplate('LB', {
    size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('BILLBOARD', { size: [970, 250] })
  .setTemplate('CONTENT', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'DDT-SL' },
    { name: 'lb2', templateName: 'LB', path: 'DDT-SL' },
    { name: 'rail1', templateName: 'CONTENT', path: 'DDT-MR' },
    { name: 'rail2', templateName: 'CONTENT', path: 'DDT-MR' },
    { name: 'load-more', templateName: 'CONTENT', path: 'DDT-MR' },
    { name: 'billboard', templateName: 'BILLBOARD', path: 'DDT-SL' },
    { name: 'reskin', path: 'DDT-Reskin' },
    { name: 'wa', path: 'default_wa' },
  ]);

module.exports = config;