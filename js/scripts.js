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
    const isEmptyString = (str)=>{
        if (!str || str == '' || str == '-' || str == 'ー') { // なんかパターン増えそうなので...
            return true;
        }
        return false;
    }
    json.forEach(row => {
        const newRow = table.insertRow();

        let newCell = newRow.insertCell();
        newCell.appendChild(document.createTextNode(row.time));
        newCell = newRow.insertCell();

        const title1 = isEmptyString(row.content1) ? row.title1 : row.content1;
        newCell.appendChild(document.createTextNode(title1));
        if (!isEmptyString(row.author1)) {
            newCell.appendChild(document.createElement('br')); 
            newCell.appendChild(document.createTextNode(' (' + row.author1 + ')'));
        }
        
        newCell = newRow.insertCell();
        const title2 = isEmptyString(row.content2) ? row.title2 : row.content2;
        newCell.appendChild(document.createTextNode(title2));
        if (!isEmptyString(row.author2)) {
            newCell.appendChild(document.createElement('br')); 
            newCell.appendChild(document.createTextNode(' (' + row.author2 + ')'));
        }        
    });

})

