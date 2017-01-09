//Not doing direct query since we need cookie from TSN, might change this(?)
import jsdom from 'jsdom';

export default () => {
	const jquery = 'http://code.jquery.com/jquery.js';
	const url = 'http://www.tsn.ca/nhl/injuries';
	const restUrl = 'http://stats.tsn.ca/GET/urn:tsn:nhl:injuries?type=json';

	const ajaxGet = ($, url) => {
		return $.ajax({
				url: url,
				type: 'GET',
				headers: { 'Accept': 'application/json; odata=verbose' },
				async: true
			});

	}
	const promise = new Promise ((resolve, reject) => {
		jsdom.env(url, [jquery], (err, window) => {
			if(window)	{
				const retVal = [],
				$ = window.$

				ajaxGet($, restUrl).then(data => {
					resolve(data);
				});
			}
  		});
	});

	return promise;
};