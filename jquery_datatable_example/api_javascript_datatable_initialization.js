/**
The data that will be show by the data table
*/
var dataSet = [["Carlos", "Nixon", "35"],
              ["Garrett", "Winters", "33"],
              ["Ashton", "Cox", "31"],
              ["Cedric", "Kelly", "38"],
              ["Airi", "Satou", "34"],
              ["Brielle", "Williamson", "32"],
              ["Herrod", "Chandler", "25"],
              ["Rhona", "Davidson", "22"],
              ["Colleen", "Hurst", "28"],
              ["Sonya", "Frost", "30"],
              ["Jena", "Gaines", "27"],
              ["Quinn", "Flynn", "20"],
              ["Charde", "Marshall", "39"],
              ["Haley", "Kennedy", "40"],
              ["Tatyana", "Fitzpatrick", "23"],
              ["Pedro", "Perez", "21"]];

/**
When the DOM is ready, we use the data table API to create a new one
based on a javascript array that provides the data.
*/
$(document).ready(function() {
    $('#wgc_table').DataTable( {
        data: dataSet, //data used by the data table
        columns: [
            { title: "First Name" },//defining table presentation using the API
            { title: "Last Name" },
            { title: "Age" }
        ]
    });
});