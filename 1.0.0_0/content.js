// // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// // (async () => {
// //     // Fetch the JSON data from data.json file
// //     const response = await fetch('data.json');
// //     const data = await response.json();

// //     for (let i = 0; i < data.length; i++) {
// //         const item = data[i];
// //         const inputs = document.getElementsByTagName("input");
// //         const inputList = Array.prototype.slice.call(inputs);

// //         const textareas = document.querySelectorAll("textarea");
// //         const textareasArray = Array.prototype.slice.call(textareas);

// //         textareasArray.forEach((textarea) => {
// //             textarea.value = item.msg;
// //         });

// //         for (const input of inputList) {
// //             switch (input.getAttribute("type")) {
// //                 case "text":
// //                     input.focus();
// //                     if (input.id.includes("mail") || input.name.includes("mail"))
// //                         input.value = item.email;
// //                     else
// //                         input.value = item.name;
// //                     input.blur();
// //                     break;
// //                 case "number":
// //                     input.focus();
// //                     input.value = item.phone;
// //                     input.blur();
// //                     break;
// //                 case "tel":
// //                     input.focus();
// //                     input.value = item.phone;
// //                     input.blur();
// //                     break;
// //                 case "email":
// //                     input.focus();
// //                     input.value = item.email;
// //                     input.blur();
// //                     break;
// //                 case "checkbox":
// //                     checkInputs();
// //                     break;
// //                 default:
// //                     break;
// //             }
// //         }

// //         const submitButton = document.querySelector('button[type="submit"]');

// //         // Wait for 2 seconds before clicking on the submit button
// // 		await delay(2000);

// //         submitButton.click();
// // 		await delay(1000);
// //     }
// // })();











// ///////////////////////////////////////// working with harcoded values ////////////////////////////

// const data=[{
//     "name": "John Smith",
//     "email": "john.smith@example.com",
//     "phone": "555-555-1212",
//     "msg": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
// },
// {
//     "name": "Jane Doe",
//     "email": "jane.doe@example.com",
//     "phone": "555-555-1212",
//     "msg": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
// },
// {
//     "name": "Bob Johnson",
//     "email": "bob.johnson@example.com",
//     "phone": "555-555-1212",
//     "msg": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
// },
// {
//     "name": "Mary Williams",
//     "email": "mary.williams@example.com",
//     "phone": "555-555-1212",
//     "msg": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// },
// {
//     "name": "Tom Davis",
//     "email": "tom.davis@example.com",
//     "phone": "555-555-1212",
//     "msg": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
// },
// {
//     "name": "Emily Martinez",
//     "email": "emily.martinez@example.com",
//     "phone": "555-555-1212",
//     "msg": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
// },
// {
//     "name": "David Garcia",
//     "email": "david.garcia@example.com",
//     "phone": "555-555-1212",
//     "msg": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
// },
// {
//     "name": "Karen Lee",
//     "email": "karen.lee@example.com",
//     "phone": "555-555-1212",
//     "msg": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
// },
// {
//     "name": "Mike Brown",
//     "email": "mike.brown@example.com",
//     "phone": "555-555-1212",
//     "msg": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."
// },
// {
//     "name": "Amy Chen",
//     "email": "amy.chen@example.com",
//     "phone": "555-555-1212",
//     "msg": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
// },
// {
//     "name": "Mark Kim",
//     "email": "mark.kim@example.com",
//     "phone": "555-555-1212",
//     "msg": "Omnis voluptas assumenda est, omnis dolor repellendus."
// }
// ]

const dataUrl = chrome.runtime.getURL('data.json');
const fetchData = async () => {
    const response = await fetch(dataUrl);
    const data = await response.json();
    return data;
}

(async () => {
    const data = await fetchData();

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    (async () => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const inputs = document.getElementsByTagName("input");
            const inputList = Array.prototype.slice.call(inputs);

            const textareas = document.querySelectorAll("textarea");
            const textareasArray = Array.prototype.slice.call(textareas);

            textareasArray.forEach((textarea) => {
                textarea.value = item.msg;
            });

            // function checkInputs() {
            //     checkboxInputsArray.forEach((input) => {
            //         input.checked = true;
            //         input.blur();
            //     });
            // }

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
                        checkInputs();
                        break;
                    default:
                        break;
                }
            }

            const submitButton = document.querySelector('button[type="submit"]');

            // Wait for 2 seconds before clicking on the submit button
            await delay(2000);

            submitButton.click();
            await delay(1000);
        }
    })();
})();


///////////////////////////////////////// #working with harcoded values ////////////////////////////




// const submitForm = async (data) => {
//     const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//     for (let i = 0; i < data.length; i++) {
//         const item = data[i];
//         const inputs = document.getElementsByTagName("input");
//         const inputList = Array.prototype.slice.call(inputs);

//         const textareas = document.querySelectorAll("textarea");
//         const textareasArray = Array.prototype.slice.call(textareas);

//         textareasArray.forEach((textarea) => {
//             textarea.value = item.msg;
//         });

//         for (const input of inputList) {
//             switch (input.getAttribute("type")) {
//                 case "text":
//                     input.focus();
//                     if (input.id.includes("mail") || input.name.includes("mail"))
//                         input.value = item.email;
//                     else
//                         input.value = item.name;
//                     input.blur();
//                     break;
//                 case "number":
//                     input.focus();
//                     input.value = item.phone;
//                     input.blur();
//                     break;
//                 case "tel":
//                     input.focus();
//                     input.value = item.phone;
//                     input.blur();
//                     break;
//                 case "email":
//                     input.focus();
//                     input.value = item.email;
//                     input.blur();
//                     break;
//                 case "checkbox":
//                     checkInputs();
//                     break;
//                 default:
//                     break;
//             }
//         }

//         const submitButton = document.querySelector('button[type="submit"]');

//         // Wait for 2 seconds before clicking on the submit button
//         await delay(2000);

//         submitButton.click();
//         await delay(1000);
//     }
// };

// // Add a listener to the extension icon
// chrome.browserAction.onClicked.addListener(handleFileInput);



























































































// var inputs = document.getElementsByTagName("input");
// var inputList = Array.prototype.slice.call(inputs);

// var checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
// var checkboxInputsArray = Array.prototype.slice.call(checkboxInputs);

// var textareas = document.querySelectorAll("textarea");
// var textareasArray = Array.prototype.slice.call(textareas);

// function generateRandomText(number) {
// 	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// 	var text = "";
// 	for (var i = 0; i < number; i++) {
// 		text += possible.charAt(Math.floor(Math.random() * possible.length));
// 	}
// 	return text;
// }

// function generateRandomNumber() {
// 	var possible = "+0123456789";
// 	var number = "";
// 	number = "+92 30221452648456321"
// 	return number;
// }

// function generateRandomEmail() {
// 	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// 	var text = "";
// 	return text = generateRandomText(6).toLowerCase() + "@" + generateRandomText(6).toLowerCase() + ".com";

// }

// function generateNumber(min, max) {
// 	var number = 0;
// 	return number = Math.floor((Math.random() * max)) + min;
// }

// textareasArray.forEach((textarea) => {
// 	textarea.value = "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// });

// function checkInputs() {
// 	checkboxInputsArray.forEach((input) => {
// 		input.checked = true;
// 		input.blur();
// 	});
// }

// function checkRadio() {
// 	radioInput.checked = true;
// }

// inputList.forEach((input) => {
// 	switch (input.getAttribute("type")) {
// 		case "text":
// 			input.focus();
// 			if (input.id.includes("mail") || input.name.includes("mail"))
// 				input.value = generateRandomEmail();
// 			else
// 				input.value = generateRandomText(9);
// 			input.blur();
// 			break;
// 		case "number":
// 			input.focus();
// 			input.value = generateRandomNumber();
// 			input.blur();
// 			break;
// 		case "email":
// 			input.focus();
// 			input.value = generateRandomEmail();
// 			input.blur();
// 			break;
// 		case "checkbox":
// 			checkInputs();
// 			break;
// 		case "tel":
// 			var maxLength = input.maxlength;
// 			input.value = generateRandomNumber();
// 			break;
// 		case "submit":
// 			// Click the submit button
// 			form.querySelector('button[type="submit"]').click();
// 			break;
// 		default:
// 			break;
// 	}
// });
// const submitButton = document.querySelector('button[type="submit"]');

// // Wait for 2 seconds before clicking on the submit button
// setTimeout(() => {
// 	submitButton.click();

// 	// Wait for 1 second before refreshing the page
// 	setTimeout(() => {
// 		location.reload();
// 		// Check if the page has been refreshed
// 		if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
// 			console.log('Page has been refreshed');
// 		} else {
// 			console.log('Page has not been refreshed');
// 		}
// 	}, 1000);
// }, 2000);





// Submit the form
// const form = document.getElementById('contact-form');
// form.submit();

// document.querySelector('input[value="Submit"]').disabled = false;



//     // Define the array data for each field
//     const nameArray = ['John Doe', 'Jane Smith', 'Bob Johnson'];
//     const emailArray = ['john.doe@example.com', 'jane.smith@example.com', 'bob.johnson@example.com'];
//     const phoneArray = ['1234567890', '9876543210', '5555555555'];
//     const msgArray = ["msg 1","msg 2","msg 3"]

//     // Define the number of times you want to submit the form
//     const submitCount = nameArray.length;

// // Loop through the number of times you want to submit the form
// let count = 0;
// for (let i = 0; i < submitCount; i++) {