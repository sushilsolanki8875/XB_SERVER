( function ( $ ) {
	'use strict';

	var hrKbd = {
		id: 'hr-kbd',
		name: 'Croatian kbd',
		description: 'Croatian keyboard layout',
		date: '2013-02-11',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['¸c', 'ç'],
			['¸C', 'Ç'],
			['¸s', 'ş'],
			['¸S', 'Ş'],
			['¨a', 'ä'],
			['¨A', 'Ä'],
			['¨e', 'ë'],
			['¨E', 'Ë'],
			['¨o', 'ö'],
			['¨O', 'Ö'],
			['¨u', 'ü'],
			['¨U', 'Ü'],
			['\\@', '\"'],
			['\\^', '&'],
			['\\&', '/'],
			['\\*', '('],
			['\\(', ')'],
			['\\)', '='],
			['\\-', '\''],
			['\\_', '?'],
			['\\=', '+'],
			['\\+', '*'],
			['\\`', '¸'],
			['\\~', '¨'],
			['y', 'z'],
			['Y', 'Z'],
			['\\[', 'š'],
			['\\{', 'Š'],
			['\\]', 'đ'],
			['\\}', 'Đ'],
			[';', 'č'],
			[':', 'Č'],
			['\'', 'ć'],
			['\"', 'Ć'],
			['\\\\', 'ž'],
			['\\|', 'Ž'],
			['z', 'y'],
			['Z', 'Y'],
			['\\<', ';'],
			['\\>', ':'],
			['/', '-'],
			['\\?', '_']
		]
	};

	$.ime.register( hrKbd );
}( jQuery ) );