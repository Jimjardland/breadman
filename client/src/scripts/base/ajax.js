(function () {
'use strict';
	nhl.ajax = {
		get: function (url) {
			console.log('y');
			return $.ajax({
				url: url,
				type: 'GET',
				headers: { 'Accept': 'application/json; odata=verbose' },
				async: true
			});
		}
	}
}());