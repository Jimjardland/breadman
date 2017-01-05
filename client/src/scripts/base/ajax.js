(function () {
'use strict';
	nhl.ajax = {
		getAndCacheOrGetFromCache: function (url, key) {
			var storageData = nhl.cache.get(key);
			var def = $.Deferred();

			if(storageData === null) {
				this.get(url).then(function (data) {
					data = JSON.parse(data);
					console.log(data.nextUpdate);
					nhl.cache.setWithExpiration(key, data.items, data.nextUpdate);
					def.resolve(data.items);
				});
			} else {
				console.log('from cache');
				def.resolve(storageData.value);
			}

			return def.promise();

		},
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