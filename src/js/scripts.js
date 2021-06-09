fetch('./assets/timetable.json')
.then((response) => {
    if (!response.ok) {
        throw new Error();
    }
    return response.json()
})
.then((json) => {
    console.dir(json);
    const table = document.querySelector('#timetable');
    json.forEach(row => {
        const newRow = table.insertRow();

        let newCell = newRow.insertCell();
        newCell.appendChild(document.createTextNode(row.time));
        newCell = newRow.insertCell();

        let text = row.title1 + (row.author1 == '' ? '' : ' \n(' + row.author1 + ')');
        newCell.appendChild(document.createTextNode(text));
        newCell = newRow.insertCell();
        let text2 = row.title2 + (row.author2 == '' ? '' : ' \n(' + row.author2 + ')');
        newCell.appendChild(document.createTextNode(text2));
    });
    console.dir(json)
})

