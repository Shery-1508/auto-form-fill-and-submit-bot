// Get the URL of the data.json file using Chrome's runtime API
const dataUrl = chrome.runtime.getURL('data.json');

// Define an async function to fetch data from the data.json file
const fetchData = async () => {
   const response = await fetch(dataUrl); // Fetch the data using the data URL
   const data = await response.json(); // Parse the JSON data and return it
   return data;
}

// Define an IIFE (Immediately Invoked Function Expression) to execute the code
(async () => {
   const data = await fetchData(); // Fetch the data using the fetchData function

   // Define a delay function that returns a promise that resolves after the given time in milliseconds
   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

   // Define another IIFE to loop through the data and fill the form
   (async () => {
      for (let i = 0; i < data.length; i++) {
         const item = data[i]; // Get the current data item
         const inputs = document.getElementsByTagName("input"); // Get all the input elements on the page
         const inputList = Array.prototype.slice.call(inputs); // Convert the HTMLCollection to an array

         const textareas = document.querySelectorAll("textarea"); // Get all the textarea elements on the page
         const textareasArray = Array.prototype.slice.call(textareas); // Convert the NodeList to an array

         // Fill all the textareas with the current message from the data item
         textareasArray.forEach((textarea) => {
            textarea.value = item.msg;
         });

         // Fill the input fields based on their type and ID/Name attribute
         for (const input of inputList) {
            switch (input.getAttribute("type")) {
               case "text":
                  input.focus();
                  if (input.id.includes("mail") || input.name.includes("mail"))
                     input.value = item.email;
                  else
                     input.value = item.name;
                  input.blur();
                  break;
               case "number":
                  input.focus();
                  input.value = item.phone;
                  input.blur();
                  break;
               case "tel":
                  input.focus();
                  input.value = item.phone;
                  input.blur();
                  break;
               case "email":
                  input.focus();
                  input.value = item.email;
                  input.blur();
                  break;
               case "checkbox":
                  checkInputs(); // This function is commented out and not used
                  break;
               default:
                  break;
            }
         }

         const submitButton = document.querySelector('button[type="submit"]'); // Get the submit button

         // Wait for 2 seconds before clicking on the submit button
         await delay(2000);

         submitButton.click(); // Click the submit button
         await delay(1000); // Wait for 1 second before processing the next data item
      }
   })();

})
();
