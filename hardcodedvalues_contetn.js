const data = [{
		"name": "John Smith",
		"email": "john.smith@example.com",
		"phone": "555-555-1212",
		"msg": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	},
	{
		"name": "Jane Doe",
		"email": "jane.doe@example.com",
		"phone": "555-555-1212",
		"msg": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		"name": "Bob Johnson",
		"email": "bob.johnson@example.com",
		"phone": "555-555-1212",
		"msg": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
	},
	{
		"name": "Mary Williams",
		"email": "mary.williams@example.com",
		"phone": "555-555-1212",
		"msg": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		"name": "Tom Davis",
		"email": "tom.davis@example.com",
		"phone": "555-555-1212",
		"msg": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
	},
	{
		"name": "Emily Martinez",
		"email": "emily.martinez@example.com",
		"phone": "555-555-1212",
		"msg": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
	},
	{
		"name": "David Garcia",
		"email": "david.garcia@example.com",
		"phone": "555-555-1212",
		"msg": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
	},
	{
		"name": "Karen Lee",
		"email": "karen.lee@example.com",
		"phone": "555-555-1212",
		"msg": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
	},
	{
		"name": "Mike Brown",
		"email": "mike.brown@example.com",
		"phone": "555-555-1212",
		"msg": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."
	},
	{
		"name": "Amy Chen",
		"email": "amy.chen@example.com",
		"phone": "555-555-1212",
		"msg": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
	},
	{
		"name": "Mark Kim",
		"email": "mark.kim@example.com",
		"phone": "555-555-1212",
		"msg": "Omnis voluptas assumenda est, omnis dolor repellendus."
	}
];


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
