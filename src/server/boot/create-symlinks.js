const linkPackage = require('link-package');
linkPackage('src/client', 'client');
linkPackage('src/client/components', 'components');
linkPackage('src/common', 'common');
linkPackage('src/server', 'server');

// module.exports = function createSymlinks() {
//   linkPackage('src/client', 'client');
//   linkPackage('src/common', 'common');
//   linkPackage('src/server', 'server');
// };
