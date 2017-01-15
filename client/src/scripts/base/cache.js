(function () {
'use strict';
	nhl.cache = {
		prefix: 'breadman_',
		set: function (key, value) {
			if(this.getStorage) this.getStorage().setItem(this.prefix + key, JSON.stringify(value));
		},
		get: function (key) {
			var item = JSON.parse(this.getStorage().getItem(this.prefix + key));
			var dateKey = 'localStorageKeyExpires';

			if(item && item.hasOwnProperty(dateKey) && new Date(item[dateKey]).getTime() < new Date().getTime()) {
				this.remove(key);
			} else {
				return item;
			}

			return null;
		},
		setWithExpiration: function (key, value, date) {
			this.getStorage().setItem(this.prefix + key, JSON.stringify({ value: value, localStorageKeyExpires: date}));
		},
		remove: function (key) {
			this.getStorage().removeItem(key);
		},
		getStorage: function () {
			if(localStorage) return localStorage;
			if(sessionStorage) return sessionStorage;
		},
		clear: function () {
			var arr = [];

			for (var i = 0; i < localStorage.length; i++){
			    if (localStorage.key(i).substring(0, this.prefix.length) == this.prefix) {
			        arr.push(localStorage.key(i));
			    }
			}

			for (var i = 0; i < arr.length; i++) {
			    localStorage.removeItem(arr[i]);
			}
		}
	}
}());