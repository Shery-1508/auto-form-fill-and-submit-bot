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
