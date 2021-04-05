// from data.js
var tableData = data;
console.log(tableData);

// set references
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// get values for each column
tableData.forEach(function(UFOdata) {
    // console.log(UFOdata);
    // append one row for each sighting
    var sighting = tbody.append("tr");

    //use object.entries to separate key and value
    Object.entries(UFOdata).forEach(function([key, value]) {
      console.log(key, value);
      var rowDetail = sighting.append("td");
      rowDetail.text(value);
    });
  });


//create event handler
button.on("click", function() {

    tbody.html("");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // filter data using mapping
    var filteredDate = tableData.filter(d => d.datetime === inputValue);
    // console.log filtered data by date
    // console.log(filteredDate);
    filteredDate.forEach(function(i) {

    // console.log(i);
    // append row for each sighting
    var row = tbody.append("tr");
    
    //use object.entries to separate key and value
    Object.entries(i).forEach(function([key, value]) {
        console.log(key, value);
        var rowDetail = row.append("td");
        rowDetail.text(value);
    });
});
});