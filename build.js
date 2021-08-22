const path = require('path');
const esbuild = require('esbuild');
const esbuildConfig = require('@common-web/esbuild');

console.time('esbuild build time');

esbuild.build(esbuildConfig.getBaseConfig());

console.timeEnd('esbuild build time');
