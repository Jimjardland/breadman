import jsdom from 'jsdom';
import fs from 'fs';
import request from 'request';

export default () => {
	const jquery = 'http://code.jquery.com/jquery.js',
		 url = 'http://www2.dailyfaceoff.com/starting-goalies/',
		 getPath = (filename) => `./img/${filename}.png`;

	const download = (uri, path, callback) => {
		request.head(uri, function(err, res, body) {
			request(uri).pipe(fs.createWriteStream(path)).on('close', callback);
		});
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
				const retVal = [],
				$ = window.$,
				container = $('#matchups'),
				getText = (markup, selector) => markup.find(selector).text(),
				getAttr = (markup, selector, attr) => markup.find(selector).attr(attr),
				array = setMatchUpArray(container.find('.goalie.home').length);

				const setMatchUps = (team) => {
					container.find(`.goalie.${team}`).each(function (i) {
						const text = $(this).text().replace(/\\/g, ''),
							markup = $('<div>' + text.substring(text.indexOf('("') + 3, text.lastIndexOf('");')).trim() + '</div>'),
							imgUrl = getAttr(markup, 'img.headshot', 'src'),
							title = getText(markup, 'h5 a'),
							goalie = {
								title: title,
								status: getText(markup, 'dl dt'),
								description: getText(markup, 'p'),
								team: getAttr(markup, 'span.logo', 'title'),
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
			}
  		});
	});

	return promise;
};