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

        newCell.appendChild(document.createTextNode(row.title1));
        if (!isEmptyString(row.author1)) {
            newCell.appendChild(document.createElement('br')); 
            newCell.appendChild(document.createTextNode(' (' + row.author1 + ')'));
        }
        
        newCell = newRow.insertCell();
        newCell.appendChild(document.createTextNode(row.title2));
        if (!isEmptyString(row.author2)) {
            newCell.appendChild(document.createElement('br')); 
            newCell.appendChild(document.createTextNode(' (' + row.author2 + ')'));
        }        
    });

})

