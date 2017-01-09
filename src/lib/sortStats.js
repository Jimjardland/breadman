export default (json, query) => { 

	const sortFunc = (property) => {
	    return (a, b) => {
    	  if (a[property] < b[property]) {
			    return 1;
		  }
		  if (a[property] > b[property]) {
		    return -1;
		  }
		  return 0;
		}
    }

	const sorting = (json, query) => {
		var arr = json.items.data;
		const index = (query.start - 1) * query.limit;
		arr = arr.sort(sortFunc(query.sort));

		if(query.start && query.limit) arr = arr.slice(index % arr.length || 0, index + parseInt(query.limit))

		json.items.data = arr;

		return json;
	}
	return sorting(json, query);

}