setTable(data);

function setTable(arr) {
    document.querySelector('#requests-table tbody').innerHTML = '';
    arr.forEach(function (item) {
        const numberID = item.id + 1;
        document.querySelector('#requests-table tbody').insertAdjacentHTML('beforeend', `
            <tr>
                <td>${numberID}</td>
                <td>${item.question}</td>
                <td>${item.answer}</td>
            </tr>
        `);
    });
}

function deleteItem(id) {
    let ids = data.map(function (item, i) {
        return data[i].id;
    })
    let index = ids.indexOf(id);

    if (index !== -1) {
        data.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(data));
        location.reload();
    }
}