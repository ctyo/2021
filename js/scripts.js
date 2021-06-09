/*!
* Start Bootstrap - foss4g_tokai_2021 v6.0.2 (undefined)
* Copyright 2013-2021 undefined
* Licensed under MIT (https://github.com/StartBootstrap/foss4g_tokai_2021/blob/master/LICENSE)
*/
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

