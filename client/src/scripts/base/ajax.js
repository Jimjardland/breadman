(function () {
'use strict';
	nhl.ajax = {
		getAndCacheOrGetFromCache: function (url, key) {
			var storageData = nhl.cache.get(key);
			var def = $.Deferred();

			if(storageData === null) {
				this.get(url).then(function (data) {
					if(typeof(data) === 'string') data = JSON.parse(data);
					nhl.cache.setWithExpiration(key, data.items, data.nextUpdate);
					def.resolve(data.items);
				});
			} else {
				def.resolve(storageData.value);
			}

			return def.promise();

		},
		get: function (url) {
			return $.ajax({
				url: url,
				type: 'GET',
				headers: { 'Accept': 'application/json; odata=verbose' },
				async: true
			});
		}
	}
}());