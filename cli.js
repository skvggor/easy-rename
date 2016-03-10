#!/usr/bin/env node

'use strict';

const meow = require('meow');
const easyRename = require('./');

const cli = meow({
	help: [
		'Usage: ',
		'$ easy-rename \'your bad text\''
	]
});

console.log(easyRename(cli.input[0] || ''));
