'use strict';

const removeDiacritics = require('diacritics').remove;

function easyRename(filename) {
	let fileFormat = filename.split('.');
	fileFormat = fileFormat[fileFormat.length - 1];
	filename = removeDiacritics(filename);

	return filename
		.replace(/\s/gi, '_')
		.replace(/\W/gi, '')
		.replace(fileFormat, `.${fileFormat}`)
		.toLowerCase();
}

module.exports = easyRename;
