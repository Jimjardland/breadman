import request from 'request';
import moment from 'moment';


export const getSeason = () => {
	const d = new Date(),
		year = d.getFullYear();

	if(d.getMonth() >= 9) {
		return year + '' + (year + 1);
	} else {
		return (year - 1) + '' + year;
	}
}

export const todayAndDaysBack = (daysBack, format) => {
	const retVal = (today, daysBack) => ({ today, daysBack });
	const d = new Date();
	d.setDate(d.getDate() - daysBack);

	return retVal(moment(new Date()).add(-6, 'hours').format(format), moment(d).format(format));
}

export const formatDate = (date, format) => {
	return moment(date).format(format);
}

export const cacheDates = () => {
	return { latestUpdate: new Date().toISOString(), nextUpdate: moment(new Date()).add(5, 'minutes').add(5, 'seconds').toISOString() }
}