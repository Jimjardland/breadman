import jsdom from 'jsdom';
import fs from 'fs';
import request from 'request';

export default () => {
	const jquery = 'http://code.jquery.com/jquery.js',
		 url = 'http://www2.dailyfaceoff.com/starting-goalies/',
		 getPath = (filename) => `./img/${filename}.png`;

	const download = (uri, path, callback) => {
		if(uri) {
			request.head(uri, function(err, res, body) {
				request(uri).pipe(fs.createWriteStream(path)).on('close', callback);
			});
		}
	}

	const setMatchUpArray = (length) => {
		const array = [];

		for (var i=0; i < length; i++) {
			array.push({ home: '', away: ''});
		}
		return array;
	}

	const promise = new Promise ((resolve, reject) => {
		jsdom.env(url, [jquery], (err, window) => {
			if(window) {
				try {
					const retVal = [],
					$ = window.$,
					container = $('#matchups'),
					getText = (markup, selector) => markup.find(selector).text(),
					getAttr = (markup, selector, attr) => markup.find(selector).attr(attr),
					array = setMatchUpArray(container.find('.goalie.home').length);

					const setMatchUps = (team) => {
						container.find(`.goalie.${team}`).each(function (i) {
							var curr = $(this);

							const text = $(this).text().replace(/\\/g, ''),
								markup = $('<div>' + text.substring(text.indexOf('("') + 3, text.lastIndexOf('");')).trim() + '</div>'),
								imgUrl = getAttr(curr, 'img.headshot', 'src') || getAttr(markup, 'img.headshot', 'src'),
								title = getText(curr, 'h5 a') || getText(markup, 'h5 a'),
								goalie = {
									title: title,
									status: $(curr.find('dl dt').get(0)).text() || getText(markup, 'dl dt'),
									date: $(curr.find('dl dt').get(1)).text(),
									description: getText(curr, 'p'),
									team: getAttr(curr, 'span.logo', 'title') || getAttr(markup, 'span.logo', 'title'),
									img: getPath(title.replace(/ /g, ''))
								}

							if(!fs.existsSync(goalie.img)) {
								download(imgUrl, goalie.img, () => null);
							}
							array[i][team] = goalie;
						});
					}
					setMatchUps('home');
					setMatchUps('away');
					
					resolve(array);
				} catch (err) {
					console.log(err);
				}
			}
  		});
	});

	return promise;
};