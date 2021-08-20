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
            const author1 = document.createElement('span')
            author1.className = 'author'
            author1.appendChild(document.createTextNode(row.author1));
            if (!isEmptyString(row.belong1)) {
                author1.appendChild(document.createElement('br')); 
                author1.appendChild(document.createTextNode(row.belong1));
            }
            newCell.appendChild(author1);
        }
        newCell = newRow.insertCell();
        const title2 = isEmptyString(row.content2) ? row.title2 : row.content2;
        newCell.appendChild(document.createTextNode(title2));
        if (!isEmptyString(row.author2)) {
            newCell.appendChild(document.createElement('br')); 
            const author2 = document.createElement('span')
            author2.className = 'author'
            author2.appendChild(document.createTextNode(row.author2));
            if (!isEmptyString(row.belong2)) {
                author2.appendChild(document.createElement('br')); 
                author2.appendChild(document.createTextNode(row.belong2));
            }
            newCell.appendChild(author2);
        }        
    });

})

