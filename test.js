const easyRename = require('./index.js');
const assert = require('assert');

describe('Easy Rename', function() {
	it('should convert bad filename', function() {
		assert(easyRename('Bad FileName (1).pdf') === 'bad_filename_1.pdf');
	});

	it('should convert a bad numeric filename', function() {
		assert(easyRename('120998 901283 2198390128 12098390128.doc') === '120998_901283_2198390128_12098390128.doc');
	});

	it('should convert a bad filename with diacritics', function() {
		assert(easyRename('Première Gymnopédie.clj') === 'premiere_gymnopedie.clj');
	});
});
