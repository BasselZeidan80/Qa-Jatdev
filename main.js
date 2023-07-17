let allRows = [];

function toggleAssertion() {
    var action = document.getElementById("action");
    var assertionDiv = document.getElementById("assertionDiv");
    if (action.value === "expect") {
        assertionDiv.style.display = "flex";
        assertionDiv.style.flexDirection = "column";
    
    } else {
        assertionDiv.style.display = "none";
    }
}



// event dark mode 

// function myFunction() {
//     var element = document.body;
  
//     element.classList.toggle("dark-mode");
  
//  }


 // save inputs value
 


 function submitForm(ev) {
  ev.preventDefault();
  let selectInputs = document.querySelectorAll('select');
  let inputs = document.querySelectorAll('input');

  let res = [];
  inputs.forEach(inputs => {
    res.push(inputs.value)
    inputs.value = '';
  })

  selectInputs.forEach(input => {
    res.push(input.value)
  })

  allRows.push(res);
  console.log(allRows);

  // Clear input fields

  inputs.forEach(input => {
    if (input.name !== 'File-Name') {
      input.value = '';
    }
  });
  selectInputs.forEach(input => {
    input.selectedIndex = 0;
  });
}
    
  
  // Download file.Csv and assign name from input 


  function downloadCSV( ) {
    let fileName = document.getElementById("fileName").value;
    let data = allRows;
    let csvContent = "data:text/csv;charset=utf-8,";
    console.log('=====>' , data);
    data.forEach((rowArray) =>  {
      let row = rowArray.join(",");
      csvContent += row + "\n";
    });
    console.log('=====>' ,csvContent);
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName + ".csv");
    document.body.appendChild(link);
    
    link.click();
  }
