
const contactsSave = document.getElementById('contact-container')
(async()=>{
    const respons = await fetch('http://localhost:5000/contacts',{
        method: 'GET',
    })
    const body = await respons.json();
    const data = body.data;

    function generate_table() {
        // creates a <table> element and a <tbody> element
         const tbl = document.createElement("table");
         const tblBody = document.createElement("tbody");
       
         // creating all cells
         for (let contact of data) {
           // creates a table row
           const row = document.createElement("tr");
       
           for (let key in contact) {
             // Create a <td> element and a text node, make the text
             // node the contents of the <td>, and put the <td> at
             // the end of the table row
             const cell = document.createElement("td");
             const cellText = document.createTextNode(contact[key]);
             cell.appendChild(cellText);
             row.appendChild(cell);
           }
       
           // add the row to the end of the table body
           tblBody.appendChild(row);
         }
       
         // put the <tbody> in the <table>
         tbl.appendChild(tblBody);
         // appends <table> into <body>
         document.body.appendChild(tbl);
         // sets the border attribute of tbl to '2'
         tbl.setAttribute("border", "2");
       }

})()
