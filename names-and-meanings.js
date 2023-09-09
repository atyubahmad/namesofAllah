// JavaScript code to populate the table with names and meanings
const tableBody = document.querySelector("tbody");

namesOfAllah.forEach((entry, index) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = entry.name;

    const meaningCell = document.createElement("td");
    meaningCell.textContent = entry.meaning;

    row.appendChild(nameCell);
    row.appendChild(meaningCell);

    tableBody.appendChild(row);
});
