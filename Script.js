// Fetch the file
fetch('data.csv')
.then(response => response.text())
.then(data => {
    const contents = data; // Move contents declaration inside the promise chain
    const rows = contents.split('\n');

    const table = document.getElementById('dataTable');
    table.innerHTML = '';

    rows.forEach(row => {
        const cells = row.split(',');
        const tr = document.createElement('tr');

        cells.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell.trim();

            console.log("Cell content:", td.textContent); // Log cell content
            switch (td.textContent) {
                case "Played":
                case "Playing":
                case "Nearing":
                    td.style.backgroundColor = "#ffffddff";
                    break;

                case "Not Played":
                case "Not Interested":
                case "Interested":
                    td.style.backgroundColor = "#ffddddff";
                    break;
                case "Completed":
                case "True Ending":
                    td.style.backgroundColor = "#ccffccff";
                    break;
                case "Started":
                case "Watched":
                    td.style.backgroundColor = "#ffeebbff";
                    break;
                case "100%":
                case "112%":
                    td.style.backgroundColor = "#ddffffff";
                    break;


                // Ratings
                case "1":
                case "2":
                    td.style.backgroundColor = "#ff9494ff"
                    break;

                case "3":
                case "4":
                    td.style.backgroundColor = "#ffaa94ff"
                    break;

                case "5":
                    td.style.backgroundColor = "#ffbb94ff"
                    break;

                case "6":
                    td.style.backgroundColor = "#ffdd94ff"
                    break;

                case "7":
                    td.style.backgroundColor = "#ddff94ff"
                    break;

                case "8":
                    td.style.backgroundColor = "#bbff94ff"
                    break;

                case "9":
                    td.style.backgroundColor = "#94ffaaff"
                    break;

                case "10":
                    td.style.backgroundColor = "#94ffccff"
                    break;

                case "10S":
                    td.style.backgroundColor = "#94ffffff";
                    break;
            }

            tr.appendChild(td);
        });

        table.appendChild(tr);

    });
})
.catch(error => {
    console.error('Error fetching the file:', error);
});
