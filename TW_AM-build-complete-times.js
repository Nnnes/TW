Array.from(buildings_table.rows).forEach(function (row, i) {
	// Remove "Next building" cells if they exist
	while (row.cells.length > 21) {
		row.removeChild(row.lastChild);
	}

	if (i == 0) {
		// Add "Next building" header in first row
		let th = document.createElement('th');
		th.appendChild(document.createTextNode('Next building'));
		row.appendChild(th);
	} else {
		// Extract next building's completion time from queue mouseover text...
		let queue_icon = row.cells.item(20).querySelector('#order_0 .queue_icon img');
		let time_text = queue_icon?.getAttribute('data-title').split(' - ').at(1) || '';
		// ...into new cell
		row.insertCell().appendChild(document.createTextNode(time_text));
	}
});
